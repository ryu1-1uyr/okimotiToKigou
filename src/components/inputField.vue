<template>
  <div>
    <div>元の文字: {{inputText}}</div>
    <textarea v-model="tmp" v-on:keyup="onChangeInput" name="inputs" id="input" cols="100" rows="10" placeholder="お気持ちを入力してね！"></textarea>
  </div>
</template>

<script>
  export default {
    name: "inputField",
    data() {
      return {
        tmp: this.inputText,
      }
    },
    props: {
      inputText: String,
    },
    methods: {
      onChangeInput(event) {
        console.log(event.target.value)
        this.$emit('input',event.target.value)
      }
    }
  }
</script>

<style scoped>
  #input {
    max-width: 300px;
    border: #2c3e50 solid;
    border-radius: 20px;
    padding: 5px;
  }
</style>