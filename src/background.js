// 'use strict'

import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import { app, protocol, BrowserWindow, shell, ipcMain, dialog } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
// const {SerialPort} = require('serialport')
const SerialPort = require('serialport')
const Menu = require("electron-create-menu")
import i18next from 'i18next'
const { autoUpdater } = require("electron-updater")
const {yModem} = require('./ymodem')
import { formatLocale } from './utils'
const path = require('path')
const fs = require('fs')
const fsPromises = fs.promises
const Store = require('electron-store')
const store = new Store()
const { Readable } = require('stream')
// const { ReadlineParser } = require('@serialport/parser-readline')
const ReadlineParser = require('@serialport/parser-readline')
const dateFormat = require('dateformat')
const { once, EventEmitter } = require('events')

let appName = "SenseCAP One Configuration Tool"
app.name = appName

const logger = require("electron-log")
autoUpdater.logger = logger

const isDevelopment = process.env.NODE_ENV !== 'production'
autoUpdater.logger.transports.file.level = isDevelopment ? "debug" : "info"

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
let winSettings
let winSettingsStartTimer
let winFwUpdate
let winFwUpdateStartTimer
let sysLocale

let serialPorts = []
let selectedSerialPort
let selectedSerialBaud
let serial
let ymodem = new yModem(true, logger.debug)
let updating = 0  //0-idle, 1-entering bootloader , 2-YModem transfer
let oldBaudRate


//stream
const stream = new Readable({
  read: (size) => {}
})
//parser
const parser = stream.pipe(new ReadlineParser())
//ASCII protocol
let ee = new EventEmitter()
let ee2 = new EventEmitter()
let hIntervalQueryApAddr
let apAddr
let apCmdProcessing = false
let apCmdQueue = []
//auto update
let autoUpdateTimeHandler = null
//misc
const homedir = require('os').homedir()
const delayMs = ms => new Promise(res => setTimeout(res, ms))


/**
 * The Menu's locale only follows the system, the user selection from the GUI doesn't affect
 */

async function translateMenu() {
  sysLocale = formatLocale(store.get('selectedLocale') || process.env.LOCALE || app.getLocale())
  logger.info('the sys locale:', sysLocale)

  await i18next.init({
    lng: sysLocale,
    fallbackLng: 'en',
    debug: isDevelopment,
    resources: {
      zh: {
        translation: {
          "File": "文件",
          "Edit": "编辑",
          "Speech": "语音",
          "View": "视图",
          "Window": "窗口",
          "Help": "帮助",
          "About": "关于",
          "Hide": "隐藏",
          "Quit": "退出",
          "Report an issue": "报告错误",
        } //other keywords are translated by the OS automatically
      }
    }
  }).then((t) => {
    Menu((defaultMenu, separator) => {
      defaultMenu[0].submenu[0].label = t('About') + " " + appName
      defaultMenu[0].submenu[4].label = t('Hide') + " " + appName
      defaultMenu[0].submenu[8].label = t('Quit') + " " + appName
      if (!isDevelopment) defaultMenu[3].submenu[2].showOn = 'neverMatch'
      defaultMenu[4].label = t('Window')
      defaultMenu[5].label = t('Help')
      defaultMenu[5].showOn = ['darwin', 'win32', 'linux']
      defaultMenu[5].submenu.push({
        label: t('Report an issue'),
        click: () => {
          shell.openExternal('https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/issues')
        }
      })
      logger.debug(JSON.stringify(defaultMenu))
      return defaultMenu
    },
    // This function is used to translate the default labels
    t
  )})
}

if (process.platform === 'darwin') {
  app.setAboutPanelOptions({
    applicationName: appName,
  })
}

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{scheme: 'app', privileges: { secure: true, standard: true } }])

function createMainWindow () {
  // Create the browser window.
  let w = 1000
  let h = 700

  if (process.platform === 'win32') {
    h += 30  //for menu bar
  }

  win = new BrowserWindow({
    show: false,
    width: w,
    height: h,
    minWidth: w,
    minHeight: h,
    useContentSize: true,
    webPreferences: {
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      enableRemoteModule: true
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  win.on('closed', () => {
    win = null
    if (winSettings) {
      winSettings.close()
    }
    if (winFwUpdate) {
      winFwUpdate.close()
    }
  })

  win.once('ready-to-show', () => {
    win.show()
    scheduleOpenSettingsWindow()
    scheduleOpenFwUpdateWindow()
  })
}

function scheduleOpenSettingsWindow() {
  if (!winSettingsStartTimer) {
    winSettingsStartTimer = setTimeout(() => {
      winSettingsStartTimer = null
      if (!winSettings) {
        createSettingsWindow(false)
      } else {
        logger.debug(`winSettingsStartTimer: winSettings already created, skip ...`)
      }
    }, 200)
  }
}

function createSettingsWindow (showAfterCreated = false) {
  // Create the browser window.
  let w = 900
  let h = 700

  if (process.platform === 'win32') {
    h += 30  //for menu bar
  }

  winSettings = new BrowserWindow({
    show: false,
    width: w,
    height: h,
    minWidth: w,
    minHeight: h,
    useContentSize: true,
    webPreferences: {
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      enableRemoteModule: true
    },
    // menuBarVisible: false,
    // skipTaskbar: true,
  })
  winSettings.setMenuBarVisibility(false)

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    winSettings.loadURL(process.env.WEBPACK_DEV_SERVER_URL + "settings.html")
    logger.debug(`load the settings windows from dev server...`)
    if (!process.env.IS_TEST) winSettings.webContents.openDevTools()
  } else {
    // Load the index.html when not in development
    winSettings.loadURL('app://./settings.html')
  }

  winSettings.on('close', (e) => {
    if (win) {
      logger.debug(`winSettings is going to be closed, but we skip that`)
      e.preventDefault()
      winSettings.hide()
    } else {
      logger.debug(`winSettings is going to be closed, since win = null`)
    }
  })

  winSettings.on('closed', () => {
    winSettings = null
  })

  winSettings.once('ready-to-show', () => {
    logger.debug(`winSettings is ready to show`)
    if (showAfterCreated) {
      winSettings.show()
    }
  })
}

function scheduleOpenFwUpdateWindow() {
  if (!winFwUpdateStartTimer) {
    winFwUpdateStartTimer = setTimeout(() => {
      winFwUpdateStartTimer = null
      if (!winFwUpdate) {
        createFwUpdateWindow(false)
      } else {
        logger.debug(`winFwUpdateStartTimer: winFwUpdate already created, skip ...`)
      }
    }, 500)
  }
}

function createFwUpdateWindow (showAfterCreated = false) {
  // Create the browser window.
  let w = 500
  let h = 400

  if (process.platform === 'win32') {
    h += 30  //for menu bar
  }

  winFwUpdate = new BrowserWindow({
    show: false,
    width: w,
    height: h,
    minWidth: w,
    minHeight: h,
    useContentSize: true,
    webPreferences: {
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      enableRemoteModule: true
    },
    // menuBarVisible: false,
    // skipTaskbar: true,
  })
  winFwUpdate.setMenuBarVisibility(false)

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    winFwUpdate.loadURL(process.env.WEBPACK_DEV_SERVER_URL + "fwupdate.html")
    logger.debug(`load the FwUpdate window from dev server...`)
    if (!process.env.IS_TEST) winFwUpdate.webContents.openDevTools()
  } else {
    // Load the index.html when not in development
    winFwUpdate.loadURL('app://./fwupdate.html')
  }

  winFwUpdate.on('close', (e) => {
    if (win) {
      logger.debug(`winFwUpdate is going to be closed, but we skip that`)
      e.preventDefault()
      if (updating > 0) {
        broadcastMultiWindows('confirm-cancel-update', null, winFwUpdate)
      } else {
        broadcastMultiWindows('hide-fwupdate-window', null, winFwUpdate)
        winFwUpdate.hide()
      }
    } else {
      logger.debug(`winFwUpdate is going to be closed, since win = null`)
    }
  })

  winFwUpdate.on('closed', () => {
    winFwUpdate = null
  })

  winFwUpdate.once('ready-to-show', () => {
    logger.debug(`winFwUpdate is ready to show`)
    if (showAfterCreated) {
      winFwUpdate.show()
    }
  })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  // if (process.platform !== 'darwin') {
    serialClose()
    app.quit()
  // }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createMainWindow()
  }
})

app.on('before-quit', () => {
  if (autoUpdateTimeHandler) clearTimeout(autoUpdateTimeHandler)
  serialClose()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {

  await translateMenu()

  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    // Devtools extensions are broken in Electron 6.0.0 and greater
    // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
    // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
    // If you are not using Windows 10 dark mode, you may uncomment these lines
    // In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
    let name = await installExtension(VUEJS_DEVTOOLS)
    logger.debug(`Added Extension:  ${name}`)

    logger.debug(`process.env.WEBPACK_DEV_SERVER_URL: ${process.env.WEBPACK_DEV_SERVER_URL}`)

  }

  createMainWindow()

  autoUpdateTimeHandler = setTimeout(() => {
    autoUpdater.checkForUpdatesAndNotify()
    autoUpdateTimeHandler = null
  }, 10000)

})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        serialClose()
        ipcMain.removeAllListeners()
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      serialClose()
      ipcMain.removeAllListeners()
      app.quit()
    })
  }
}

// Serial
ipcMain.on('init-serial-req', (event, arg) => {
  logger.info('init-serial-req ...')

  SerialPort.list().then(ports => {
    serialPorts = ports
    logger.debug(ports)

    let opened = false
    if (serial && serial.isOpen) opened = true

    let resp = {
      ports: ports,
      selectedPort: selectedSerialPort,
      opened: opened
    }

    event.reply('init-serial-resp', resp)
  })
})

function serialOpen(event) {
  // serial = new SerialPort({path: selectedSerialPort,
  serial = new SerialPort(selectedSerialPort, {
    baudRate: selectedSerialBaud || 115200,
    autoOpen: false
  })

  let h = setTimeout(() => {
    event.reply('serial-open-resp', {opened: false, reason: 'timeout'})
  }, 5000)

  serial.on('open', () => {
    clearTimeout(h)
    event.reply('serial-open-resp', {opened: true, reason: ''})
    ee.emit('serial-open')
  })

  serial.on('data', (data) => {
    // if (win) {
    //   win.webContents.send('serial-tx', data)
    // }
    stream.push(data)

    if (ymodem && updating) {
      ymodem.emit('rx', data)
    }
  })

  serial.on('error', (err) => {
    logger.warn('serial error:', err)
  })

  serial.on('close', (err) => {
    ee.emit('serial-close')
  })

  serial.open()
}

function serialClose(cb) {
  if (serial) {
    serial.close((err) => {
      serial = null
      if (cb) cb()
    })
  }
}

async function serialCloseAsync() {
  return new Promise((resolve, reject) => {
    serialClose(resolve)
  })
}

async function serialWriteAsync(data, timeout=250) {
  return new Promise((resolve, reject) => {
    const h = setTimeout(() => {
      reject(new Error('serialWriteAsync timeout'))
    }, timeout)
    if (serial && serial.isOpen) {
      serial.write(data, (error) => {
        if (error) {
          clearTimeout(h)
          reject(error)
        }
        serial.drain((error2) => {
          clearTimeout(h)
          if (error2) reject(error2)
          resolve()
        })
      })
    } else {
      reject(new Error('serial is not open'))
    }
  })
}

ipcMain.on('serial-open-req', (event, selPort, baud) => {
  logger.info(`serial-open-req, ${selPort}, ${baud} ...`)

  if (serial && serial.isOpen) {
    if (selPort === selectedSerialPort) {
      logger.info('already opened')
      event.reply('serial-open-resp', {opened: true, reason: 'already opened'})
      return
    } else {
      logger.warn('request to open another port, rather', selectedSerialPort)
      selectedSerialPort = selPort
      selectedSerialBaud = baud
      serialClose(() => {
        serialOpen(event)
      })
    }
  } else {
    selectedSerialPort = selPort
    selectedSerialBaud = baud
    serialOpen(event)
  }
})

ipcMain.on('serial-close-req', (event, arg) => {
  logger.info('serial-close-req ...')

  if (!serial || !serial.isOpen) {
    logger.info('already closed')
    event.reply('serial-close-resp', {closed: true, reason: 'already closed'})
    return
  }

  let h = setTimeout(() => {
    event.reply('serial-close-resp', {closed: false, reason: 'timeout'})
  }, 1000)

  serialClose(() => {
    clearTimeout(h)
    event.reply('serial-close-resp', {closed: true, reason: ''})
  })
})

ipcMain.on('serial-rx', (event, arg) => {
  if (serial && serial.isOpen) {
    logger.debug(`serial-rx: ${arg}`)
    serial.write(arg)
  }
})


// ASCII Protocol
function parseLine(line) {
  //logger.debug(`parseLine: ${line}`)
  line = line.trim()

  let found
  found = line.match(/^([0-9A-Za-z]{1})XA$/)
  if (found) {
    logger.debug('found ASCII address query result:', found[0])
    apAddr = found[1]
    ee.emit('ap-addr-got')
    return
  }
  found = line.match(/^([0-9A-Za-z]{1})XA;(.+)$/)
  if (found) {
    logger.debug('found ASCII resp:', found[2])
    ee.emit('ap-dev-resp', found[2])
    return
  }

  found = line.match(/command-line\s+tool$/i)
  if (found) {
    logger.debug('found old bootloader:', line)
    ee2.emit('error', new Error('bootloader not supported'))  //old bootloader
    return
  }
  found = line.match(/Connected Slave Devices:\s?(.*)$/i)
  if (found) {
    logger.debug('found connected slaves in bootloader:', found[1])
    ee2.emit('detected-slaves-in-bootloader', found[1])
    return
  }

}

parser.on('data', (line) => {
  // logger.debug(line, 'len:', line.length)
  parseLine(line)
})

ee.on('serial-open', () => {
  apAddr = ''
  hIntervalQueryApAddr = setInterval(() => {
    if (serial && serial.isOpen && !updating) {
      logger.debug(`send ASCII cmd: ?`)
      serial.write('?\r\n')
    }
  }, 500)
})

ee.on('serial-close', () => {
  if (hIntervalQueryApAddr) {
    clearInterval(hIntervalQueryApAddr)
    hIntervalQueryApAddr = null
  }
})

ee.on('ap-addr-got', () => {
  logger.info(`ascii protocol addr got: ${apAddr}`)
  if (hIntervalQueryApAddr) {
    clearInterval(hIntervalQueryApAddr)
    hIntervalQueryApAddr = null
  }
  if (apCmdProcessing) {
    //this is for AP cmd error resp
    ee.emit('error', new Error('apDevRequest cmd format error or param invalid'))
    return
  }
  broadcastMultiWindows('ap-addr-got', apAddr, win, winSettings, winFwUpdate)
})

/**
 * ASCII Protocol Request, read / write device
 * @param {string} strCmd command string, except aXA and CRLF
 * @param {string} succNeedle '*' stands for any response
 * @param {number} timeoutMs
 */
async function apDevRequest(strCmd, succNeedle = '*', timeoutMs = 1000) {
  if (!apAddr) throw new Error('apAddr empty')
  let strCmdFinal = `${apAddr}XA;${strCmd}\r\n`
  if (serial && serial.isOpen) {
    //TODO: hold on if doing Fw Update
    if (updating) {
      throw new Error('skip this request during fw updating')
    }

    logger.debug(`send ASCII cmd: ${strCmdFinal}`)
    // serial.write(strCmdFinal)
    await serialWriteAsync(strCmdFinal)

    let h = setTimeout(() => {
      ee.emit('error', new Error('apDevRequest timeout'))
    }, timeoutMs)

    try {
      const [apResp] = await once(ee, 'ap-dev-resp')
      clearTimeout(h)
      //examples:
      //G0=AT&AH&AP&LX&DN&DM&DA&SN&SM&SA&RA&RD&RI&RP&HT<CR><LF>
      //G1=AT&AH&AP&LX<CR><LF>
      //G1=AT&AH&AP&LX;IB=60;UT=C;UP=P<CR><LF>
      //special case:
      //Tx：0XA;G1?<CR><LF>
      //Rx：0XA;AT=57.5&AH=57.5&AP=57.5&LX=57.5<CR><LF>
      if (succNeedle === '*' || apResp.includes(succNeedle)) {
        let fieldsArray = apResp.trim().split(';')
        let fields = {}
        for (const fieldStr of fieldsArray) {
          let [key, value] = fieldStr.split('=')
          if (value.includes('&')) {
            fields[key] = value.trim().split('&')
          } else {
            fields[key] = value.trim()
          }
        }
        return fields
      }
    } catch (error) {
      clearTimeout(h)
      throw error
    }

  } else {
    throw new Error('serial not ready')
  }
}

/**
 * start to consume the cmd queue of the ascii protocol
 */
async function startProcApCmds() {
  if (apCmdQueue.length == 0) return
  apCmdProcessing = true
  let {event, args, promiseResolvers} = apCmdQueue.shift()
  try {
    let fields = await apDevRequest(...args)
    if (event) {
      event.reply('ap-resp', fields)
    } else {
      let [resolve, _] = promiseResolvers
      resolve(fields)
    }
  } catch (error) {
    logger.warn(`apDevRequest error:`, error)
    if (event) {
      event.reply('ap-resp-error', error)
    } else {
      let [_, reject] = promiseResolvers
      reject(error)
    }
  } finally {
    apCmdProcessing = false
    setImmediate(startProcApCmds)
  }
}

ipcMain.on('ap-req', async (event, ...args) => {
  let cmd = {event: event, args: args}
  apCmdQueue.push(cmd)
  if (!apCmdProcessing) {
    startProcApCmds()
  }
})

async function apRequestAsync(strCmd, ...args) {
  for (let i = 0; i < 3 && (serial && serial.isOpen); i++) {
    let promise = new Promise((resolve, reject) => {
      let cmd = {event: null, args: [strCmd, ...args], promiseResolvers: [resolve, reject]}
      apCmdQueue.push(cmd)
      if (!apCmdProcessing) {
        startProcApCmds()
      }
    })
    try {
      let fields = await promise
      //special cases: set AD and BD
      if (strCmd.search(/^AD=[0-9A-Za-z]{1}/) > -1) {
        apAddr = fields['AD']
      }
      let found = strCmd.match(/^BD=(\d+)/)
      if (found && serial && serial.isOpen) {
        logger.debug('going to update baud rate to:', found[1])
        serial.update({baudRate: parseInt(found[1])*100})
        broadcastMultiWindows('baud-rate-change', parseInt(found[1])*100, win)
      }
      return fields
    } catch (error) {
      logger.warn(`apRequestAsync failed ${i} try, error:`, error)
    }
  }
  throw new Error(`apRequestAsync failed after multiple retries`)
}

//for ipcRenderer.invoke()
ipcMain.handle('ap-req-with-retry', async (event, strCmd, ...args) => {
  return await apRequestAsync(strCmd, ...args)
})

// Device Info Query
ipcMain.on('dev-info-req', async (event) => {
  logger.info('dev-info-req ...')
  try {
    let snObj = await apRequestAsync('S/N=?', 'S/N=', 500)

    let versionsObj = await apRequestAsync('VE=?', 'VE=', 500)
    let versionsArray = versionsObj['VE']
    logger.debug(versionsArray)
    let versionsMap = {}
    let slaveVersionMap = {}
    for (const versionPart of versionsArray) {
      let [key, value] = versionPart.split('-')
      versionsMap[key] = value
      if (key.startsWith('S') && key !== 'SW') {
        slaveVersionMap[key.slice(1)] = value
      }
    }
    logger.debug('versionsMap:', versionsMap)
    logger.debug('slaveVersionMap:', slaveVersionMap)
    broadcastMultiWindows('i2c-list-got', slaveVersionMap, win, winSettings, winFwUpdate)
    await delayMs(100)

    let dateOfManuObj = await apRequestAsync('MD=?', 'MD=', 400)
    let mdStr = dateOfManuObj['MD']
    let dateOfManuFriendlyStr = mdStr.slice(0, 4) + '-' + mdStr.slice(4, 6) + '-' + mdStr.slice(-2)

    let nameObj = await apRequestAsync('NA=?', 'NA=', 400)

    // {'S/N': 'XXX', 'HW': 'XXX', 'SW': 'XXX', 'S1': 'YYY', 'S2': 'ZZZ', 'MD': 'DDD', 'NA': 'NNN'}
    let deviceInfoObj = {...snObj, ...versionsMap, 'MD': dateOfManuFriendlyStr, ...nameObj}
    logger.debug('deviceInfoObj:', deviceInfoObj)
    event.reply('dev-info-resp', deviceInfoObj)
    broadcastMultiWindows('dev-info-got', deviceInfoObj, winSettings)

  } catch (error) {
    logger.warn('error when querying device info:', error)
    event.reply('dev-info-resp-error', error)
  }
})

ipcMain.on('ap-addr-req', (event) => {
  logger.info('ap-addr-req ...')
  event.reply('ap-addr-got', apAddr)
})

async function queryI2CAddrAndVersions(...args) {
  logger.info('queryI2CAddrAndVersions with args', args)
  let versionsObj = await apRequestAsync('VE=?', 'VE=', 2000)
  let versionsArray = versionsObj['VE']
  let slaveVersionMap = {}
  let [withSw] = args
  for (const versionPart of versionsArray) {
    let [key, value] = versionPart.split('-')
    if (key.startsWith('S') && key !== 'SW') {
      slaveVersionMap[key.slice(1)] = value
    }
    if (withSw && key === 'SW') {
      slaveVersionMap[key] = value
    }
  }
  return slaveVersionMap
}

ipcMain.on('i2c-list-req', async (event, ...args) => {
  logger.info('i2c-list-req ...')
  try {
    let slaveVersionMap = await queryI2CAddrAndVersions(args)
    logger.debug('slaveVersionMap:', slaveVersionMap)
    event.reply('i2c-list-got', slaveVersionMap)
  } catch (error) {
    logger.warn('error when query VE:', error)
    event.reply('i2c-list-got-error', error)
  }
})

ipcMain.handle('i2c-list-versions-req', async(event, ...args) => {
  logger.info('i2c-list-versions-req ...')
  return await queryI2CAddrAndVersions(args)
})

// AutoUpdater
autoUpdater.on('update-available', (info) => {
  logger.info('update-available', JSON.stringify(info))
  let {version} = info
  //winSettings should be initialized now, because autoUpdate check is done 10 sec after
  //the app is opened, the Settings windows is opened (hidden) 1 sec after the app is opened.
  if (winSettings && version) winSettings.webContents.send('update-available', version)
})

autoUpdater.on('update-not-available', (info) => {
  logger.info('update-not-available', JSON.stringify(info))
})

// App-self Update
ipcMain.on('current-version-req', (event, arg) => {
  logger.info('current-version-req ...')
  let currentVersion = autoUpdater.currentVersion.version
  logger.info(`the current version is: ${currentVersion}`)
  event.reply('current-version-resp', {currentVersion: currentVersion})
})

// yModem Fw Update
ipcMain.handle('select-file', async (event) => {
  logger.info('select file ...')
  let {canceled, filePaths} = await dialog.showOpenDialog({
    filters: [
      { name: 'BIN Files', extensions: ['bin'] },
      { name: 'All Files', extensions: ['*'] }
    ],
    properties: ['openFile', 'noResolveAliases']
  })

  if (!canceled) {
    let filePath = filePaths[0]
    logger.info('selected file:', filePath)
    if (!filePath) throw new Error('openDialog get empty filePath.')

    try {
      await fsPromises.access(filePath, fs.constants.R_OK)
    } catch (error) {
      logger.warn('can not access file:', filePath)
      logger.debug(error)
      throw new Error('no read permission')
    }

    return filePath
  } else {
    return 'canceled'
  }
})

ipcMain.handle('test-file', async (event, filePath) => {
  logger.info('test file:', filePath)
  if (!filePath) throw new Error('empty filePath.')

  try {
    await fsPromises.access(filePath, fs.constants.R_OK)
    return filePath
  } catch (error) {
    logger.warn('can not access file:', filePath)
    logger.debug(error)
    throw new Error('no read permission')
  }
})

ipcMain.handle('enter-bootloader', async (event, i2cAddr) => {
  logger.info('try to enter bootloader ...')
  if (!(serial && serial.isOpen)) {
    throw new Error('serial not ready')
  }
  try {
    oldBaudRate = serial.baudRate
    serial.update({baudRate: 115200})
    broadcastMultiWindows('baud-rate-change', 115200, win)
  } catch (error) {
    throw new Error('serial not ready')
  }
  let hi = setInterval(() => {
    if (serial && serial.isOpen) {
      serial.write('B')
    }
  }, 10)
  let ht = setTimeout(() => {
    ee2.emit('error', new Error('timeout waiting reboot'))
  }, 30000)
  updating = 1
  try {
    let [slaveDevicesStr] = await once(ee2, 'detected-slaves-in-bootloader')
    if (!slaveDevicesStr) slaveDevicesStr = '[]'
    clearInterval(hi)
    clearTimeout(ht)
    const slaveDevicesJson = JSON.parse(slaveDevicesStr)
    if (i2cAddr === 'master') {
      return slaveDevicesJson
    }
    for (const [addr, swVer] of slaveDevicesJson) {
      if (parseInt(addr, 16) === parseInt(i2cAddr)) return slaveDevicesJson
    }
    updating = 0
    try {
      serial.update({baudRate: oldBaudRate})
      broadcastMultiWindows('baud-rate-change', oldBaudRate, win)
    } catch (error) {
      throw new Error('serial not ready')
    }
    broadcastMultiWindows('slave-devices-detected', slaveDevicesJson, winFwUpdate)
    throw new Error('target board not found')
  } catch (error) {
    clearInterval(hi)
    clearTimeout(ht)
    updating = 0
    try {
      serial.update({baudRate: oldBaudRate})
      broadcastMultiWindows('baud-rate-change', oldBaudRate, win)
    } catch (error) {
      throw new Error('serial not ready')
    }
    throw error
  }
})

async function progressCallback(val) {
  broadcastMultiWindows('progress', val.toFixed(1), winFwUpdate)
}

function ymodemWrite(chunk, resolve, reject) {
  if (serial) {
    serial.write(chunk, (err) => {
      if (err) reject()
      else resolve()
    })
  }
}

ipcMain.handle('ymodem-update', async (event, i2cAddr, fwPath) => {
  logger.info('begin to ymodem update ...')
  if (!(serial && serial.isOpen)) {
    throw new Error('serial not ready')
  }
  try {
    let fileContent = await fsPromises.readFile(fwPath)
    if (fileContent) {
      if (i2cAddr === 'master') serial.write('m')
      else serial.write('s')

      await delayMs(1000)

      if (i2cAddr !== 'master') {
        let hexAddr = parseInt(i2cAddr).toString(16)
        if (hexAddr.length < 2) hexAddr = "0" + hexAddr
        serial.write(hexAddr)
      }

      await delayMs(1000)

      broadcastMultiWindows('update-fw-begin', null, winFwUpdate, win)

      ymodem.clearStream()
      ymodem.on('progress', progressCallback)
      ymodem.on('tx', ymodemWrite)
      updating = 2
      let pendingError
      try {
        let timeoutPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            reject(new Error('overall timeout'))
          }, 600000)
        })
        await Promise.race([ymodem.transfer(fileContent), timeoutPromise, once(ee2, 'whatever')])
      } catch (error) {
        logger.warn('ymodem transfer error:', error)
        let errorMsg = error.message
        if (errorMsg.includes('overall timeout') || errorMsg.includes('user canceled')) {
          pendingError = error
        }
        else pendingError = new Error('yModem transfer error')
      }
      updating = 0
      ymodem.removeAllListeners('progress')
      ymodem.removeAllListeners('tx')

      if (pendingError) throw pendingError

      //succ
      broadcastMultiWindows('update-fw-end', null, winFwUpdate, win)
    } else {
      throw new Error('fw file is empty')
    }
  } catch (error) {
    broadcastMultiWindows('update-fw-abort', null, win)
    throw error
  } finally{
    serial.update({baudRate: oldBaudRate})
    broadcastMultiWindows('baud-rate-change', oldBaudRate, win)
  }


})

// locale
ipcMain.on('locale-req', (event) => {
  logger.info('locale-req ...')
  event.reply('locale-resp', sysLocale)
})

ipcMain.on('locale-change', (event, arg) => {
  logger.info('locale-change, ', arg)
  if (arg === sysLocale) return
  i18next.changeLanguage(arg)
  translateMenu()
  broadcastMultiWindows('locale-change', arg, win, winFwUpdate)
})

// System Call
ipcMain.on('goto-new-version', (event) => {
  shell.openExternal('https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases/latest')
})

//Other Windows and Windows Communication
ipcMain.on('open-settings-window', (event) => {
  logger.info('ipc: open-settings-window ...')
  if (winSettings) {
    winSettings.show()
    winSettings.focus()
  } else {
    createSettingsWindow(true)
  }
})
ipcMain.on('close-settings-window', (event) => {
  logger.info('ipc: close-settings-window ...')
  if (winSettings) {
    winSettings.hide()
    //winSettings.close()
  }
})
ipcMain.on('open-fwupdate-window', (event) => {
  logger.info('ipc: open-fwupdate-window ...')
  if (winFwUpdate) {
    winFwUpdate.show()
    winFwUpdate.focus()
  } else {
    createFwUpdateWindow(true)
  }
})
ipcMain.on('close-fwupdate-window', (event) => {
  logger.info('ipc: close-fwupdate-window ...')
  if (winFwUpdate) {
    if (updating >= 1) {
      ee2.emit('error', new Error('user canceled'))
    }
    broadcastMultiWindows('hide-fwupdate-window', null, winFwUpdate)
    winFwUpdate.hide()
    //winFwUpdate.close()
  }
})

function broadcastMultiWindows(eventName, eventValue, ...windows) {
  for (const w of windows) {
    if (w && w instanceof BrowserWindow) {
      logger.debug(`send event ${eventName} = ${eventValue} to `, w.title)
      w.webContents.send(eventName, eventValue)
    }
  }
}

ipcMain.on('broadcast-to-others', (event, eventName, ...args) => {
  let windows = [win, winSettings, winFwUpdate]
  let wContent = event.webContents
  logger.info('broadcast-to-others:', eventName)
  for (const w of windows) {
    if (w && w instanceof BrowserWindow) {
      if (w.webContents === wContent) continue
      logger.debug(`going to broadcast event ${eventName} to `, w.title)
      w.webContents.send(eventName, ...args)
    }
  }
})

ipcMain.on('read-ng-config', (event) => {
  logger.info('handle read-ng-config call ...')
  let filePath = './config.json'

  try{
    fs.accessSync(filePath, fs.constants.R_OK)
  } catch (error) {
    logger.warn('can not access file:', filePath)
    logger.debug(error)
    throw new Error('can not read config.json')
  }
  try {
    event.returnValue = fs.readFileSync(filePath, {
      encoding: 'utf8'
    })
  } catch (error) {
    logger.warn('error when read file:', filePath)
    logger.debug(error)
    throw new Error('read config.json error')
  }  
})

// Settings Save to File / Load from File
function genFilePath(ext) {
  let now = new Date()
  let datetimeStr = dateFormat(now, "yyyymmdd-HHMMss")
  let _ext = ext || "txt"

  return `SenseCAP_One_Cfg_Profile-${datetimeStr}.${_ext}`
}

function genFilePathByDay(ext) {
  let now = new Date()
  let datetimeStr = dateFormat(now, "yyyymmdd")
  let _ext = ext || "txt"

  return `${datetimeStr}.${_ext}`
}

ipcMain.handle('save-to-file', async (event, configProfileJson) => {
  logger.info('handle save-to-file call ...')
  logger.debug('configProfileJson:', configProfileJson)

  let {canceled, filePath} = await dialog.showSaveDialog({
    defaultPath: genFilePath('json'),
    filters: [
      { name: 'JSON Files', extensions: ['json'] },
      { name: 'All Files', extensions: ['*'] }
    ],
    properties: ['createDirectory']
  })
  if (!canceled) {
    if (!filePath) throw new Error('saveDialog get empty filePath.')

    try {
      await fsPromises.writeFile(filePath, JSON.stringify(configProfileJson))
      return 'succ'
    } catch (error) {
      logger.warn('error when write file:', filePath)
      logger.debug(error)
      throw new Error('write file error')
    }
  } else {
    return 'canceled'
  }
})

ipcMain.handle('load-from-file', async (event) => {
  logger.info('handle load-from-file call ...')

  let {canceled, filePaths} = await dialog.showOpenDialog({
    filters: [
      { name: 'JSON Files', extensions: ['json'] },
      { name: 'All Files', extensions: ['*'] }
    ],
    properties: ['openFile', 'noResolveAliases']
  })
  if (!canceled) {
    let filePath = filePaths[0]
    logger.info('selected file:', filePath)
    if (!filePath) throw new Error('openDialog get empty filePath.')

    try{
      await fsPromises.access(filePath, fs.constants.R_OK)
    } catch (error) {
      logger.warn('can not access file:', filePath)
      logger.debug(error)
      throw new Error('no read permission')
    }

    try {
      return await fsPromises.readFile(filePath, {
        encoding: 'utf8'
      })
    } catch (error) {
      logger.warn('error when read file:', filePath)
      logger.debug(error)
      throw new Error('read file error')
    }
  } else {
    return 'canceled'
  }
})

