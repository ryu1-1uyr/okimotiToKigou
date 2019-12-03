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
    background: #0094a9;
    padding: 10px;
    border-radius: 20px;
  }

  a {
    text-decoration: none;
    color: #eef1f2;
  }
  a:hover{
    animation: hoverTweet 1s 0s ease-out forwards;
  }

  @keyframes hoverTweet {
    from{
      background: #0094a9;
    }
    to {
      background: #bfbbd0;
      color: #0094a9;
    }
  }
</style>