<i18n>
{
  "en": {
    "text: dev-info-error": "Failed to query device information. Please reconnect serial.",
    "text: ap-resp-error": "Failed to poll data.",

    "end": "end"
  },
  "zh": {
    "Serial Port": "串口",
    "Baud Rate": "波特率",
    "Baud rate for the service port.": "服务串口波特率",
    "text: dev-info-error": "获取设备信息失败，请再次连接串口。",
    "text: ap-resp-error": "获取数据失败。",

    "end": "结束"
  }
}
</i18n>
<template>
  <el-container style="height: 100%;">
    <!-- 左半屏 -->
    <el-aside style="width: 300px;">
      <el-card style="height: 100%; box-sizing: border-box;" shadow="never">
        <!-- 串口连接信息 -->
        <el-row>
          <el-col :span="24">
            <el-form ref="form" label-position="left" label-width="80px">
              <el-form-item :label="$t('Serial Port')">
                <el-select v-model="selectedSerialPort"
                  :disabled="serialVSelectDisable"
                  @focus="onSerialVSelectClicked">
                  <el-option v-for="item in serialPorts" :key="item" :value="item"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item :label="$t('Baud Rate')">
                <el-select v-model="baudRate"
                  :disabled="serialVSelectDisable">
                  <el-option v-for="item in baudRates" :key="item" :value="item"></el-option>
                </el-select>
                <div class="text-note">{{$t('Baud rate for the service port.')}}</div>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <!-- 按钮 -->
        <el-row type="flex" justify="center" style="padding: 10px;">
          <el-col :span="18">
            <el-button :type="connectBtnColor" style="width: 100%;"
              @click="ConnectFn"
              >{{connectBtnText}}</el-button>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" style="padding: 10px;">
          <el-col :span="18">
            <el-button type="primary" plain style="width: 100%;"
              @click="openSettingsFn">{{$t("Settings")}}</el-button>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" style="padding: 10px;">
          <el-col :span="18">
            <el-button type="primary" plain style="width: 100%;"
              @click="openFwUpdateFn">{{$t("Firmware Update")}}</el-button>
          </el-col>
        </el-row>
        <!-- 设备信息 -->
        <el-row>
          <el-col>
            <el-divider></el-divider>
            <h5>{{$t("Device Information")}}</h5>
            <div class="text-subheader">{{$t("S/N")}}</div>
            <div class="text-detail">{{eui}}</div>
            <div class="list-spacer"></div>
            <div class="text-subheader">{{$t("Hardware Version")}}</div>
            <div class="text-detail">{{hwVersion}}</div>
            <div class="list-spacer"></div>
            <div class="text-subheader">{{$t("Software Version")}}</div>
            <div class="text-detail">{{swVersion}}</div>
            <div class="list-spacer"></div>
            <div class="text-subheader">{{$t("Date of Manufacture")}}</div>
            <div class="text-detail">{{dateOfManu}}</div>
            <div class="list-spacer"></div>
            <div class="text-subheader">{{$t("Device Name")}}</div>
            <div class="text-detail">{{devName}}</div>
          </el-col>
        </el-row>
      </el-card>
    </el-aside>
    <el-main style="padding: 0px 0px 0px 10px;">
      <el-card style="height: 100%; box-sizing: border-box;" shadow="never" body-style="padding: 0px; height: 100%;">
        <!-- card列表，响应式，宽度会变，高度不变 -->
        <el-scrollbar  style="height: 100%; overflow-x: hidden;" wrap-style="overflow-x: hidden;">
          <el-row :gutter="10" style="padding: 10px;">
            <el-col :md="12" :lg="12" :xl="8" v-for="grp in slaveGroups" :key="grp.grpName">
              <el-card body-style="padding: 5px 15px 10px; min-height: 240px;">
                <div slot="header" class="clearfix">
                  <span>{{$t(grp.grpName)}}</span>
                </div>
                <el-row style="padding-top: 5px;" v-for="(meas, measName) in grp.meas" :key="meas.name">
                  <el-col :span="12">
                    <div class="text-subheader" style="padding-top: 5px;">{{$t(meas.name)}}</div>
                    <div class="text-detail">{{values[measName]}} {{units[measName]}}{{meas.unitSuffix}}</div>
                  </el-col>
                  <el-col :span="12">
                    <ve-line :data="dataPoints[measName]"
                      height="35px"
                      :extend="genPlotExtendSettings(measName)"></ve-line>
                  </el-col>
                </el-row>
              </el-card>
              <div class="list-spacer"></div>
            </el-col>
          </el-row>
        </el-scrollbar>
      </el-card>
    </el-main>
  </el-container>
</template>

<style scoped>
.text-note {
  font-size: 10px;
  color: #909399;
}
.text-subheader {
  font-size: 12px;
  color: #606266;
}
.text-detail {
  font-size: 11px;
  color: #909399;
}
.list-spacer {
  min-height: 12px;
}
.clearfix:before, .clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.clearfix {
  font-weight: 500;
}


</style>

<script>
const { ipcRenderer } = require('electron')
const Store = require('electron-store')
const store = new Store()
import VeLine from 'v-charts/lib/line.common'
import { slaveGroupDefines,
  miscGroupDefine,
  changableUnitsMeasMap,
  displayStrForUnit
} from '@/global-defines'
import compareVersions from 'compare-versions'

const delayMs = ms => new Promise(res => setTimeout(res, ms))

export default {
  name: 'Home',
  components: {
    VeLine
  },
  data() {
    this.chartExtendSettings = {
      grid: {
        show: true,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        containLabel: false
      },
      legend: {
        show: false
      },
      xAxis: {
        show: false,
        boundaryGap: false,
        type: 'category',
      },
      yAxis: {
        show: false,
        scale: false,
        //boundaryGap: ['100%', '0%'],
        type: 'value'
      },
      series: {
        symbol: 'none',
        showSymbol: false,
        lineStyle: {
            width: 1,
            color: '#205C71',
            opacity: 0.5
        },
        areaStyle: {
            color: 'rgb(51, 153, 0)',
            opacity: 0.2
        },
      },
      backgroundColor: 'rgb(240, 240, 240)',
      animation: false,
      tooltip: {
        show: true,
        textStyle: {fontSize: 10},
        padding: 1,
      }
    }

    this.hIntervalCheckDevInfo = null
    this.hIntervalPollData = null
    this.hTimeoutQueryUnits = null

    return {
      //Serial
      selectedSerialPort: null,
      serialPorts: [],
      baudRates: [9600, 19200, 38400, 115200, 230400, 460800, 921600, 2000000],
      baudRate: 9600,
      serialOpened: false,
      //global param
      plotPointNum: 1000,
      apAddr: '',
      pollInterval: 2,  //sec
      isUpdating: false,

      //Device Info
      eui: '##',
      hwVersion: '##',
      swVersion: '##',
      dateOfManu: '##',
      devName: '##',


      //dataset
      units: {},
      values: {},
      dataPoints: {"AT": this.chartDataExample},
      detectedI2cAddrs: {"1": "1.0"},  //{"1": "1.0", "2": "1.1"}
      slaveGroups: [],
      slaveGroupShortNames: [],

    }
  },
  computed: {
    connectBtnText: function() {
      return this.serialOpened ? this.$t('Disconnect') : this.$t('Connect')
    },
    connectBtnColor: function() {
      return this.serialOpened ? 'success' : 'primary'
    },
    serialVSelectDisable: function() {
      return this.serialOpened
    },
  },
  methods: {
    //to adjust the y Axis scaling
    genPlotExtendSettings(measName) {
      let ret = JSON.parse(JSON.stringify(this.chartExtendSettings))
      if (['AT'].includes(measName)) {
        ret.yAxis.minInterval = 10
      } else if (['AH'].includes(measName)) {
        ret.yAxis.min = 0
        ret.yAxis.max = 100
      } else if (['AP'].includes(measName)) {
        ret.yAxis.scale = true  //bottom can be non-zero
        ret.yAxis.boundaryGap = ['200%', '0%']  //the variable range will lie on the top 1/3
      } else if (['DN', 'DM', 'DA'].includes(measName)) {
        ret.yAxis.min = 0
        ret.yAxis.max = 360
      } else if (['SN', 'SM', 'SA'].includes(measName)) {
        ret.yAxis.minInterval = 5
      } else if (['RA', 'RI', 'RP'].includes(measName)) {
        // ret.yAxis.minInterval = 10
      } else if (['RD'].includes(measName)) {
        ret.yAxis.minInterval = 60
      } else if (['CO2'].includes(measName)) {
        ret.yAxis.minInterval = 50
        ret.yAxis.scale = true  //bottom can be non-zero
        // ret.yAxis.boundaryGap = ['200%', '0%']  //the variable range will lie on the top 1/3
      }
      return ret
    },

    onSerialVSelectClicked() {
      ipcRenderer.send('init-serial-req')
      return true
    },

    ConnectFn() {
      console.log(this.selectedSerialPort)
      if (!this.selectedSerialPort) return
      if (!this.serialOpened) {
        ipcRenderer.send('serial-open-req', this.selectedSerialPort, this.baudRate)
      } else {
        ipcRenderer.send('serial-close-req')
      }
    },
    openSettingsFn() {
      console.log('going to send IPC open-settings-window')
      ipcRenderer.send('open-settings-window')
    },
    openFwUpdateFn() {
      console.log('going to send IPC open-fwupdate-window')
      ipcRenderer.send('open-fwupdate-window')
    },

    checkDeviceInfo() {
      if (this.eui === '##' || this.hwVersion === '##' || this.swVersion === '##' ||
          this.dateOfManu === '##' || this.devName === '##')
      {
        console.log('still missing device info ...')
        ipcRenderer.send('dev-info-req')
      } else {
        clearInterval(this.hIntervalCheckDevInfo)
        this.hIntervalCheckDevInfo = null
      }
    },
    reqDeviceInfo() {
      this.eui = this.hwVersion = this.swVersion = this.dateOfManu = this.devName = '##'
      ipcRenderer.send('dev-info-req')
      this.hIntervalCheckDevInfo = setInterval(this.checkDeviceInfo, 2000)
    },

    displaySlaveGroups() {
      this.slaveGroups = []
      this.slaveGroupShortNames = []
      for (const i2cAddr in slaveGroupDefines) {
        if (i2cAddr in this.detectedI2cAddrs) {
          for (const grp of slaveGroupDefines[i2cAddr]) {
            for (const measName in grp.meas) {
              this.units[measName] = grp.meas[measName]["unit"]
              this.values[measName] = "##"
              this.dataPoints[measName] = {
                columns: ['time', 'value'],
                rows: []
              }
            }
            //add grp last, because this will trigger the re-render
            //before this, units and values should be updated first
            this.slaveGroups.push(JSON.parse(JSON.stringify(grp)))  //deep copy
            this.slaveGroupShortNames.push(grp.grpNameShort)
          }
        }
      }
      let miscGroupAvailable = false
      let miscGroup = JSON.parse(JSON.stringify(miscGroupDefine))
      for (const measName in miscGroup.meas) {
        let show = false
        let i = 0
        for (const i2cAddr of miscGroup.meas[measName].i2cAddr) {
          if (i2cAddr in this.detectedI2cAddrs
              && compareVersions.compare(this.swVersion, miscGroup.meas[measName].commVer[i], '>=')
              && compareVersions.compare(this.detectedI2cAddrs[i2cAddr], miscGroup.meas[measName].drvVer[i], '>=')) {
            miscGroupAvailable = true
            show = true
            break
          }
          i++
        }
        if (show) {
          this.units[measName] = miscGroup.meas[measName]["unit"]
          this.values[measName] = "##"
          this.dataPoints[measName] = {
            columns: ['time', 'value'],
            rows: []
          }
        } else {
          delete miscGroup.meas[measName]
        }
      }
      if (miscGroupAvailable) {
        this.slaveGroups.push(miscGroup)
        this.slaveGroupShortNames.push(miscGroup.grpNameShort)
      }
    },

    pollData() {
      if (this.isUpdating) return
      for (const slaveGroupShortName of this.slaveGroupShortNames) {
        if (this.serialOpened) {
          ipcRenderer.send('ap-req', `${slaveGroupShortName}?`, '*', 2000)
        }
      }
    },
    parseData(dataObj) {
      const d = new Date()
      const dateStr = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
      for (const dataObjKey in dataObj) {
        //it's measurement value
        if (dataObjKey in this.values) {
          this.values[dataObjKey] = dataObj[dataObjKey]
          let currentRows = this.dataPoints[dataObjKey].rows
          this.dataPoints[dataObjKey].rows.push({time: dateStr, value: dataObj[dataObjKey]})
          if (this.dataPoints[dataObjKey].rows.length > this.plotPointNum) {
            this.dataPoints[dataObjKey].rows.shift()
          }
        }
        //it's unit query result
        else if (dataObjKey in changableUnitsMeasMap) {
          for (const measName of changableUnitsMeasMap[dataObjKey]) {
            this.units[measName] = displayStrForUnit(dataObjKey, dataObj[dataObjKey])
            console.log(`set ${measName} unit to ${this.units[measName]}`)
          }
        }
      }
    },

    queryUnits() {
      for (const unitKey in changableUnitsMeasMap) {
        ipcRenderer.send('ap-req', `${unitKey}=?`, `${unitKey}=`, 1000)
      }
    },

  },
  created() {
    console.log(`locale when created: ${this.$root.$i18n.locale}`)

    //load config
    this.plotPointNum  = parseInt(store.get('plotPointNum', 10))  //points
    this.pollInterval = parseInt(store.get('dataPollInterval', 2))  //sec

    //init properties for responsive rendering
    for (const i2cAddr in slaveGroupDefines) {
      for (const grp of slaveGroupDefines[i2cAddr]) {
        for (const measName in grp.meas) {
          this.$set(this.units, measName, '#')
          this.$set(this.values, measName, "##")
          this.$set(this.dataPoints, measName, {
            columns: ['time', 'value'],
            rows: []
          })
        }
      }
    }
    for (const measName in miscGroupDefine.meas) {
      this.$set(this.units, measName, '#')
      this.$set(this.values, measName, "##")
      this.$set(this.dataPoints, measName, {
        columns: ['time', 'value'],
        rows: []
      })
    }

  },
  mounted() {
    //serial
    ipcRenderer.on('init-serial-resp', (event, arg) => {
      console.log('init-serial-resp:', arg)
      let {ports, selectedPort, opened} = arg
      this.serialPorts = []
      for (let p of ports) {
        this.serialPorts.push(p.path)
      }
      this.selectedSerialPort = selectedPort
      this.serialOpened = opened
    })
    ipcRenderer.send('init-serial-req')

    ipcRenderer.on('serial-open-resp', (event, arg) => {
      console.log('serial-open-resp:', arg)
      let {opened, reason} = arg
      if (opened) {
        this.serialOpened = true
        this.apAddr = ''
      } else {
        console.error('serial open failed:', reason)
      }
    })
    ipcRenderer.on('serial-close-resp', (event, arg) => {
      console.log('serial-close-resp:', arg)
      let {closed, reason} = arg
      if (closed) {
        this.serialOpened = false
        this.apAddr = ''
        if (this.hIntervalCheckDevInfo) {
          clearInterval(this.hIntervalCheckDevInfo)
          this.hIntervalCheckDevInfo = null
        }
        if (this.hIntervalPollData) {
          clearInterval(this.hIntervalPollData)
          this.hIntervalPollData = null
        }
        if (this.hTimeoutQueryUnits) {
          clearTimeout(this.hTimeoutQueryUnits)
          this.hTimeoutQueryUnits = null
        }
      } else {
        console.error('serial close failed:', reason)
      }
    })
    ipcRenderer.on('flash-finished', (event) => {
      console.log('recv flash-finished event, disconnect and connect...')
      if (this.serialOpened) {
        ipcRenderer.send('serial-close-req')
        setTimeout(() => {
          ipcRenderer.send('serial-open-req', this.selectedSerialPort, this.baudRate)
        }, 1000)
      }
    })

    //ap-addr-got
    ipcRenderer.on('ap-addr-got', (event, arg) => {
      if (arg != this.apAddr) {
        console.log(`ascii protocol address got (${arg}), let's get started!`)
        this.apAddr = arg
        setImmediate(this.reqDeviceInfo)
      }
    })

    //i2c list got
    ipcRenderer.on('i2c-list-got', (event, arg) => {
      console.log(arg)
      this.detectedI2cAddrs = JSON.parse(JSON.stringify(arg))
      console.log('i2c-list-got:', this.detectedI2cAddrs)
    })

    //dev info got
    ipcRenderer.on('dev-info-resp', (event, arg) => {
      let {'S/N': SN, HW, SW, MD, NA} = arg
      this.eui = SN
      this.hwVersion = HW
      this.swVersion = SW
      this.dateOfManu = MD
      this.devName = NA
      if (this.hIntervalCheckDevInfo) {
        clearInterval(this.hIntervalCheckDevInfo)
        this.hIntervalCheckDevInfo = null
      }
      //start to refresh data
      if (this.hIntervalPollData) {
        clearInterval(this.hIntervalPollData)
      }
      this.hIntervalPollData = setInterval(this.pollData, this.pollInterval * 1000)

      //start to query units
      if (this.hTimeoutQueryUnits) {
        clearTimeout(this.hTimeoutQueryUnits)
      }
      this.hTimeoutQueryUnits = setTimeout(this.queryUnits, 1000)

      //display slave groups
      setImmediate(this.displaySlaveGroups)
    })
    ipcRenderer.on('dev-info-resp-error', (event, arg) => {
      this.$message.error(this.$t('text: dev-info-error'))
    })

    // data
    let apRespErrCnt = 0
    ipcRenderer.on('ap-resp', (event, arg) => {
      console.log(arg)
      apRespErrCnt = 0
      this.parseData(arg)
    })
    ipcRenderer.on('ap-resp-error', (event, arg) => {
      if (this.isUpdating) return
      console.log(arg)
      apRespErrCnt++
      if (apRespErrCnt > 10) {
        this.$message.error(this.$t('text: ap-resp-error'))
        apRespErrCnt = 0
      }
    })

    //locale
    ipcRenderer.on('locale-change', (event, arg) => {
      console.log(`locale changed to:`, arg)
      this.$root.$i18n.locale = arg
    })

    //config change
    ipcRenderer.on('config-change', (event) => {
      console.log(`received config-change event, reloading configs from store ...`)
      this.plotPointNum  = parseInt(store.get('plotPointNum', 10))  //points
      let pollInterval = parseInt(store.get('dataPollInterval', 2))  //sec
      if (pollInterval !== this.pollInterval && this.hIntervalPollData) {
        clearInterval(this.hIntervalPollData)
        this.pollInterval = pollInterval
        this.hIntervalPollData = setInterval(this.pollData, this.pollInterval * 1000)
      }
    })

    //unit change
    ipcRenderer.on('unit-change', (event) => {
      console.log(`received unit-change event, reloading units from device ...`)
      this.queryUnits()
    })

    //baud rate change
    ipcRenderer.on('baud-rate-change', (event, arg) => {
      console.log(`received baud-rate-change event, changed to ${arg}`)
      this.baudRate = arg
    })

    //Firmware Update
    ipcRenderer.on('update-fw-begin', (event) => {
      console.log('fw update begin ...')
      this.isUpdating = true
    })
    ipcRenderer.on('update-fw-abort', (event) => {
      console.log('fw update aborted')
      this.isUpdating = false
    })
    ipcRenderer.on('update-fw-end', (event) => {
      console.log('fw update end')
      this.isUpdating = false
    })

  },
  beforeDestroy() {
    ipcRenderer.removeAllListeners()
  }

}
</script>

