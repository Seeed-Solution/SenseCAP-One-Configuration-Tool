/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const resolve = dirPath => path.join(__dirname, './', dirPath)

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'SenseCAP One Configuration Tool',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    settings: {
      entry: 'src/main-settings.js',
      template: 'public/index.html',
      filename: 'settings.html',
      title: 'SenseCAP One Configuration Tool - Settings',
      chunks: ['chunk-vendors', 'chunk-common', 'settings']
    },
    fwupdate: {
      entry: 'src/main-update.js',
      template: 'public/index.html',
      filename: 'fwupdate.html',
      title: 'SenseCAP One Configuration Tool - Firmware Update',
      chunks: ['chunk-vendors', 'chunk-common', 'fwupdate']
    },
  },
  chainWebpack: config => {
    config.module
      .rule("i18n")
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use("i18n")
        .loader("@intlify/vue-i18n-loader")
        .end();

      /** svg */
      const svgRule = config.module.rule('svg') // 找到svg-loader
      svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
      svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
      svgRule.include.add(resolve('src/icons'))
      svgRule // 添加svg新的loader处理
          .test(/\.svg$/)
          .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({
              symbolId: 'icon-[name]'
          })

      // 修改images loader 添加svg处理
      const imagesRule = config.module.rule('images')
      imagesRule.exclude.add(resolve('src/icons'))
      imagesRule.test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      /** svg end */
  },
  pluginOptions: {
    electronBuilder: {
      // List native deps here if they don't work
      externals: ['serialport'],
      // If you are using Yarn Workspaces, you may have multiple node_modules folders
      // List them all here so that VCP Electron Builder can find them
      // nodeModulesPath: ['../../node_modules', './node_modules']

      nodeIntegration: true,

      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
        'appId': 'cc.seeed.sensecap.tools.one',
        'productName': 'SenseCAP One Configuration Tool',
        'copyright': 'Copyright ©2008-2020 Seeed Technology Co.,Ltd.',
        'nsis': {
          'installerIcon': 'build/icon.ico',
          'installerHeader': 'build/icon.png',
          'installerHeaderIcon': 'build/icon.ico',
          'oneClick': false,
          'allowToChangeInstallationDirectory': true,
          'runAfterFinish': false
        },
        'win': {
          'verifyUpdateCodeSignature': false,
          'target': ['nsis', 'portable'],
          'icon': 'build/icon.ico',
        },
        'dmg': {
          'title': 'SenseCAP One Configuration Tool',
          'icon': 'build/icon.png',
          'contents': [
            {
              'x': 100,
              'y': 200
            },
            {
              'x': 400,
              'y': 200,
              'type': 'link',
              'path': '/Applications'
            }
          ],
        },
        'mac': {
          'category': 'public.app-category.developer-tools',
          'target': 'default',
          'icon': 'build/icon.png',
          "hardenedRuntime" : true,
          "gatekeeperAssess": false,
          "entitlements": "build/entitlements.mac.plist",
          "entitlementsInherit": "build/entitlements.mac.plist"
        },
        "afterSign": "scripts/notarize.js",
        "linux": {
          "target": ["AppImage", "deb"],
          "icon": "build/icon.png"
        },
        "publish": "github"
      }
    }
  }
}