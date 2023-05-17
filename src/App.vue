<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <div id="App">
      <!-- url이 만약 jobs-->
      뷰 테스트
      <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from '/components/ToolBar.vue';

export default {
  name: 'App',
  components : ToolBar,
  method : {
    fetchData() {
      console.log('hellow world')
    },
    test(){
      this.test();
      console.log('test');
    }
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
