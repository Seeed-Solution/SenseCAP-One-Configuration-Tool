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


