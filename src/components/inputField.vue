<template>
  <div>
    outputだよ
    <div>props: {{inputText}}</div>
  </div>
</template>

<script>
  export default {
    name: "inputField",
    props: {
      inputText: String,
    }
  }
</script>

<style scoped>

</style>