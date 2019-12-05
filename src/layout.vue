<template>
  <div id="app">
    <Header />
    <Contents id="contents"/>
    <Footer />
  </div>
</template>

<script>
  import Contents from './components/contents.vue'
  import Header from './components/header.vue'
  import Footer from './components/footer.vue'

  export default {
    name: 'layout',
    components: {
      Contents,
      Header,
      Footer
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=M+PLUS+1p&display=swap');

  #app {
    font-family: 'M PLUS 1p', sans-serif;
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
