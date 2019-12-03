<template>
  <div id="footer">
    <p>つくったひと <a href="https://twitter.com/Ryu1__1uyR" target="_blank">りゅう</a> </p>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  div{
    color: #bfbbd0;
  }
  #footer{
    margin: 0;
    padding: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100px;
    background: #2c3e50;
    border-radius: 0 30px 0 0;
  }
  a {
    color: #a0d0a7;
    text-decoration: none;
    display: inline-block;
  }

  a:hover{
    animation: buru .1s  infinite;
  }

  @keyframes buru {
    0% {transform: translate(0px, 0px) rotateZ(0deg)scale(1) }
    25% {transform: translate(4px, 4px) rotateZ(5deg)scale(1.4)}
    50% {transform: translate(0px, 4px) rotateZ(0deg)scale(1)}
    75% {transform: translate(4px, 0px) rotateZ(-5deg)scale(1.5)}
    100% {transform: translate(0px, 0px) rotateZ(0deg)scale(0.5)}
  }
</style>