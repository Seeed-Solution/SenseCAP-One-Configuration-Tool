import Vue from 'vue'
import svgiconfont from '@/components/svgiconfont'// svg组件
/*
require.context有三个参数：
directory：说明需要检索的目录
useSubdirectories：是否检索子目录
regExp: 匹配文件的正则表达式
 */
// 全局注册
Vue.component('svg-icon', svgiconfont)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)