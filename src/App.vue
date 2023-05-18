<template>
  <div id="App">
      <!-- url이 만약 jobs-->
      뷰 테스트
      <tool-bar></tool-bar>
      <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: { ToolBar },
  name: 'App',
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
