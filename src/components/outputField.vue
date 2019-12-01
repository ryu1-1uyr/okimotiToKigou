<template>
  <div>
    おうtぷtだよ
    <div v-if="isVariable">{{replaceOutput}}</div>
    <div v-else>props: {{outputText}}</div>
  </div>
</template>

<script>
  export default {
    name: "outputField",
    props: {
      outputText: String,
      isVariable: Boolean
    },
    computed: {
      replaceOutput() {
        return this.outputText.split('__').join("-~-~-~[]").split('_').join('[...{}+[]][(-~-~[-~[]]+-~-~[-~[]])- -~[]]+[...{}+[]][-~[]]+([][\'\']+[])[-~[]]+(([]==[])+[])[(-~-~[-~[]])]+(-~[]/[]+[])[(-~-~[-~[]]+-~-~[-~[]])]+(!![]+[])[-~[]]+([][\'\']+[])[+[]]+[...{}+[]][(-~-~[-~[]]+-~-~[-~[]])- -~[]]+(!![]+[])[+[]]+[...{}+[]][-~[]]+(!![]+[])[-~[]]')
      }
    },
  }
</script>

<style scoped>

</style>