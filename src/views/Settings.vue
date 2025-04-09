<i18n>
{
  "en": {
    "note10": "Apply after the service cable is unplugged, ",
    "note10-1": "changable for Service Port only.",
    "note11": "Valid range 0-9, A-Z, a-z.",
    "note12": "Apply for both Service Port and Main Port.",
    "note13": "Valid range [1, 247].",
    "note15": "Valid range 0-9, A-Z, a-z.",
    "note16": "Max. length 64.",
    "note20": "The output list for G0 poll.",
    "note30": "The output list for G1 poll, this also affects the data updating for main page.",
    "note31": "Valid range [1, 3600].",
    "note40": "The output list for G2 poll, this also affects the data updating for main page.",
    "note41": "Valid range [1, 3600].",
    "note42": "The period over which the wind speed and direction averaging is done, range [1, 3600].",
    "note43": "How frequently the wind is measured.",
    "note44": "Valid range [-180, 180].",
    "note50": "The output list for G3 poll, this also affects the data updating for main page.",
    "note51": "Valid range [1, 3600].",
    "G3": {
      "IR": "Valid range [10, 3600].",
      "AL": "Valid range [10, 80000], current unit.",
      "DL": "Valid range [100, 2000000]."
    },
    "G4": {
      "ol": "The output list for G4 poll, this also affects the data updating for main page.",
      "IDUST": "Valid range [1, 3600]."
    },
    "G5": {
      "ol": "The output list for G5 poll, this also affects the data updating for main page.",
      "ICO2": "Valid range [1, 3600]."
    },
    "G9": {
      "ol": "The output list for G9 poll, this also affects the data updating for main page.",
      "uih": "Valid range [15, 3600], if heating is enabled, this interval is set to 15 seconds implicitly.",
      "cc": "If enabled, the device can be installed in arbitrary direction, it will find the north with the assistance of compass sensor.",
      "calib": "Cycle around the vertical axis for 1~2 turns, meanwhile keep the device vertical for at least 30 seconds.",
      "calibDialog": "Once started, the device will collect the calibration data for 30 seconds, and can't be stopped."
    },
    "note101": "The interval of polling data for the main page, range [2, 3600].",
    "note102": "The maximum number of points in each plot, range [10, 100].",
    "text: not ready for reading from device": "Can not detect device, please reconnect the device.",
    "text: failed reading from device": "Failed in reading device, please check ASCII protocol baud rate.",
    "text: config not loaded from anywhere": "The configuration is incomplete.",
    "text: config hw type not match": "Can not write to a device with different hardware type.",
    "text: not ready for writing to device": "Can not detect device, please reconnect the device.",
    "text: failed writing to device": "Failed in writing device.",
    "text: restore factory notice": "This will reset all the configurations to factory default, confirm to continue?",
    "text: restore factory success": "Restored factory settings, please reconnect the device with baud rate 9600.",
    "text: reset counters": "This will reset this counter to zero, confirm to continue?",
    "text: reset success": "The counter has been reset successfully.",

    "end": "end"
  },
  "zh": {
    "Device": "设备设置",
    "Application": "应用程序设置",
    "General": "通用设置",
    "Main Port Protocol": "主通信协议",
    "note10": "在服务串口线缆拔出后生效，",
    "note10-1": "仅能通过服务串口修改。",
    "ASCII Protocol Address": "ASCII协议地址",
    "note11": "有效值 0-9, A-Z, a-z。",
    "ASCII Protocol Baud Rate": "ASCII协议波特率",
    "note12": "对服务串口和主通信串口均有效。",
    "note13": "有效范围 [1, 247]。",
    "Modbus Address": "Modbus地址",
    "Modbus Baud Rate": "Modbus波特率",
    "SDI-12 Address": "SDI-12地址",
    "note15": "有效值 0-9, A-Z, a-z。",
    "note16": "最大长度64。",
    "Factory Reset": "恢复出厂",
    "Restore Factory Settings": "恢复出厂设置",
    "Data Combination (G0)": "组合数据 (G0)",
    "Output List": "输出列表",
    "note20": "G0数据组的输出列表。",
    "THPL (G1)": "温湿压光 (G1)",
    "note30": "G1数据组的输出列表（同时影响主页面的数据更新）。",
    "Update Interval": "数据更新周期",
    "note31": "有效范围 [1, 3600]。",
    "Temperature Unit": "温度单位",
    "Pressure Unit": "压力单位",
    "Wind (G2)": "风速风向 (G2)",
    "note40": "G2数据组的输出列表（同时影响主页面的数据更新）。",
    "note41": "有效范围 [1, 3600]。",
    "Averaging Time": "数据平均窗的时长",
    "note42": "对此时间长度内的风速风向数据进行平均值计算，有效范围 [1, 3600]。",
    "Sampling Rate": "采样频率",
    "note43": "表示对风进行测量的频率",
    "Direction Offset": "风向角偏移量",
    "note44": "有效范围 [-180, 180]。",
    "Extremum Calculation Mode": "极值计算方法",
    "Speed Unit": "风速单位",
    "Precipitation (G3)": "降雨 (G3)",
    "note50": "G3数据组的输出列表（同时影响主页面的数据更新）。",
    "note51": "有效范围 [1, 3600]。",
    "G3": {
      "IR": "有效范围 [10, 3600]。",
      "AL": "有效范围 [10, 80000], 当前单位。",
      "DL": "有效范围 [100, 2000000]."
    },
    "Particulate Matter (G4)": "颗粒物 (G4)",
    "G4": {
      "ol": "G4数据组的输出列表（同时影响主页面的数据更新）。",
      "IDUST": "有效范围 [1, 3600]。"
    },
    "Carbon Dioxide (G5)": "二氧化碳 (G5)",
    "G5": {
      "ol": "G5数据组的输出列表（同时影响主页面的数据更新）。",
      "ICO2": "有效范围 [1, 3600]。"
    },
    "Noise (G6)": "噪声 (G6)",
    "G6": {
      "ol": "G6数据组的输出列表（同时影响主页面的数据更新）。",
      "INOISE": "有效范围 [1, 3600]。"
    },       
    "Counter Reset Mode": "计数清零模式",
    "Rain Accumulation Limit": "累计降雨量极限值",
    "Rain Duration Limit": "累计降雨时间极限值",
    "Rain Unit": "雨量单位",
    "Manual Counter Reset": "手动清零",
    "Reset Rain Accumulation": "累计降雨量清零",
    "Reset Rain Duration": "累计降雨时间清零",
    "Reset Sunlight Duration": "日照时长清零",
    "Misc. (G9)": "其它 (G9)",
    "G9": {
      "ol": "G9数据组的输出列表（同时影响主页面的数据更新）。",
      "uih": "有效范围 [15, 3600], 当使能辅热功能时，此值将被算法固定为15，不管此处设置为何值。",
      "cc": "使能此功能，可以以任意方位角安装设备，设备将利用地磁传感器自动指北。",
      "calib": "将设备绕垂直中心轴旋转1~2周，此过程中保持设备垂直至少30秒。",
      "calibDialog": "开始后，设备将在后台收集校准数据30秒，无法中断。"
    },
    "Update Interval of Heater Temperature": "加热区域温度的采集周期",
    "Heating Control": "辅热控制",
    "Tilt Detection": "倾倒检测",
    "Auto North": "地磁辅助指北",
    "Compass Calibration": "地磁传感器校准",
    "Calibrate": "校准",
    "Calibrating": "校准中",
    "Background": "后台进行",
    "Failed to start the calibration!": "发送校准指令失败。",
    "Data Poll Interval": "数据拉取周期",
    "note101": "主页面数据从设备拉取的周期, 有效范围 [2, 3600]。",
    "Plot Deepth": "曲线深度",
    "note102": "数据曲线中数据点的数量, 有效范围 [10, 100]。",
    "Language": "界面语言",
    "Version": "版本",
    "Load From File": "从文件中加载",
    "Save To File": "保存到文件",
    "Read From Device": "从设备中读取",
    "Write To Device": "写入到设备",
    "Invalid Address.": "无效地址。",
    "Invalid Modbus Address.": "无效Modbus地址。",
    "Invalid Device Name.": "无效设备名称。",
    "Invalid Number.": "无效数字。",
    "Manual Reset": "手动清零模式",
    "Reset After Read": "读后清零模式",
    "Overflow Reset": "溢出清零模式",
    "available": "可下载",
    "The application configurations are saved.": "应用程序的配置已被保存。",
    "text: not ready for reading from device": "检测不到设备，请重连设备服务串口。",
    "text: failed reading from device": "读取设备失败，请检查服务串口波特率。",
    "The device configurations are written.": "设备设置已被写入。",
    "text: config not loaded from anywhere": "配置不完整。",
    "text: config hw type not match": "设备型号不匹配，无法写入。",
    "text: not ready for writing to device": "检测不到设备，请重连设备服务串口。",
    "text: failed writing to device": "写入设备失败。",
    " can not be written, please update the firmware.": "不能被写入，请升级设备固件。",
    "Failed to restore!": "恢复出厂设置失败。",
    "Failed to reset!": "清零失败。",
    "text: restore factory notice": "此操作将恢复所有设置到出厂默认值，确定继续？",
    "text: restore factory success": "成功恢复到出厂设置，请用9600波特率重新连接服务串口。",
    "text: reset counters": "此操作将清零选定累计值，确定继续？",
    "text: reset success": "选定的累计值已被成功清零。",
    "Saved to file successfully.": "成功保存到文件。",
    "Failed in saving to file.": "保存到文件时出错。",
    "Loaded from file successfully.": "成功加载配置文件。",
    "Failed in parsing the file, invalid profile version.": "解析配置文件时出错，错误的Profile版本。",
    "Failed in loading from file, invalid profile file.": "加载配置文件时出错，格式无效。",

    "end": "结束"
  }
}
</i18n>
<template>
  <el-container style="height: 100%;">
    <!-- 导航栏 -->
    <el-aside style="width: 200px;">
      <el-menu
        default-active="1"
        style="height: 100%;"
        @select="onMenuSelect">
        <el-menu-item index="1">
          <svg-icon icon-class="sensecap-one" class="myicon"></svg-icon>
          <span slot="title">{{$t('Device')}}</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-s-platform"></i>
          <span slot="title">{{$t('Application')}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main style="padding: 0px 0px 0px 10px;">
        <el-card v-if="tabIndex == 1"
          style="height: 100%; box-sizing: border-box;"
          shadow="never"
          body-style="padding: 0px; height: 100%;">
          <!-- 设备设置项列表 -->
          <el-scrollbar  style="height: 100%; overflow-x: hidden;" wrap-style="overflow-x: hidden;">
            <el-row style="padding: 10px;">
              <el-col :span="24">
                <el-form ref="form1" :model="configMap"
                  label-position="left"
                  label-width="160px"
                  hide-required-asterisk>
                  <div v-if="1">
                    <div class="text-subheader">
                      {{$t('General')}}
                    </div>
                    <el-form-item :label="$t('Main Port Protocol')" prop="CP"
                      :rules="[rules.required]">
                      <el-select v-model="configMap.CP">
                        <el-option v-for="item in optionsMainPortProto"
                          :key="item.value"
                          :value="item.value"
                          :label='item.label'></el-option>
                      </el-select>
                      <div class="text-note">{{$t('note10')}}<span style="font-weight: bold;color: #808389;">{{$t('note10-1')}}</span></div>
                    </el-form-item>
                    <el-form-item :label="$t('ASCII Protocol Address')" prop="AD"
                      :rules="[rules.required, rules.charAddr]">
                      <el-input v-model="configMap.AD">
                      </el-input>
                      <div class="text-note">{{$t('note11')}}</div>
                    </el-form-item>
                    <el-form-item :label="$t('ASCII Protocol Baud Rate')" prop="BD"
                      :rules="[rules.required]">
                      <el-select v-model="configMap.BD">
                        <el-option v-for="item in optionsBaudRates"
                          :key="item.value"
                          :value="item.value"
                          :label='item.label'></el-option>
                      </el-select>
                      <div class="text-note">{{$t('note12')}}</div>
                    </el-form-item>
                    <el-form-item :label="$t('Modbus Address')" prop="MBAD"
                      :rules="[rules.required, rules.mbAddr]">
                      <el-input v-model.number="configMap.MBAD" type="number">
                      </el-input>
                      <div class="text-note">{{$t('note13')}}</div>
                    </el-form-item>
                    <el-form-item :label="$t('Modbus Baud Rate')" prop="MBBD"
                      :rules="[rules.required]">
                      <el-select v-model="configMap.MBBD">
                        <el-option v-for="item in optionsModbusBaudRates"
                          :key="item.value"
                          :value="item.value"
                          :label='item.label'></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item :label="$t('SDI-12 Address')" prop="SDIAD"
                      :rules="[rules.required, rules.charAddr]">
                      <el-input v-model="configMap.SDIAD">
                      </el-input>
                      <div class="text-note">{{$t('note15')}}</div>
                    </el-form-item>
                    <el-form-item :label="$t('Device Name')" prop="NA"
                      :rules="[rules.required, rules.deviceName]">
                      <el-input v-model="configMap.NA" style="width: 400px;">
                      </el-input>
                      <div class="text-note">{{$t('note16')}}</div>
                    </el-form-item>
                    <el-form-item :label="$t('Factory Reset')">
                      <el-button size="mini"
                        @click="restoreFactorySettings"
                        :loading="btnRestoreLoading">{{$t('Restore Factory Settings')}}</el-button>
                    </el-form-item>
                  </div>

                  <div v-if="showG0">
                    <el-divider></el-divider>
                    <div class="text-subheader">
                      {{$t('Data Combination (G0)')}}
                    </div>
                    <el-form-item :label="$t('Output List')" prop="G0"
                      :rules="[rules.required]">
                      <el-select v-model="configMap.G0" multiple>
                        <el-option v-for="item in optionsG0"
                          :key="item.value"
                          :value="item.value"
                          :label='item.label'></el-option>
                      </el-select>
                      <div class="text-note">{{$t('note20')}}</div>
                    </el-form-item>
                  </div>

                  <div v-if="showS1G1">
                    <el-divider></el-divider>
                    <div class="text-subheader">
                      {{$t('THPL (G1)')}}
                    </div>
                    <el-form-item :label="$t('Output List')" prop="G1"
                      :rules="[rules.required]">
                      <el-select v-model="configMap.G1" multiple>
                        <el-option v-for="item in optionsS1G1"
                          :key="item.value"
                          :value="item.value"
                          :label='item.label'></el-option>
                      </el-select>
                      <div class="text-note">{{$t('note30')}}</div>
                    </el-form-item>
                    <el-form-item :label="$t('Update Interval')" prop="IB"
                      :rules="[rules.required, rules.rng1_3600]">
                      <el-input v-model.number="configMap.IB" type="number">
                        <template slot="append">{{$t('seconds')}}</template>
                      </el-input>
                      <div class="text-note">{{$t('note31')}}</div>
                    </el-form-item>
                    <el-form-item :label="$t('Temperature Unit')" prop="UT"
                      :rules="[rules.required]">
                      <el-select v-model="configMap.UT">
                        <el-option v-for="item in unitOptions['UT']"
                          :key="item.value"
                          :value="item.value"
                          :label="item.label"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item :label="$t('Pressure Unit')" prop="UP"
                      :rules="[rules.required]">
                      <el-select v-model="configMap.UP">
                        <el-option v-for="item in unitOptions['UP']"
                          :key="item.value"
                          :value="item.value"
                          :label="item.label"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item :label="$t('Manual Counter Reset')">
                      <el-button size="mini"
                        @click="resetCounters('sd')"
                        :loading="btnResetSunDurationLoading">{{$t('Reset Sunlight Duration')}}</el-button>
                    </el-form-item>
                  </div>

                  <div v-if="showS1G2">
                    <el-divider></el-divider>
                    <div class="text-subheader">
                      {{$t('Wind (G2)')}}
                    </div>
                    <el-form-item :label="$t('Output List')" prop="G2"
                      :rules="[rules.required]">
                      <el-select v-model="configMap.G2" multiple>
                        <el-option v-for="item in optionsS1G2"
                          :key="item.value"
                          :value="item.value"
                          :label='item.label'></el-option>
                      </el-select>
                      <div class="text-note">{{$t('note40')}}</div>
                    </el-form-item>
                    <el-form-item :label="$t('Update Interval')" prop="IW"
                      :rules="[rules.required, rules.rng1_3600]">
                      <el-input v-model.number="configMap.IW" type="number">
                        <template slot="append">{{$t('seconds')}}</template>
                      </el-input>
                      <div class="text-note">{{$t('note41')}}</div>
                    </el-form-item>
                    <el-form-item :label="$t('Averaging Time')" prop="AW"
                      :rules="[rules.required, rules.rng1_3600]">
                      <el-input v-model.number="configMap.AW" type="number">
                        <template slot="append">{{$t('seconds')}}</template>
                      </el-input>
                      <div class="text-note">{{$t('note42')}}</div>
                    </el-form-item>
                    <!-- <el-form-item :label="$t('Sampling Rate')" prop="SR"
                      :rules="[rules.required]">
                      <el-select v-model="configMap.SR">
                        <el-option v-for="item in optionsSampleRate"
                          :key="item.value"
                          :value="item.value"
                          :label='item.label'></el-option>
                      </el-select>
                      <div class="text-note">{{$t('note43')}}</div>
                    </el-form-item> -->
                    <el-form-item :label="$t('Direction Offset')" prop="DO"
                      :rules="[rules.required, rules.dirOffset]">
                      <el-input v-model.number="configMap.DO" type="number">
                        <template slot="append">{{$t('deg')}}</template>
                      </el-input>
                      <div class="text-note">{{$t('note44')}}</div>
                    </el-form-item>
                    <!-- <el-form-item :label="$t('Extremum Calculation Mode')" prop="CP"
                      :rules="[rules.required]">
                      <el-select v-model="configMap.xxx">
                        <el-option v-for="item in baudRates" :key="item" :value="item"></el-option>
                      </el-select>
                    </el-form-item> -->
                    <el-form-item :label="$t('Speed Unit')" prop="US"
                      :rules="[rules.required]">
                      <el-select v-model="configMap.US">
                        <el-option v-for="item in unitOptions['US']"
                          :key="item.value"
                          :value="item.value"
                          :label="item.label"></el-option>
                      </el-select>
                    </el-form-item>
                  </div>

                  <div v-if="showS1G3">
                    <el-divider></el-divider>
                    <div class="text-subheader">
                      {{$t('Precipitation (G3)')}}
                    </div>
                    <el-form-item :label="$t('Output List')" prop="G3"
                      :rules="[rules.required]">
                      <el-select v-model="configMap.G3" multiple>
                        <el-option v-for="item in optionsS1G3"
                          :key="item.value"
                          :value="item.value"
                          :label='item.label'></el-option>
                      </el-select>
                      <div class="text-note">{{$t('note50')}}</div>
                    </el-form-item>
                    <el-form-item :label="$t('Update Interval')" prop="IR"
                      :rules="[rules.required, rules.rng10_3600]">
                      <el-input v-model.number="configMap.IR" type="number">
                        <template slot="append">{{$t('seconds')}}</template>
                      </el-input>
                      <div class="text-note">{{$t('G3.IR')}}</div>
                    </el-form-item>
                    <el-form-item :label="$t('Counter Reset Mode')" prop="CR"
                      :rules="[rules.required]">
                      <el-select v-model="configMap.CR">
                        <el-option v-for="item in optionsCounterResetMode"
                          :key="item.value"
                          :value="item.value"
                          :label="item.label"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item :label="$t('Rain Accumulation Limit')" prop="AL"
                      :rules="[rules.required, rules.rng10_8w]">
                      <el-input v-model.number="configMap.AL" type="number">
                      </el-input>
                      <div class="text-note">{{$t('G3.AL')}}</div>
                    </el-form-item>
                    <el-form-item :label="$t('Rain Duration Limit')" prop="DL"
                      :rules="[rules.required, rules.rng100_200w]">
                      <el-input v-model.number="configMap.DL" type="number">
                      </el-input>
                      <div class="text-note">{{$t('G3.DL')}}</div>
                    </el-form-item>
                    <el-form-item :label="$t('Rain Unit')" prop="UR"
                      :rules="[rules.required]">
                      <el-select v-model="configMap.UR">
                        <el-option v-for="item in unitOptions['UR']"
                          :key="item.value"
                          :value="item.value"
                          :label="item.label"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item :label="$t('Manual Counter Reset')">
                      <el-button size="mini"
                        @click="resetCounters('acc')"
                        :loading="btnResetRainAccLoading"
                        :disabled="btnResetRainDurationLoading">{{$t('Reset Rain Accumulation')}}</el-button>
                      <el-button size="mini"
                        @click="resetCounters('dur')"
                        :loading="btnResetRainDurationLoading"
                        :disabled="btnResetRainAccLoading">{{$t('Reset Rain Duration')}}</el-button>
                    </el-form-item>
                  </div>

                  <div v-if="showS2G4">
                    <el-divider></el-divider>
                    <div class="text-subheader">
                      {{$t('Particulate Matter (G4)')}}
                    </div>
                    <el-form-item :label="$t('Output List')" prop="G4"
                      :rules="[rules.required]">
                      <el-select v-model="configMap.G4" multiple>
                        <el-option v-for="item in optionsS2G4"
                          :key="item.value"
                          :value="item.value"
                          :label='item.label'></el-option>
                      </el-select>
                      <div class="text-note">{{$t('G4.ol')}}</div>
                    </el-form-item>
                    <el-form-item :label="$t('Update Interval')" prop="IDUST"
                      :rules="[rules.required, rules.rng1_3600]">
                      <el-input v-model.number="configMap.IDUST" type="number">
                        <template slot="append">{{$t('seconds')}}</template>
                      </el-input>
                      <div class="text-note">{{$t('G4.IDUST')}}</div>
                    </el-form-item>
                  </div>

                  <div v-if="showS16G5">
                    <el-divider></el-divider>
                    <div class="text-subheader">
                      {{$t('Carbon Dioxide (G5)')}}
                    </div>
                    <el-form-item :label="$t('Output List')" prop="G5"
                      :rules="[rules.required]">
                      <el-select v-model="configMap.G5" multiple>
                        <el-option v-for="item in optionsS2G5"
                          :key="item.value"
                          :value="item.value"
                          :label='item.label'></el-option>
                      </el-select>
                      <div class="text-note">{{$t('G5.ol')}}</div>
                    </el-form-item>
                    <el-form-item :label="$t('Update Interval')" prop="ICO2"
                      :rules="[rules.required, rules.rng5_3600]">
                      <el-input v-model.number="configMap.ICO2" type="number">
                        <template slot="append">{{$t('seconds')}}</template>
                      </el-input>
                      <div class="text-note">{{$t('G5.ICO2')}}</div>
                    </el-form-item>
                  </div>

                  <div v-if="showS17G5">
                    <el-divider></el-divider>
                    <div class="text-subheader">
                      {{$t('Carbon Dioxide (G5)')}}
                    </div>
                    <el-form-item :label="$t('Output List')" prop="G5"
                      :rules="[rules.required]">
                      <el-select v-model="configMap.G5" multiple>
                        <el-option v-for="item in optionsS2G5"
                          :key="item.value"
                          :value="item.value"
                          :label='item.label'></el-option>
                      </el-select>
                      <div class="text-note">{{$t('G5.ol')}}</div>
                    </el-form-item>
                    <el-form-item :label="$t('Update Interval')" prop="ICO2"
                      :rules="[rules.required, rules.rng5_3600]">
                      <el-input v-model.number="configMap.ICO2" type="number">
                        <template slot="append">{{$t('seconds')}}</template>
                      </el-input>
                      <div class="text-note">{{$t('G5.ICO2')}}</div>
                    </el-form-item>
                  </div>

                  <div v-if="showG6">
                    <el-divider></el-divider>
                    <div class="text-subheader">
                      {{$t('Noise (G6)')}}
                    </div>
                    <el-form-item :label="$t('Output List')" prop="G6"
                      :rules="[rules.required]">
                      <el-select v-model="configMap.G6" multiple>
                        <el-option v-for="item in optionsG6"
                          :key="item.value"
                          :value="item.value"
                          :label='item.label'></el-option>
                      </el-select>
                      <div class="text-note">{{$t('G6.ol')}}</div>
                    </el-form-item>
                    <el-form-item :label="$t('Update Interval')" prop="INOISE"
                      :rules="[rules.required, rules.rng1_3600]">
                      <el-input v-model.number="configMap.INOISE" type="number">
                        <template slot="append">{{$t('seconds')}}</template>
                      </el-input>
                      <div class="text-note">{{$t('G6.INOISE')}}</div>
                    </el-form-item>
                  </div>

                  <div v-if="showG9">
                    <el-divider></el-divider>
                    <div class="text-subheader">
                      {{$t('Misc. (G9)')}}
                    </div>
                    <el-form-item :label="$t('Output List')" prop="G9"
                      :rules="[rules.required]">
                      <el-select v-model="configMap.G9" multiple>
                        <el-option v-for="item in optionsG9"
                          :key="item.value"
                          :value="item.value"
                          :label='item.label'></el-option>
                      </el-select>
                      <div class="text-note">{{$t('G9.ol')}}</div>
                    </el-form-item>
                    <!-- <el-form-item :label="$t('Update Interval of Heater Temperature')" v-if="showG9Ht" prop="IH"
                      :rules="[rules.required, rules.rng15_3600]">
                      <el-input v-model="configMap.IH" type="number">
                        <template slot="append">{{$t('seconds')}}</template>
                      </el-input>
                      <div class="text-note">{{$t('G9.uih')}}</div>
                    </el-form-item> -->
                    <el-form-item :label="$t('Heating Control')" v-if="showG9Ht"
                      :rules="[rules.required]">
                      <el-switch v-model="configMap.HC" active-value="Y" inactive-value="N"></el-switch>
                    </el-form-item>
                    <el-form-item :label="$t('Tilt Detection')" v-if="showG9Tilt"
                      :rules="[rules.required]">
                      <el-switch v-model="configMap.TD" active-value="Y" inactive-value="N"></el-switch>
                    </el-form-item>
                    <el-form-item :label="$t('Auto North')" v-if="showG9Tilt"
                      :rules="[rules.required]">
                      <el-switch v-model="configMap.CC" active-value="Y" inactive-value="N" :disabled="dialog"></el-switch>
                      <div class="text-note">{{$t('G9.cc')}}</div>
                    </el-form-item>
                    <el-form-item :label="$t('Compass Calibration')">
                      <el-button size="mini"
                        @click="compassCalib()"
                        :loading="btnCompassCalibLoading"
                        :disabled="btnCompassCalibLoading">{{$t('Calibrate')}}</el-button>
                      <div class="text-note">{{$t('G9.calib')}}</div>
                    </el-form-item>
                  </div>

                </el-form>
              </el-col>
            </el-row>
          </el-scrollbar>
        </el-card>
        <el-card v-if="tabIndex == 2"
          style="height: 100%; box-sizing: border-box;"
          shadow="never"
          body-style="padding: 0px; height: 100%;">
          <!-- 应用程序自身设置项 -->
          <el-row style="padding: 10px;">
            <el-col :span="24">
              <el-form ref="form2" :model="appConfig"
                label-position="left"
                label-width="160px"
                hide-required-asterisk>
                <el-form-item :label="$t('Data Poll Interval')" prop="dataPollInterval"
                  :rules="[rules.required, rules.rng2_3600]">
                  <el-input v-model.number="appConfig.dataPollInterval" type="number">
                    <template slot="append">{{$t('seconds')}}</template>
                  </el-input>
                  <div class="text-note">{{$t('note101')}}</div>
                </el-form-item>
                <el-form-item :label="$t('Plot Deepth')" prop="plotPointNum"
                  :rules="[rules.required, rules.rng10_100]">
                  <el-input v-model.number="appConfig.plotPointNum" type="number">
                  </el-input>
                  <div class="text-note">{{$t('note102')}}</div>
                </el-form-item>
                <el-form-item :label="$t('Language')">
                  <el-select v-model="selectedLocale">
                    <el-option v-for="item in localeOptions"
                      :key="item.value"
                      :value="item.value"
                      :label="item.label"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item :label="$t('Version')">
                  <el-tooltip effect="dark" :content="newVersionTooltip" placement="right" :disabled="!newVersion">
                    <el-badge is-dot style="line-height: 12px; padding-right: 5px;" :hidden="!newVersion">
                      <span class="text-detail" id="versionText" style="line-height: 12px;"
                        @click="versionClicked()">v{{currentVersion}}</span>
                    </el-badge>
                  </el-tooltip>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </el-card>
      </el-main>
      <el-footer>
        <div v-if="tabIndex == 1"
          style="padding: 15px 0px; text-align: right;">
          <el-button type="primary"
            @click="loadFromFile">{{$t('Load From File')}}</el-button>
          <el-button type="primary"
            @click="saveToFile">{{$t('Save To File')}}</el-button>
          <el-button type="success"
            @click="readFromDevice"
            :loading="btnReadFromDeviceLoading"
            :disabled="btnWriteToDeviceLoading">{{$t('Read From Device')}}</el-button>
          <el-button type="danger"
            @click="writeToDevice"
            :loading="btnWriteToDeviceLoading"
            :disabled="btnReadFromDeviceLoading">{{$t('Write To Device')}}</el-button>
          <el-button type="primary" @click="closeWindowFn">{{$t('Close')}}</el-button>
        </div>
        <div v-if="tabIndex == 2"
          style="padding: 15px 0px; text-align: right;">
          <el-button type="primary" @click="saveAppConfig">{{$t('Save')}}</el-button>
          <el-button type="primary" @click="closeWindowFn">{{$t('Close')}}</el-button>
        </div>
      </el-footer>

      <el-dialog
        :title="$t('Compass Calibration')"
        :visible.sync="dialog"
        width="30%"
        :show-close="calibCountdown<=0" :close-on-click-modal="false" :close-on-press-escape="false">
        <el-row type="flex" justify="center">
          <el-col :span="12">
            <img src="../assets/sensecap-one-calibrate.png" style="width: 100%;">
          </el-col>
        </el-row>
        <div class="text-note">{{$t('G9.calibDialog')}}</div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogBtnClicked()" :loading="calibCountdown>0">{{dialogBtnText}}</el-button>
        </span>
      </el-dialog>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-select, .el-input {
  width: 200px;
}
.text-note {
  font-size: 10px;
  height: 16px;
  line-height: 12px;
  display: table-cell;
  vertical-align: bottom;
  color: #909399;
}
.text-subheader {
  font-size: 12px;
  font-weight: 700;
  margin: 20px 0 20px 0;
  color: #316408;
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
.myicon {
  width: 2em !important;
  height: 2em !important;
  vertical-align: middle !important;
  margin-right: 5px;
}
.el-menu-item svg {
  color: #909399;
}
.el-menu-item.is-active svg {
  color: #205C71 !important;
}
</style>

<script>
const { ipcRenderer } = require('electron')
const Store = require('electron-store')
const store = new Store()
import { slaveGroupDefines,
  miscGroupDefine,
  changableUnitsMeasMap,
  displayStrForUnit,
  units,
  ngSkus,
  ngSensorTypes,
  ngGroupDefines
} from '@/global-defines'
import { compare2Objects } from '@/utils'
import compareVersions from 'compare-versions'
const delayMs = ms => new Promise(res => setTimeout(res, ms))
export default {
  name: 'Home',
  data() {
    let rules = {
      required: {required: true, message: this.$t("Required."), trigger: 'blur'},
      charAddr: {type: 'string', required: true, pattern: /^[0-9a-zA-Z]{1}$/, message: this.$t("Invalid Address."), trigger: 'blur'},
      mbAddr: {type: 'number', min: 1, max: 247, message: this.$t("Invalid Modbus Address."), trigger: 'blur'},
      deviceName: {type: 'string', min: 1, max: 64, message: this.$t("Invalid Device Name."), trigger: 'blur'},
      rng10_100: {type: 'number', min: 10, max: 100, message: this.$t("Invalid Number."), trigger: 'blur'},
      rng1_3600: {type: 'number', min: 1, max: 3600, message: this.$t("Invalid Number."), trigger: 'blur'},
      rng5_3600: {type: 'number', min: 1, max: 3600, message: this.$t("Invalid Number."), trigger: 'blur'},
      rng2_3600: {type: 'number', min: 2, max: 3600, message: this.$t("Invalid Number."), trigger: 'blur'},
      rng15_3600: {type: 'number', min: 15, max: 3600, message: this.$t("Invalid Number."), trigger: 'blur'},
      rng10_3600: {type: 'number', min: 10, max: 3600, message: this.$t("Invalid Number."), trigger: 'blur'},
      rng10_8w: {type: 'number', min: 10, max: 80000, message: this.$t("Invalid Number."), trigger: 'blur'},
      rng100_200w: {type: 'number', min: 100, max: 2000000, message: this.$t("Invalid Number."), trigger: 'blur'},
      dirOffset: {type: 'number', min: -180, max: 180, message: this.$t("Invalid Number."), trigger: 'blur'},
    }
    this.commonRegs = ['CP', /*'AD',*/ 'BD', 'MBAD', 'MBBD', 'SDIAD', 'NA']
    this.slaveRegs = {
      "1": [
        'G0',
        'G1', 'IB', 'UT', 'UP',
        'G2', 'IW', 'AW', 'DO', 'US',
        'G3', 'IR', 'CR', 'AL', 'DL', 'UR',
      ],
      "2": [
        'G4', 'IDUST'
      ],
      "16": [
        'G5', 'ICO2'
      ], 
      "17": [
        'G5', 'ICO2'
      ], 
      "18": [
        'G6', 'INOISE'
      ], 
    }
    this.singleRadarRegs = ['G0', 'G3', 'IR', 'CR', 'AL', 'DL', 'UR']
    this.G9Regs = {
      //"G9" = ORed these regs
      "HC": { name: "Heating Control", i2cAddr: ["1"], drvVer: ["2.9"], commVer: ["2.8"] },
      "TD": { name: "Tilt Detection", i2cAddr: ["1"], drvVer: ["2.8"], commVer: ["2.8"] },
      "CC": { name: "Tilt Detection", i2cAddr: ["1"], drvVer: ["2.8"], commVer: ["2.8"] },
    }
    return {
      //rules
      rules: rules,
      //Buttons
      btnReadFromDeviceLoading: false,
      btnWriteToDeviceLoading: false,
      btnRestoreLoading: false,
      btnResetRainDurationLoading: false,
      btnResetRainAccLoading: false,
      btnCompassCalibLoading: false,
      btnResetSunDurationLoading: false,
      //////////////////////////////////////////
      //global Vars
      tabIndex: 1,
      apAddr: '',
      eui: '##',
      sku: '##',
      hwVersion: '##',
      swVersion: "##",
      sensorType: '##',
      i2cAddrFromDevice: {},
      i2cAddrInCurrentCfg: {},  //cfg on the GUI, it might be loaded from file, or from device
      //App Configs
      appConfig: {
        dataPollInterval: 2,
        plotPointNum: 10,
      },
      localeOptions: [{value: 'en', label: 'English'}, {value: 'zh', label: '简体中文'}],
      selectedLocale: 'en',
      localeBackup: 'en',
      currentVersion: '',
      newVersion: '',
      //Device Configs
      guiRendered: false,
      showG0: false,
      showS1G1: false,
      showS1G2: false,
      showS1G3: false,
      showS2G4: false,
      showS16G5: false,
      showS17G5: false,
      showG6: false,
      showG9: false,
      showG9Ht: false,
      showG9Tilt: false,
      unitOptions: {},
      optionsMainPortProto: [
        {value: 1, label: "SDI-12"},
        {value: 2, label: "RS-232 Modbus RTU"},
        {value: 3, label: "RS-485 Modbus RTU"},
        {value: 4, label: "RS-422 Modbus RTU"},
        {value: 5, label: "RS-232 ASCII"},
        {value: 6, label: "RS-485 ASCII"},
        {value: 7, label: "RS-422 ASCII"},
      ],
      optionsBaudRates: [
        {value: 96, label: "9600"},
        {value: 192, label: "19200"},
        {value: 384, label: "38400"},
        {value: 576, label: "57600"},
        {value: 1152, label: "115200"},
      ],
      optionsModbusBaudRates: [
        {value: 12, label: "1200"},
        {value: 24, label: "2400"},
        {value: 48, label: "4800"},
        {value: 96, label: "9600"},
        {value: 192, label: "19200"},
        {value: 384, label: "38400"},
        {value: 576, label: "57600"},
        {value: 1152, label: "115200"},
      ],
      optionsG0: [],
      optionsS1G1: [],
      optionsS1G2: [],
      optionsSampleRate: [
        {value: 1, label: "1Hz"},
        {value: 2, label: "2Hz"},
        {value: 4, label: "4Hz"},
      ],
      optionsS1G3: [],
      optionsS2G4: [],
      optionsS2G5: [],
      optionsG6: [],
      optionsG9: [],
      configMap: {
        CP: 3,
        AD: '0',
        BD: 96,
        MBAD: 1,
        MBBD: 96,
        SDIAD: '0',
        NA: "SenseCAP ONE ############",
        G0: [],
        G1: [],
        IB: 1,
        UT: 'C',
        UP: 'P',
        G2: [],
        IW: 1,
        AW: 5,
        SR: 1,
        DO: 0,
        CM: 1,
        US: 'M',
        G3: [],
        IR: 10,
        CR: 'M',
        AL: 80000,
        DL: 2000000,
        UR: 'M',
        G4: [],
        IDUST: 1,
        G5: [],
        ICO2: 16,
        G9: [],
        // IH: 15,
        HC: 'N',
        TD: 'N',
        CC: 'N'
      },
      configMapInDevice: {},
      //compass calibration
      dialog: false,
      dialogTitle: "",
      dialogBtnText: "",
      calibCountdown: 0,
    }
  },
  computed: {
    //to let i18n hot change
    optionsCounterResetMode: function() {
      if (this.selectedLocale) {
        return [
          {value: "M", label: "M - " + this.$t("Manual Reset")},
          // {value: "A", label: "A - " + this.$t("Reset After Read")},
          {value: "L", label: "L - " + this.$t("Overflow Reset")},
        ]
      }
      return []
    },
    newVersionTooltip: function() {
      return 'v' + this.newVersion + ' ' + this.$t('available')
    },
  },
  methods: {
    onMenuSelect(key, keyPath) {
      console.log(`selected menu index: ${key}`)
      this.tabIndex = parseInt(key)
    },
    closeWindowFn() {
      console.log('going to send IPC close-settings-window')
      ipcRenderer.send('close-settings-window')
    },
    //App Configs
    versionClicked() {
      if (this.newVersion) {
        ipcRenderer.send('goto-new-version')
      }
    },
    saveAppConfig() {
      let formValid = false
      this.$refs['form2'].validate((valid) => formValid = valid)
      if (!formValid) return false
      store.set('dataPollInterval', this.appConfig.dataPollInterval)
      store.set('plotPointNum', this.appConfig.plotPointNum)
      store.set('selectedLocale', this.selectedLocale)
      this.$root.$i18n.locale = this.selectedLocale
      if (this.selectedLocale !== this.localeBackup) {
        console.log('going to change locale to:', this.selectedLocale)
        ipcRenderer.send('locale-change', this.selectedLocale)
        this.localeBackup = this.selectedLocale
      }
      //delay 1s, otherwise the store may not finish the writing
      delayMs(1000).then(() => {
        ipcRenderer.send('broadcast-to-others', 'config-change')
      })
      this.$message({
        type: 'success',
        message: this.$t('The application configurations are saved.')
      })
    },
    //Device Configs
    renderGUI() {
      this.optionsG0 = []
      this.optionsS1G1 = []
      this.optionsS1G2 = []
      this.optionsS1G3 = []
      this.optionsS2G4 = []
      this.optionsS2G5 = []
      this.optionsG6 = []
      this.optionsG9 = []
      // this.configMap.G0 = []
      // this.configMap.G1 = []
      // this.configMap.G2 = []
      // this.configMap.G3 = []
      if (this.sensorType !== 'unknown' && this.sensorType in ngSensorTypes) {
        // for gen2 device
        for (const grp of ngSensorTypes[this.sensorType])
        {
          for (const measName in ngGroupDefines[grp]["meas"])
          {
            let optionItem = {value: measName, label: measName + ' - ' + this.$t(ngGroupDefines[grp]["meas"][measName]["name"])}
            this.optionsG0.push(optionItem)
            if (grp === "G1_THP" || grp === "G1_THPL" || grp == "G1_THP_TSR") {
              this.optionsS1G1.push(optionItem)
            } else if (grp === "G2") {
              this.optionsS1G2.push(optionItem)
            } else if (grp === "G3") {
              this.optionsS1G3.push(optionItem)
            } else if (grp === "G4") {
              this.optionsS2G4.push(optionItem)
            } else if (grp === "G5") {
              this.optionsS2G5.push(optionItem)
            } else if (grp === "G6") {
              this.optionsG6.push(optionItem)
            }
          }
        }
      }
      else {
        // for gen1 device
        for (const i2cAddr in slaveGroupDefines) {
          if (i2cAddr in this.i2cAddrInCurrentCfg) {
            for (const grp of slaveGroupDefines[i2cAddr]) {
              for (const measName in grp.meas) {
                let optionItem = {value: measName, label: measName + ' - ' + this.$t(grp.meas[measName]["name"])}
                this.optionsG0.push(optionItem)
                //this.configMap.G0.push(measName)  //select all by default
                if (i2cAddr === '1' && grp.grpNameShort === 'G1') {
                  this.optionsS1G1.push(optionItem)
                  // this.configMap.G1.push(measName)  //we assume that multiple G1 on one device is impossible
                } else if (i2cAddr === '1' && grp.grpNameShort === 'G2') {
                  this.optionsS1G2.push(optionItem)
                  // this.configMap.G2.push(measName)
                } else if (i2cAddr === '1' && grp.grpNameShort === 'G3') {
                  this.optionsS1G3.push(optionItem)
                  // this.configMap.G3.push(measName)
                } else if (i2cAddr === '2' && grp.grpNameShort === 'G4') {
                  this.optionsS2G4.push(optionItem)
                }else if (i2cAddr === '17' && grp.grpNameShort === 'G5') {
                  this.optionsS2G5.push(optionItem)
                }
              }
            }
          }
        }
      }
      let miscGroup = JSON.parse(JSON.stringify(miscGroupDefine))
      for (const measName in miscGroup.meas) {
        let show = false
        for (const i2cAddr of miscGroup.meas[measName].i2cAddr) {
          if (i2cAddr in this.i2cAddrInCurrentCfg) {
            show = true
            break
          }
        }
        if (show) {
          let optionItem = {value: measName, label: measName + ' - ' + this.$t(miscGroup.meas[measName]["name"])}
          this.optionsG0.push(optionItem)
          this.optionsG9.push(optionItem)
        }
      }
      //prepare Units Options
      let unitOptions1 = {}
      for (const unitName in units) {
        unitOptions1[unitName] = []
        for (const unitValue in units[unitName]) {
          unitOptions1[unitName].push({value: unitValue, label: unitValue + ' - ' + units[unitName][unitValue]})
        }
      }
      this.unitOptions = unitOptions1
      this.showG0 = this.optionsG0.length > 0
      this.showS1G1 = this.showS1G2 = this.showS1G3 = '1' in this.i2cAddrInCurrentCfg
      if (this.sensorType !== 'unknown' && this.sensorType in ngSensorTypes) {
        // for gen2 device
        if (ngSensorTypes[this.sensorType].indexOf("G4") !== -1) this.showS2G4 = true;
        else this.showS2G4 = false;
        if (ngSensorTypes[this.sensorType].indexOf("G5") !== -1) this.showS17G5 = true;
        else this.showS17G5 = false;
        if (ngSensorTypes[this.sensorType].indexOf("G6") !== -1) this.showG6 = true;
        else this.showG6 = false;
        this.showG9 = this.showG9Ht || this.showG9Tilt
        this.guiRendered = true
      }
      else {
        // for gen1 device
        this.showS2G4 = '2' in this.i2cAddrInCurrentCfg
        this.showS16G5 = '16' in this.i2cAddrInCurrentCfg
        this.showS17G5 = '17' in this.i2cAddrInCurrentCfg
        this.showG9 = this.showG9Ht || this.showG9Tilt
        this.guiRendered = true
      }
    },
    async readFromDeviceAsync() {
      let regList = [...this.commonRegs]

      if (this.sensorType !== 'unknown' && this.sensorType !== 'single_radar' && this.sensorType in ngSensorTypes) {
        // for gen2 device
        regList = [...regList, ...this.slaveRegs['1']]
        if (ngSensorTypes[this.sensorType].indexOf("G4") !== -1) regList = [...regList, ...this.slaveRegs['2']]
        if (ngSensorTypes[this.sensorType].indexOf("G5") !== -1) regList = [...regList, ...this.slaveRegs['17']]
        if (ngSensorTypes[this.sensorType].indexOf("G6") !== -1) regList = [...regList, ...this.slaveRegs['18']]
      }
      else if (this.sensorType === 'single_radar') {
        // for single radar only
        regList = [...regList, ...this.singleRadarRegs]
      }
      else {
        // for gen1 device
        for (const i2cAddr in this.slaveRegs) {
          if (i2cAddr in this.i2cAddrFromDevice) {
            regList = [...regList, ...this.slaveRegs[i2cAddr]]
          }
        }
      }
      // G9, single_radar doesn't have
      if (this.sensorType !== 'single_radar') {
        if (!('SW' in this.i2cAddrFromDevice)) this.i2cAddrFromDevice['SW'] = "0.1"
        console.log('before readFromDeviceAsync, the SW=', this.i2cAddrFromDevice['SW'])
        this.showG9Ht = this.showG9Tilt = false
        let hasG9 = false
        for (const regName in this.G9Regs) {
          let show = false
          let i = 0
          for (const i2cAddr of this.G9Regs[regName].i2cAddr) {
            if (i2cAddr in this.i2cAddrFromDevice
              && compareVersions.compare(this.i2cAddrFromDevice['SW'], this.G9Regs[regName].commVer[i], '>=')
              && compareVersions.compare(this.i2cAddrFromDevice[i2cAddr], this.G9Regs[regName].drvVer[i], '>=')) {
              show = true
              break
            }
            else if (compareVersions.compare(this.hwVersion, '2.0', '>=')) {
              show = true
              break
            }
            i++
          }
          if (show) {
            if (regName === 'HC') this.showG9Ht = true
            if (regName === 'TD') this.showG9Tilt = true
            regList.push(regName)
            hasG9 = true
          }
        }
        if (hasG9) regList.push('G9')
      }
      console.log('all reg to be read:', regList)
      //read AD first
      ipcRenderer.send('ap-addr-req')
      await delayMs(100)
      for (const regName of regList) {
        let result = await ipcRenderer.invoke('ap-req-with-retry', `${regName}=?`, `${regName}=`, 500)
        console.log('apRequest result:', result)
        if (regName in this.configMap) {
          if (regName in result) {
            let v = result[regName]
            if (typeof this.configMap[regName] === 'number') {
              v = parseInt(v)
            } else if (this.configMap[regName] instanceof Array && typeof v === 'string') {
              v = [v]
            }
            this.configMap[regName] = v
          } else {
            console.log(`${regName} not in apRequest result.`)
          }
        } else {
          console.log(`${regName} not in configMap.`)
        }
      }
      //backup the regs
      this.configMapInDevice = JSON.parse(JSON.stringify(this.configMap))  //clone
    },
    readFromDevice() {
      this.btnReadFromDeviceLoading = true
      ipcRenderer.invoke('i2c-list-versions-req', 1).then((result) => {
        let i2cAddr2 = {}
        if (typeof result === 'object') i2cAddr2 = JSON.parse(JSON.stringify(result))
        if ('SW' in i2cAddr2) delete i2cAddr2['SW']
        if (Object.keys(i2cAddr2).length === 0) {
          throw new Error('i2cAddrFromDevice empty')
        } else {
          this.i2cAddrFromDevice = result
          // try read hw version
          if (this.hwVersion === "##") ipcRenderer.send('dev-info-req')
          return this.readFromDeviceAsync()
        }
      }).then(() => {
        console.log('readFromDeviceAsync done.')
        this.i2cAddrInCurrentCfg = this.i2cAddrFromDevice
        setImmediate(this.renderGUI)
      }).catch(error => {
        console.log('readFromDeviceAsync error:', error)
        let errorMsg = error.message
        if (errorMsg.includes("i2cAddrFromDevice empty")) {
          this.$message.error(this.$t('text: not ready for reading from device'))
          console.log('i2c list empty, should reconnect the device')
        } else {
          this.$message.error(this.$t('text: failed reading from device'))
        }
      }).finally(() => {
        this.btnReadFromDeviceLoading = false
      })
    },
    canWrite(regName) {
      const reg = this.G9Regs[regName]
      let pass = false
      let i = 0
      for (const i2cAddr of reg.i2cAddr) {
        if (i2cAddr in this.i2cAddrFromDevice
          && compareVersions.compare(this.i2cAddrFromDevice['SW'], reg.commVer[i], '>=')
          && compareVersions.compare(this.i2cAddrFromDevice[i2cAddr], reg.drvVer[i], '>=')) {
          pass = true
          break
        }
        i++
      }
      return pass
    },
    async writeToDeviceAsync() {
      let regList = ['AD', ...this.commonRegs]
      for (const i2cAddr in this.slaveRegs) {
        if (i2cAddr in this.i2cAddrFromDevice) {
          regList = [...regList, ...this.slaveRegs[i2cAddr]]
        }
      }
      //G9
      if (!('SW' in this.i2cAddrFromDevice)) this.i2cAddrFromDevice['SW'] = "0.1"
      console.log('before writeToDeviceAsync, the SW=', this.i2cAddrFromDevice['SW'])
      let notCompatible = false
      if (this.showG9Ht) {
        if (!this.canWrite('HC')) {
          this.$notify({
            type: 'warn',
            message: this.$t(this.G9Regs['HC'].name) + this.$t(' can not be written, please update the firmware.'),
            duration: 2000,
          })
          notCompatible = true
        } else regList.push('HC')
      }
      if (this.showG9Tilt) {
        if (!this.canWrite('TD')) {
          this.$notify({
            type: 'warn',
            message: this.$t(this.G9Regs['TD'].name) + this.$t(' can not be written, please update the firmware.'),
            duration: 2000,
          })
          notCompatible = true
        } else regList.push('TD')
        if (!this.canWrite('CC')) {
          this.$notify({
            type: 'warn',
            message: this.$t(this.G9Regs['CC'].name) + this.$t(' can not be written, please update the firmware.'),
            duration: 2000,
          })
          notCompatible = true
        } else regList.push('CC')
      }
      if (!notCompatible) regList.push('G9')
      let regListChanged = []
      let unitRegChanged = false
      for (const reg of regList) {
        if (reg in this.configMap && reg in this.configMapInDevice) {
          if (typeof this.configMap[reg] === 'object') {
            //Array
            if (compare2Objects(this.configMap[reg], this.configMapInDevice[reg])) continue
          } else {
            //Number or string
            if (this.configMap[reg] === this.configMapInDevice[reg]) continue
          }
        }
        if (reg in changableUnitsMeasMap) unitRegChanged = true
        regListChanged.push(reg)
      }
      console.log('reg changed:', regListChanged)
      for (const regName of regListChanged) {
        let v
        if (typeof this.configMap[regName] === 'object') {
          v = this.configMap[regName].join('&')
        } else {
          v = this.configMap[regName]
        }
        console.log('to be written:', `${regName}=${v}`)
        let result = await ipcRenderer.invoke('ap-req-with-retry', `${regName}=${v}`, `${regName}=`, 1000)
        console.log('apRequest write result:', result)
        if (regName in this.configMapInDevice) {
          this.configMapInDevice[regName] = this.configMap[regName]
        }
        // this.$notify({
        //   type: 'success',
        //   message: `<${regName}> ` + this.$t('has been written.'),
        //   duration: 2000,
        // })
      }
      //if any unit changed
      if (unitRegChanged) {
        await delayMs(100)
        ipcRenderer.send('broadcast-to-others', 'unit-change')
      }
      this.$message({
        type: 'success',
        message: this.$t('The device configurations are written.')
      })
    },
    writeToDevice() {
      if (!this.guiRendered) {
        this.$message.error(this.$t('text: config not loaded from anywhere'))
        return false
      }
      let formValid = false
      this.$refs['form1'].validate((valid) => formValid = valid)
      if (!formValid) return false
      this.btnWriteToDeviceLoading = true
      ipcRenderer.invoke('i2c-list-versions-req', 1).then((result) => {
        let i2cAddr2 = {}
        if (typeof result === 'object') i2cAddr2 = JSON.parse(JSON.stringify(result))
        if ('SW' in i2cAddr2) delete i2cAddr2['SW']
        if (Object.keys(i2cAddr2).length === 0) {
          throw new Error('i2cAddrFromDevice empty')
        } else {
          if (!compare2Objects(Object.keys(this.i2cAddrInCurrentCfg).sort(), Object.keys(result).sort())) {
            throw new Error('hw type not match')
          }
          this.i2cAddrFromDevice = result
          return this.writeToDeviceAsync()
        }
      }).then(() => {
        console.log('writeToDeviceAsync done.')
      }).catch(error => {
        console.log('writeToDeviceAsync error:', error)
        let errorMsg = error.message
        if (errorMsg.includes("i2cAddrFromDevice empty")) {
          this.$message.error(this.$t('text: not ready for writing to device'))
          console.log('i2c list empty, should reconnect the device')
        } else if (errorMsg.includes("hw type not match")) {
          this.$message.error(this.$t('text: config hw type not match'))
        } else {
          this.$message.error(this.$t('text: failed writing to device'))
        }
      }).finally(() => {
        this.btnWriteToDeviceLoading = false
      })
    },
    //restore factory
    async restoreFactorySettingsAsync() {
      this.btnRestoreLoading = true
      ipcRenderer.invoke('ap-req-with-retry', `RESTORE=1`, `RESTORE=1`, 3000).then((result) => {
        if (result) {
          this.$message({
            type: 'success',
            message: this.$t('text: restore factory success'),
            duration: 5000
          })
        }
      }).catch((error) => {
        this.$message.error(this.$t('Failed to restore!'))
      }).finally(() => {
        this.btnRestoreLoading = false
      })
    },
    restoreFactorySettings() {
      this.$confirm(this.$t('text: restore factory notice'), this.$t('Please confirm'), {
        confirmButtonText: this.$t('Yes'),
        cancelButtonText: this.$t('No'),
        type: 'warning'
      }).then(() => {
        setImmediate(this.restoreFactorySettingsAsync)
      }).catch(() => {
        console.log('restoreFactorySettings canceled')
      })
    },
    //reset rain counters
    async resetCountersAsync(counterName) {
      let btnLoading
      let cmd
      if (counterName === "acc") {
        btnLoading = this.btnResetRainAccLoading
        cmd = 'CRA=1'
      } else if (counterName === "sd") {
        btnLoading = this.btnResetSunDurationLoading
        cmd = 'CSD=1'
      }
      else {
        btnLoading = this.btnResetRainDurationLoading
        cmd = 'CRD=1'
      }
      btnLoading = true
      ipcRenderer.invoke('ap-req-with-retry', cmd, cmd, 3000).then((result) => {
        console.log(`resetCountersAsync succ:`, result)
        if (result) {
          this.$message({
            type: 'success',
            message: this.$t('text: reset success'),
            duration: 5000
          })
        }
      }).catch((error) => {
        this.$message.error(this.$t('Failed to reset!'))
      }).finally(() => {
        btnLoading = false
      })
    },
    resetCounters(counterName) {
      this.$confirm(this.$t('text: reset counters'), this.$t('Please confirm'), {
        confirmButtonText: this.$t('Yes'),
        cancelButtonText: this.$t('No'),
        type: 'warning'
      }).then(() => {
        setImmediate(this.resetCountersAsync, counterName)
      }).catch(() => {
        console.log('resetCounters canceled')
      })
    },
    //Save to file
    saveToFile() {
      if (!this.guiRendered) {
        this.$message.error(this.$t('text: config not loaded from anywhere'))
        return false
      }
      //build the JSON content
      const d = new Date()
      const dateStr = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
      let configMap = JSON.parse(JSON.stringify(this.configMap))
      if (!this.showG9Ht) delete configMap['HC']
      if (!this.showG9Tilt) {
        delete configMap['TD']
        delete configMap['CC']
      }
      let configProfileJson = {
        profileVersion: "1.0",
        i2cAddrs: this.i2cAddrInCurrentCfg,
        configMap: configMap,
        dateTime: dateStr
      }
      ipcRenderer.invoke('save-to-file', configProfileJson).then((result) => {
        if (result === 'canceled') return
        console.log('saved to file succ!')
        this.$message({
          type: 'success',
          message: this.$t('Saved to file successfully.')
        })
      }).catch((error) => {
        console.log('save to file error:', error)
        this.$message.error(this.$t('Failed in saving to file.'))
      })
    },
    //Load from file
    loadFromFile() {
      ipcRenderer.invoke('load-from-file').then((result) => {
        // console.log(result)
        if (result === 'canceled') return
        let cfgJson = JSON.parse(result)
        if ('profileVersion' in cfgJson && 'i2cAddrs' in cfgJson && 'configMap' in cfgJson) {
          if (cfgJson['profileVersion'] === "1.0") {
            this.i2cAddrInCurrentCfg = cfgJson['i2cAddrs']
            Object.assign(this.configMap, cfgJson['configMap'])
            this.showG9Ht = 'HC' in cfgJson['configMap']
            this.showG9Tilt = 'TD' in cfgJson['configMap']
            setImmediate(this.renderGUI)
            console.log('loaded from file succ, the profileVersion: 1.0')
            this.$message({
              type: 'success',
              message: this.$t('Loaded from file successfully.')
            })
          } else if (cfgJson['profileVersion'] === "x.x") {
            console.log('future is not far!')
          } else {
            console.log('load from file error, profile version wrong:', result)
            this.$message.error(this.$t('Failed in parsing the file, invalid profile version.'))
          }
        } else {
          console.log('load from file error, corrupted result:', result)
          this.$message.error(this.$t('Failed in loading from file, invalid profile file.'))
        }
      }).catch((error) => {
        console.log('load from file error:', error)
        this.$message.error(this.$t('Failed in loading from file, invalid profile file.'))
      })
    },
    compassCalib() {
      if (this.calibCountdown > 0) {
        return false
      } else {
        this.dialogBtnText = this.$t('Start')
        this.dialog = true
      }
    },
    calibTick() {
      let self = this
      setTimeout(() => {
        self.calibCountdown--
        self.dialogBtnText = self.calibCountdown + " " + self.$t('seconds')
        if (self.calibCountdown > 0) {
          ipcRenderer.send('ap-req', 'CC=?', 'CC=', 1000)
          self.calibTick()
        }
        else {
          self.dialog = false
        }
      }, 1100)
    },
    dialogBtnClicked() {
      let cmd = 'CC=C'
      ipcRenderer.invoke('ap-req-with-retry', cmd, cmd, 3000).then((result) => {
        console.log(`start compass calibration succ:`, result)
        if (result) {
          this.calibCountdown = 30
          this.dialogBtnText = this.calibCountdown + " " + this.$t('seconds')
          this.calibTick()
        }
      }).catch((error) => {
        this.$message.error(this.$t('Failed to start the calibration!'))
      })
    }
  },
  created() {
    console.log(`locale when created: ${this.$root.$i18n.locale}`)
    this.selectedLocale = this.localeBackup = this.$root.$i18n.locale
    //load config
    this.appConfig.dataPollInterval = parseInt(store.get('dataPollInterval', 2))
    this.appConfig.plotPointNum = parseInt(store.get('plotPointNum', 10))
  },
  mounted() {
    //ap-addr-got
    ipcRenderer.on('ap-addr-got', (event, arg) => {
      if (arg != this.apAddr) {
        console.log(`ascii protocol address got (${arg})`)
        this.apAddr = arg
      }
      this.configMap['AD'] = arg
    })
    if (!this.apAddr) {
      ipcRenderer.send('ap-addr-req')
    }
    //i2c list got
    ipcRenderer.on('i2c-list-got', (event, arg) => {
      this.i2cAddrFromDevice = JSON.parse(JSON.stringify(arg))
      console.log('i2c-list-got:', this.i2cAddrFromDevice)
      this.configMapInDevice = {}
    })
    if (Object.keys(this.i2cAddrFromDevice).length === 0) {
      ipcRenderer.send('i2c-list-req')
    }
    //ota
    ipcRenderer.on('current-version-resp', (event, arg) => {
      console.log('current-version-resp:', arg)
      let {currentVersion} = arg
      this.currentVersion = currentVersion
    })
    ipcRenderer.send('current-version-req')
    ipcRenderer.on('update-available', (event, arg) => {
      console.log('update-available:', arg)
      this.newVersion = arg
      document.getElementById('versionText').style.cursor = 'pointer'
    })
    ipcRenderer.on('ap-resp', (event, arg) => {
      console.log('ap-resp:', arg)
      // if ('CC' in arg && arg['CC'] !== 'C') {
      //   this.calibCountdown = 0
      // }
    })
    //dev info got
    ipcRenderer.on('dev-info-resp', (event, arg) => {
      let {'S/N': SN, HW, SW, MD, NA} = arg
      this.eui = SN
      this.sku = SN.substring(0,9)
      this.hwVersion = HW
      this.swVersion = SW
      this.devName = NA
      if (this.sku in ngSkus) this.sensorType = ngSkus[this.sku]
      else this.sensorType = 'unknown' // or gen1 devices
      console.log("hwVersion: ", this.hwVersion)
      console.log("sensorType: ", this.sensorType)
    })
    ipcRenderer.on('dev-info-resp-error', (event, arg) => {
      this.$message.error(this.$t('text: dev-info-error'))
    })

    ipcRenderer.on('dev-info-got', (event, arg) => {
      let {'S/N': SN, HW, SW, MD, NA} = arg
      this.eui = SN
      this.sku = SN.substring(0,9)
      this.hwVersion = HW
      this.swVersion = SW
      this.devName = NA
      if (this.sku in ngSkus) this.sensorType = ngSkus[this.sku]
      else this.sensorType = 'unknown' // or gen1 devices
      console.log("dev-info-got hwVersion: ", this.hwVersion)
      console.log("dev-info-got sensorType: ", this.sensorType)
    })

  },
  beforeDestroy() {
    ipcRenderer.removeAllListeners()
  }
}
</script>