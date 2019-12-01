<template>
  <div>
    contentsだよ
    <InputField :inputText="inputText" />
    <OutputField />
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
      TweetButtongit
    },
    data() {
      return {
        inputText: '',
        outputText: '',
      }
    }
  }
</script>

<style scoped>

</style>