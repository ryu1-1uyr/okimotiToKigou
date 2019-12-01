<template>
  <div>
    いんぷtだよ
    <div>props: {{inputText}}</div>
    <textarea v-model="tmp" v-on:keyup="onChangeInput" name="inputs" id="input" cols="100" rows="10"></textarea>
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

</style>