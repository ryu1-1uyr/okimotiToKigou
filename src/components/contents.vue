<template>
  <div>
    contentsだよ
    <InputField :inputText="inputText" />
    <OutputField :outputText="outputText" />
    <TweetButton />
  </div>
</template>

<script>
  import InputField from './inputField.vue'
  import OutputField from './outputField'
  import TweetButton from './tweetButton'

  export default {
    name: "contents",
    components: {
      InputField,
      OutputField,
      TweetButton
    },
    data() {
      return {
        inputText: 'input',
        outputText: 'output',
      }
    }
  }
</script>

<style scoped>

</style>