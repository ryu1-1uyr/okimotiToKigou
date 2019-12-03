<template>
  <div id="header">
    <p>お気持ち to 記号！</p>
  </div>
</template>

<script>
  export default {
    name: "header"
  }
</script>

<style scoped>
  #header {
    background: #2c3e50;
    color: #d4cdd4;
    /*padding: 0;*/
    /*margin: 0;*/

    position: fixed; /* ヘッダーを固定する */
    top: 0; /* 上部から配置の基準位置を決める */
    left: 0; /* 左から配置の基準位置を決める */
    width: 100%; /* ヘッダーの横幅を指定する */
    /*height: 30px;*/
  }
</style>