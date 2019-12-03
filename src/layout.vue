<template>
  <div id="app">
    <Header />
    <Contents id="contents"/>
    <div>footer</div>
  </div>
</template>

<script>
  import Contents from './components/contents.vue'
  import Header from './components/header.vue'

  export default {
    name: 'layout',
    components: {
      Contents,
      Header,
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
    padding: 0;
    /*margin: 0;*/
    width: 100%;
    height: auto;
    margin-top: 60px;
  }
  .contents {
    display: flex;
  }
</style>
