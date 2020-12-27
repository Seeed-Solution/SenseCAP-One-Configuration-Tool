import Vue from 'vue'
import Element from 'element-ui'
import '../element-variables.scss'
import i18n from './i18n'

Vue.use(Element, {
    size: 'mini',
    i18n: (key, value) => i18n.t(key, value)
})
