<template>
  <div>
    <a class="tweet" :href="'https://twitter.com/intent/tweet?text='+twitter+'&hashtags=kuso_app_2019'" target="_blank">ついーとするためのボタン</a>
  </div>
</template>

<script>
  export default {
    name: "tweetButton",
    props:{
      tweetText: String
    },
    computed:{
      twitter(){
        console.log(encodeURI(this.tweetText).split('+').join("%2B"))
        return encodeURI(this.tweetText).split('+').join("%2B")
      }
    }
  }
</script>

<style scoped>
  .tweet{
    background: #3bb4d0;
  }
</style>