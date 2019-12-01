<template>
  <div>
    contentsだよ
    <InputField />
    <OutputField />
  </div>
</template>

<script>
  import InputField from './inputField.vue'
  import OutputField from './outputField.vue'

  export default {
    name: "contents",
    components: {
      InputField,
      OutputField
    }
  }
</script>

<style scoped>

</style>