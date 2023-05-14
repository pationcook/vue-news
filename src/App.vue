<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <div id="App">
      <!-- url이 만약 jobs-->
      뷰 테스트
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  method : {
    fetchData() {
      console.log('hellow world')
    },
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
