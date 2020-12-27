<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  padding: 10px;
  /* this makes padding included inside height/width */
  box-sizing: border-box;
  margin: 0px;
  height: 100%;
}
</style>
