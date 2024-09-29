exports.grpNameTransZh = {
  "THPL": "温湿压光",
  "Air Temperature": "空气温度",
  "Air Humidity": "空气湿度",
  "Air Pressure": "大气压",
  "Light Intensity": "光照强度",
  "Wind": "风速风向",
  "Min. Wind Direction": "风向角最小值",
  "Max. Wind Direction": "风向角最大值",
  "Avg. Wind Direction": "风向角平均值",
  "Min. Wind Speed": "风速最小值",
  "Max. Wind Speed": "风速最大值",
  "Avg. Wind Speed": "风速平均值",
  "Precipitation": "降雨",
  "Rain Accumulation": "累计降雨量",
  "Rain Duration": "累计降雨时长",
  "Rain Intensity": "降雨强度",
  "Rain Peak Intensity": "降雨强度峰值",
  "Misc.": "其他",
  "Heating Temperature": "加热区域温度",
  "Tilt Status": "倾倒状态",
  "Particulate Matter": "颗粒物",
  "Carbon Dioxide":"二氧化碳",
  "Carbon Dioxide Concentration": "二氧化碳浓度",
  "Noise": "噪声",
  "Sound Pressure Level": "声压级",
  "Total Solar Radiation": "太阳总辐射",
  "Sunlight Duration": "日照时长",
  "GlobalDefinesEnd": "-"
}

exports.changableUnitsMeasMap = {
  "UT": ["AT"],
  "UP": ["AP"],
  "US": ["SN", "SM", "SA"],
  "UR": ["RA", "RI", "RP"],
}

const units = {
  "UT": { "C": "℃", "F": "℉" },
  "UP": { "H": "hPa", "P": "Pa", "B": "Bar", "M": "mmHg", "I": "inHg" },
  "US": { "M": "m/s", "K": "km/h", "S": "mph", "N": "knots" },
  "UR": { "M": "mm", "I": "inch" },
}
exports.units = units

exports.displayStrForUnit = function(unitName, unitVal) {
  try {
    return units[unitName][unitVal]
  } catch (error) {
    return "#"
  }
}

exports.miscGroupDefine = {
  grpNameShort: "G9",
  grpName: "Misc.",
  meas: {
    "HT": { name: "Heating Temperature", unit: '℃', unitSuffix: '', i2cAddr: ["1"], drvVer: ["2.9"], commVer: ["2.8"] },
    "TILT": { name: "Tilt Status", unit: '', unitSuffix: '', i2cAddr: ["1"], drvVer: ["2.8"], commVer: ["2.8"] },
  }
}

exports.slaveGroupDefines = {
  //i2c addr 1
  "1": [
    {
      grpNameShort: "G1",
      grpName: "THPL",
      meas: {
        "AT": { name: "Air Temperature", unit: '#', unitSuffix: '' },
        "AH": { name: "Air Humidity", unit: '%RH', unitSuffix: '' },
        "AP": { name: "Air Pressure", unit: '#', unitSuffix: '' },
        "LX": { name: "Light Intensity", unit: 'Lux', unitSuffix: '' },
      }
    },
    {
      grpNameShort: "G2",
      grpName: "Wind",
      meas: {
        "DN": { name: "Min. Wind Direction", unit: '°', unitSuffix: '' },
        "DM": { name: "Max. Wind Direction", unit: '°', unitSuffix: '' },
        "DA": { name: "Avg. Wind Direction", unit: '°', unitSuffix: '' },
        "SN": { name: "Min. Wind Speed", unit: '#', unitSuffix: '' },
        "SM": { name: "Max. Wind Speed", unit: '#', unitSuffix: '' },
        "SA": { name: "Avg. Wind Speed", unit: '#', unitSuffix: '' },
      }
    },
    {
      grpNameShort: "G3",
      grpName: "Precipitation",
      meas: {
        "RA": { name: "Rain Accumulation", unit: '#', unitSuffix: '' },
        "RD": { name: "Rain Duration", unit: 's', unitSuffix: '' },
        "RI": { name: "Rain Intensity", unit: '#', unitSuffix: '/h' },
        "RP": { name: "Rain Peak Intensity", unit: '#', unitSuffix: '/h' },
      }
    }
  ],
  "2": [
    {
      grpNameShort: "G4",
      grpName: "Particulate Matter",
      meas: {
        "PM2.5": { name: "PM2.5", unit: 'ug/m³', unitSuffix: '' },
        "PM10": { name: "PM10", unit: 'ug/m³', unitSuffix: '' },
      }
    }
  ],
  "3": [],
  "16":[
    {
      grpNameShort: "G5",
      grpName: "Carbon Dioxide",
      meas: {
        "CO2": { name: "Carbon Dioxide Concentration", unit: 'ppm', unitSuffix: '' }
      }
    }
  ],
  "17":[
    {
      grpNameShort: "G5",
      grpName: "Carbon Dioxide",
      meas: {
        "CO2": { name: "Carbon Dioxide Concentration", unit: 'ppm', unitSuffix: '' }
      }
    }
  ],
  "41": [],
  "42": [],
}

exports.ngSkus = {
  "101991044": "v2_2in1",
  "101991045": "v2_2in1", 
  "101991021": "v2_5in1", 
  "101991232": "v2_6in1_light",
  "101991022": "v2_7in1",
  "101991023": "v2_8in1",
  "101991024": "v2_10in1",
  "101991025": "v2_10in1_carbon",
  "101991063": "v2_11in1_noise",
  "101991102": "v2_7in1_tsr",
  "101991103": "v2_10in1_tsr",
  "101991104": "v2_11in1_tsr_noise",
  "101991050": "v2_7in1_radar",
  "101991141": "v2_7in1_radar_tsr",
  "101991202": "single_radar",
  "101991062": "v2_9in1",
  "101991061": "v2_6in1"
}
exports.ngSensorTypes = {
  "v2_2in1":["G2"],
  "v2_5in1":["G1_THP", "G2"],
  "v2_6in1":["G1_THP", "G4", "G6"],
  "v2_6in1_light":["G1_THPL", "G2"],
  "v2_7in1":["G1_THPL", "G2", "G3"],
  "v2_8in1":["G1_THP", "G2", "G4", "G6"],
  "v2_9in1":["G1_THPL", "G2", "G3", "G4"],
  "v2_10in1":["G1_THPL", "G2", "G3", "G4", "G5"],
  "v2_10in1_carbon":["G1_THPL", "G2", "G3", "G4", "G5"],
  "v2_11in1_noise":["G1_THPL", "G2", "G3", "G4", "G5", "G6"],
  "unknown":["G1_THPL", "G2", "G3", "G4", "G5", "G6"],
  "v2_7in1_tsr":["G1_THP_TSR", "G2", "G3"],
  "v2_10in1_tsr":["G1_THP_TSR", "G2", "G3", "G4", "G5"],
  "v2_11in1_tsr_noise":["G1_THP_TSR", "G2", "G3", "G4", "G5", "G6"],
  "v2_7in1_radar":["G1_THPL", "G2", "G3"],
  "v2_7in1_radar_tsr":["G1_THP_TSR", "G2", "G3"],
  "single_radar": ["G3"]
}

exports.ngGroupDefines = {
  "G1_THP":
  {
    "grpNameShort": "G1",
    "grpName": "THP",
    "meas": {
      "AT": { "name": "Air Temperature", "unit": "#", "unitSuffix": "" },
      "AH": { "name": "Air Humidity", "unit": "%RH", "unitSuffix": "" },
      "AP": { "name": "Air Pressure", "unit": "#", "unitSuffix": "" }
    }
  },
  "G1_THPL":
  {
    "grpNameShort": "G1",
    "grpName": "THPL",
    "meas": {
      "AT": { "name": "Air Temperature", "unit": "#", "unitSuffix": "" },
      "AH": { "name": "Air Humidity", "unit": "%RH", "unitSuffix": "" },
      "AP": { "name": "Air Pressure", "unit": "#", "unitSuffix": "" },
      "LX": { "name": "Light Intensity", "unit": "Lux", "unitSuffix": "" }
    }
  },
  "G1_THP_TSR":
  {
    "grpNameShort": "G1",
    "grpName": "THPL",
    "meas": {
      "AT": { "name": "Air Temperature", "unit": "#", "unitSuffix": "" },
      "AH": { "name": "Air Humidity", "unit": "%RH", "unitSuffix": "" },
      "AP": { "name": "Air Pressure", "unit": "#", "unitSuffix": "" },
      "TSR": { "name": "Total Solar Radiation", "unit": "W/m²", "unitSuffix": "" },
      "SD": { "name": "Sunlight Duration", "unit": "h", "unitSuffix": "" }
    }
  },
  "G2":
  {
    "grpNameShort": "G2",
    "grpName": "Wind",
    "meas": {
      "DN": { "name": "Min. Wind Direction", "unit": "°", "unitSuffix": "" },
      "DM": { "name": "Max. Wind Direction", "unit": "°", "unitSuffix": "" },
      "DA": { "name": "Avg. Wind Direction", "unit": "°", "unitSuffix": "" },
      "SN": { "name": "Min. Wind Speed", "unit": "#", "unitSuffix": "" },
      "SM": { "name": "Max. Wind Speed", "unit": "#", "unitSuffix": "" },
      "SA": { "name": "Avg. Wind Speed", "unit": "#", "unitSuffix": "" }
    }
  },
  "G3":
  {
    "grpNameShort": "G3",
    "grpName": "Precipitation",
    "meas": {
      "RA": { "name": "Rain Accumulation", "unit": "#", "unitSuffix": "" },
      "RD": { "name": "Rain Duration", "unit": "s", "unitSuffix": "" },
      "RI": { "name": "Rain Intensity", "unit": "#", "unitSuffix": "/h" },
      "RP": { "name": "Rain Peak Intensity", "unit": "#", "unitSuffix": "/h" }
    }
  },
  "G4":
  {
    "grpNameShort": "G4",
    "grpName": "Particulate Matter",
    "meas": {
      "PM2.5": { "name": "PM2.5", "unit": "ug/m³", "unitSuffix": "" },
      "PM10": { "name": "PM10", "unit": "ug/m³", "unitSuffix": "" }
    }
  },
  "G5":
  {
    "grpNameShort": "G5",
    "grpName": "Carbon Dioxide",
    "meas": {
      "CO2": { "name": "Carbon Dioxide Concentration", "unit": "ppm", "unitSuffix": "" }
    }
  },
  "G6":
  {
    "grpNameShort": "G6",
    "grpName": "Noise",
    "meas": {
      "NOISE": { "name": "Sound Pressure Level", "unit": "dB", "unitSuffix": "" }
    }
  }
}
