<template>
  <div>
    <p>生成されたやつ！ <button @click="copyCode()">{{copyMassage}}</button></p>
    <div class="outputarea">
      <div v-if="isVariable">{{replaceOutput}}</div>
      <div v-else>{{outputText}}</div>
    </div>

    <TweetButton :tweetText="isReplace" style="margin-top: 50px;" />
  </div>
</template>

<script>
  import TweetButton from './tweetButton'

  export default {
    name: "outputField",
    components:{
      TweetButton
    },
    props: {
      outputText: String,
      isVariable: Boolean,
    },
    data(){
      return {
        copyMassage: 'コピーする',
      }
    },
    computed: {
      replaceOutput() {
        return this.outputText.split('__').join("-~-~-~[]").split('_').join('[...{}+[]][(-~-~[-~[]]+-~-~[-~[]])- -~[]]+[...{}+[]][-~[]]+([][\'\']+[])[-~[]]+((![])+[])[(-~-~[-~[]])]+(-~[]/[]+[])[(-~-~[-~[]]+-~-~[-~[]])]+(!![]+[])[-~[]]+([][\'\']+[])[+[]]+[...{}+[]][(-~-~[-~[]]+-~-~[-~[]])- -~[]]+(!![]+[])[+[]]+[...{}+[]][-~[]]+(!![]+[])[-~[]]')
      },
      isReplace() {
        if(this.isVariable) {
          return this.replaceOutput
        }else {
          return this.outputText
        }
      }
    },
    methods: {
      copyCode(){

        const copyText = this.$el.querySelector('.outputarea').textContent
        navigator.clipboard
          .writeText(copyText)
          .then(() => {
            this.copyMassage = 'テキストコピー完了！！'
            let a=0
            const time = setInterval (_=>{
              a++
              if(a===300){
                this.copyMassage = 'コピーする'
                clearInterval(time)
              }})
          })
          .catch(e => {
            console.error(e)
          })

        console.log('こぴー')
      }
    },
  }
</script>

<style scoped>
  .outputarea{
    border: #2c3e50 solid;
    max-width: 600px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 5px;
    border-radius: 20px;

    min-height: 300px;
  }
  button {
    background: #2c3e50;
    color: #d4cdd4;
    border-radius: 30px;
  }

  button:hover {
    animation: hoverButton 1s 0s ease-out forwards;
  }

  @keyframes hoverButton {
    from{
      background: #2c3e50;
    }
    to {
      background: #bfbbd0;
      color: #2c3e50;
    }
  }
</style>