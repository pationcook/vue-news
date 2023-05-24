<template>
  <div id="App">
      <!-- 케밥 케이스 : tool-bar
           카멜 케이스 : toolBar
           파스칼 케이스 : ToolBar
           스네이크 케이스 : tool_bar
      -->
      <tool-bar></tool-bar>
      <!-- 트랜지션 api 사용하여 부드러운 화면 전환을 가능하게 함. -->
      <transition name="page">
        <router-view></router-view> 
      </transition>
      
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: { ToolBar },
  name: 'App'
}
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
}

.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
