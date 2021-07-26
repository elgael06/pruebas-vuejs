<template>
  <div id="app">
    <top-app-bar></top-app-bar>
    <router-view/>
  </div>
</template>

<script>
import TopAppBar from './components/Layout/TopAppBar.vue';

export default {
  components: { TopAppBar },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
