<i18n>
{
  "en": {
    "status: downloading": "Downloading the selected firmware from internet ...",
    "status: entering bootloader": "Entering the bootloader ...",
    "status: ymodem flashing": "Flashing the device ...",

    "end": "end"
  },
  "zh": {
    "Target Board": "目标板",
    "Online Version": "线上版本",
    "Local File": "本地文件",
    "Will ignore online version if local file is selected.": "如果选取了本地文件，将忽略线上版本的选择。",
    "Failed in selecting file.": "选取文件时出错。",
    "Please Push the Reset Button.": "请轻触设备的复位按钮。",
    "The device does not support update via this tool.": "设备不支持通过此工具升级。",
    "Can not detect device, please connect the device.": "检测不到设备，请重连设备服务串口。",
    "Timeout.": "等待超时。",
    "The firmware binary is corrupted.": "固件文件坏损。",
    "The target board is not found on this device.": "您选取的目标板在设备上不存在。",
    "YModem transfer error happened.": "YModem传输出错。",
    "Firmware update failed.": "固件升级失败。",
    "Please reset the device manually.": "请手动复位设备。",
    "Firmware is updated.": "固件升级成功。",
    "Master Board": "主板",
    "Slave Board": "驱动板",
    "status: downloading": "正在从互联网下载选择的固件 ...",
    "status: entering bootloader": "正在进入bootloader ...",
    "status: ymodem flashing": "正在写入固件 ...",
    "end": "结束"
  }
}
</i18n>
<template>
  <el-container style="height: 100%;">
    <el-main>
      <el-form ref="form1" :model="ruleForm"
        label-position="left"
        label-width="100px"
        hide-required-asterisk>
        <el-form-item :label="$t('Target Board')" prop="targetBoard"
          :rules="[rules.required]">
          <el-select v-model="ruleForm.targetBoard"
            :disabled="targetBoardSelectionDisable"
            @focus="ontargetBoardSelectClicked">
            <el-option v-for="item in optionsTargetBoard"
              :key="item.value" :value="item.value" :label="item.label"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('Online Version')" v-if="0" prop="onlineVersion"
          :rules="[rules.requireOne]">
          <el-select v-model="ruleForm.onlineVersion">
            <el-option v-for="item in optionsOnlineVersionSelected"
              :key="item.value" :value="item.value" :label="item.label"></el-option>
          </el-select>
          <div class="text-note">{{$t('Not implemented yet, ')}}</div>
        </el-form-item>
        <el-form-item :label="$t('Local File')" prop="localFilePath"
          :rules="[rules.requireOne]">
          <el-input v-model="ruleForm.localFilePath" style="width: 300px;">
              <el-button slot="append" icon="el-icon-document" @click="onSelectFile"
                :disabled="isUpdating"></el-button>
          </el-input>
          <div class="text-note" v-if="0">{{$t('Will ignore online version if local file is selected.')}}</div>
        </el-form-item>
        <div v-if="isUpdating">
          <span class="text-note">{{statusText}}</span>
          <el-progress style="width: 400px; margin-top: 5px;"
            :text-inside="true"
            :stroke-width="20"
            :percentage="progress"></el-progress>
          <span class="text-note" style="color: white;">{{infoText}}</span>
        </div>
      </el-form>
    </el-main>
    <el-footer>
      <div style="padding: 15px 0px; text-align: right;">
        <el-button type="primary"
          @click="doUpdateFn"
          :loading="isUpdating">{{$t('Update')}}</el-button>
        <el-button type="primary"
          @click="closeWindowFn"
          :disabled="isUpdating">{{$t('Close')}}</el-button>
      </div>
    </el-footer>
  </el-container>
</template>

<style>
.mask-text i {
  /* spinner */
  color: white !important;
  font-size: 26px !important;
}
.mask-text p {
  color: white !important;
  font-size: 16px !important;
}
</style>
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

const delayMs = ms => new Promise(res => setTimeout(res, ms))

export default {
  name: 'Home',
  data() {
    let validateRequireOne = (rule, value, callback) => {
      if (!this.ruleForm.onlineVersion && !this.ruleForm.localFilePath) {
        callback(new Error(this.$t('Required.')))
      } else {
        callback()
      }
    }

    let rules = {
      required: {required: true, message: this.$t("Required."), trigger: 'change'},
      requireOne: {validator: validateRequireOne, trigger: 'change'}
    }

    return {
      rules: rules,

      //Serial
      serialOpened: false,

      //global Vars
      apAddr: '',
      i2cAddrFromDevice: {},
      isUpdating: false,
      loading: false,
      fwPath: "",

      //Buttons
      btnUpdateLoading: false,

      //
      optionsTargetBoard: [],

      optionsOnlineVersion: {
        "master": [
          {value: "1.0", label: "1.0", url: ""}
        ]
      },
      ruleForm: {
        targetBoard: "",
        onlineVersion: "",
        localFilePath: "",
      },
      statusText: "",
      progress: 0,
      infoText: "",
    }
  },
  computed: {
    targetBoardSelectionDisable: function() {
      return this.isUpdating
    },

    optionsOnlineVersionSelected: function() {
      if (this.ruleForm.targetBoard && this.ruleForm.targetBoard in this.optionsOnlineVersion) {
        return this.optionsOnlineVersion[this.ruleForm.targetBoard]
      } else {
        return []
      }
    }
  },
  methods: {
    genTargetBoardOptions: function() {
      let _optsTargetBoards = [
        {value: "master", label: this.$t('Master Board')}
      ]
      for (let i = 1; i < 32; i++) {
        _optsTargetBoards.push({value: `${i}`, label: this.$t('Slave Board') + ` ${i}`})
      }
      return _optsTargetBoards
    },

    ontargetBoardSelectClicked() {
      //to let the i18n
      this.optionsTargetBoard = this.genTargetBoardOptions()
      ipcRenderer.send('i2c-list-req', 1)  //arg 1 meas request swVersion as well
    },

    renderTargetBoardOptions() {
      //this.optionsTargetBoard = JSON.parse(JSON.stringify(this._optsTargetBoards))
      for (const i2cAddr in this.i2cAddrFromDevice) {
        const swVer = this.i2cAddrFromDevice[i2cAddr]
        for (let targetBoard of this.optionsTargetBoard) {
          if (i2cAddr === 'SW' && targetBoard.value === 'master') {
            targetBoard.label = this.$t('Master Board') + ` @v${swVer}`
          } else if (i2cAddr === targetBoard.value) {
            targetBoard.label = this.$t('Slave Board') + ` ${i2cAddr} @v${swVer}`
          }
        }
      }
    },

    onSelectFile() {
      ipcRenderer.invoke('select-file').then((result) => {
        if (result === 'canceled') return
        console.log('selected file:', result)
        this.ruleForm.localFilePath = result.trim()
      }).catch((error) => {
        this.$message.error(this.$t('Failed in selecting file.'))
      })
    },

    doUpdateFn() {
      //validate
      let formValid = false
      this.$refs['form1'].validate((valid) => formValid = valid)
      if (!formValid) return false

      if (!this.ruleForm.onlineVersion && !this.ruleForm.localFilePath) return false

      this.isUpdating = true
      Promise.resolve().then(() => {
        if (this.ruleForm.localFilePath) {
          //will return back the file path again
          return ipcRenderer.invoke('test-file', this.ruleForm.localFilePath)
        } else {
          return 'doOnline'
        }
      }).then((result) => {
        if (result === 'doOnline') {
          let url
          for (const item of this.optionsOnlineVersion[this.ruleForm.targetBoard]) {
            if (item.value === this.ruleForm.onlineVersion) {
              url = item.url
              break
            }
          }
          if (url) {
            this.statusText = this.$t("status: downloading")
            this.progress = 0
            //will return back the file path, which is located under the app data folder
            return ipcRenderer.invoke('download-file', url)
          } else {
            return ""
          }
        } else {
          return result  //pass through the localFilePath
        }
      }).then((result) => {
        console.log('get update file path finally:', result)
        this.fwPath = result
        console.log('guide user to reset board, and enter bootloader ...')
        this.statusText = this.$t("status: entering bootloader")
        this.progress = 0
        this.loading = this.$loading({
          lock: true,
          text: this.$t('Please Push the Reset Button.'),
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.5)',
          customClass: 'mask-text'
        })
        return ipcRenderer.invoke('enter-bootloader', this.ruleForm.targetBoard)
      }).then((slaveDevices) => {
        console.log('slaveDevices:', slaveDevices)
        this.infoText = JSON.stringify(slaveDevices)
        console.log('start to do ymodem update ...')
        this.statusText = this.$t("status: ymodem flashing")
        this.progress = 0
        this.loading.close()
        return ipcRenderer.invoke('ymodem-update', this.ruleForm.targetBoard, this.fwPath)
      }).catch((error) => {
        console.log('doUpdateFn:', error)
        let errorMsg = error.message
        if (errorMsg.includes('bootloader not supported')) {
          this.$message.error(this.$t('The device does not support update via this tool.'))
        } else if (errorMsg.includes('serial not ready')) {
          this.$message.error(this.$t('Can not detect device, please connect the device.'))
        } else if (errorMsg.includes('timeout waiting reboot')) {
          this.$message.error(this.$t('Timeout.'))
        } else if (errorMsg.includes('fw file is empty')) {
          this.$message.error(this.$t('The firmware binary is corrupted.'))
        } else if (errorMsg.includes('target board not found')) {
          this.$message.error(this.$t('The target board is not found on this device.'))
        } else if (errorMsg.includes('yModem transfer error')) {
          this.$message.error(this.$t('YModem transfer error happened.'))
        } else if (errorMsg.includes('user canceled')) {
          console.log('user canceled entering bootloader')
        } else {
          this.$message.error(this.$t('Firmware update failed.'))
        }

      }).finally(() => {
        this.isUpdating = false
        if (this.loading) this.loading.close()
      })

    },

    closeWindowFn() {
      console.log('going to send IPC close-fwupdate-window')
      ipcRenderer.send('close-fwupdate-window')
    },

  },
  created() {

    console.log(`locale when created: ${this.$root.$i18n.locale}`)

  },
  mounted() {
    //Serial Status
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
      } else {
        console.error('serial close failed:', reason)
      }
    })

    //ap-addr-got
    ipcRenderer.on('ap-addr-got', (event, arg) => {
      if (arg != this.apAddr) {
        console.log(`ascii protocol address got (${arg}), let's get started!`)
        this.apAddr = arg
        // setImmediate(this.reqDeviceInfo)
      }
    })

    //i2c list got
    ipcRenderer.on('i2c-list-got', (event, arg) => {
      console.log(arg)
      this.i2cAddrFromDevice = JSON.parse(JSON.stringify(arg))
      console.log('i2c-list-got:', this.i2cAddrFromDevice)
      setImmediate(this.renderTargetBoardOptions)
    })

    //locale
    ipcRenderer.on('locale-change', (event, arg) => {
      console.log(`locale changed to:`, arg)
      this.$root.$i18n.locale = arg
    })

    //Firmware Update
    ipcRenderer.on('update-fw-begin', (event) => {
      console.log('fw update begin ...')
      //this.isUpdating = true
    })
    ipcRenderer.on('progress', (event, arg) => {
      console.log('fw update progress:', arg)
      this.progress = parseFloat(arg)
    })
    ipcRenderer.on('update-fw-abort', (event) => {
      console.log('fw update abort ...')
      //this.isUpdating = true
      this.$message({
        type: 'warning',
        message: this.$t('Please reset the device manually.'),
        duration: 5000
      })
    })
    ipcRenderer.on('update-fw-end', (event) => {
      // this.isUpdating = false
      console.log('fw update end ...')
      this.$message({
        type: 'success',
        message: this.$t('Firmware is updated.'),
        duration: 5000
      })
      this.$message({
        type: 'warning',
        message: this.$t('Please reset the device manually.'),
        duration: 5000,
        offset: 60
      })
    })

  },
  beforeDestroy() {
    ipcRenderer.removeAllListeners()
  }

}
</script>

