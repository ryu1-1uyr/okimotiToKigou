<template>
  <div id="app">
    <div>Header</div>
    <Contents />
    <div>footer</div>
  </div>
</template>

<script>
import Contents from './components/contents.vue'
import Input from './components/input.vue'
import Output from './components/output.vue'

export default {
  name: 'layout',
  components: {
    Contents,
    Input,
    Output
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
