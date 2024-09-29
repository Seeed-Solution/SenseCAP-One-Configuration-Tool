import Vue from 'vue'
import VueI18n from 'vue-i18n'
import commonMessages from '../locale/common'
const Store = require('electron-store')
const store = new Store()
import { formatLocale } from "../utils"
const fs = require('fs')
// const logger = require("electron-log")

Vue.use(VueI18n)

let initLocale = store.get('selectedLocale') || navigator.language || 'en'

// Update locale message if we have config.json
let filePath = './config.json'
try{
  fs.accessSync(filePath, fs.constants.R_OK)
  let data = fs.readFileSync(filePath, {
    encoding: 'utf8'
  })
  let cfg = JSON.parse(data)
  for (let name in cfg['ngGrpNameTransZh']) {
    commonMessages["zh"][name] = cfg['ngGrpNameTransZh'][name]
  }
  // logger.debug('init locale: ', commonMessages)

} catch(error) {
  // logger.warn('error when read config.json:', error)
  // logger.warn('skip reading config.json')
}

let i18n = new VueI18n({
  locale: formatLocale(initLocale),
  fallbackLocale: 'en',
  silentFallbackWarn: true,
  silentTranslationWarn: true,
  messages: commonMessages,
})

export default i18n