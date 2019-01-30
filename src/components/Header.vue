<template>
  <header>
    <router-link to="/"><img v-bind:src="img"></router-link>
  </header>
</template>

<script>
export default {
  data () {
    return {
      img: 'https://cdn.cefis.com.br/assets/images/site/svg/logo-cefis.svg',
    }
  },
}
</script>

<style lang='scss' scoped>
header {
  background-color: #8a8a8a;
  img {
    height: 60px;
    padding: 15px;
  }
}
</style>
