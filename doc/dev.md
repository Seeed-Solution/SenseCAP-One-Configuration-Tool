# Dev Guide

## How to Add Another Slave Board

- Add description to `src/global-defines.js`, including units, misc group and main measurement group
- Add setting fields to `src/views/Settings.vue`, including Vue Compoments, form validation rules, show/hide control logic
  - Change `slaveRegs` in `src/views/Settings.vue`
  - Change `configMap` in `src/views/Settings.vue`
  - Please note that if you add a validation rule on a field expecting a number value, you MUST add the initial value as a number to the `configMap` object
- If you wanna relocate the y Axis of the plot, edit `genPlotExtendSettings` in `src/views/Home.vue`
- Don't forget to extract the string / sentences which are required to be multilingual, replace them with vue-i18n functions (`this.$t` in script context or `$t` in Vue's template context), and put the translations in the `<i18n>` section on the top of each page's Vue file



