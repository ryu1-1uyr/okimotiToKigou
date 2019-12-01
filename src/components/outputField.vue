<template>
  <div>
    おうtぷtだよ
    <div>props: {{outputText}}</div>
  </div>
</template>

<script>
  export default {
    name: "outputField",
    props: {
      outputText: String,
    }
  }
</script>

<style scoped>

</style>