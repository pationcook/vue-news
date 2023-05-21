<template>
  <div id="App">
      <!-- 케밥 케이스 : tool-bar
           카멜 케이스 : toolBar
           파스칼 케이스 : ToolBar
           스네이크 케이스 : tool_bar
      -->
      <tool-bar></tool-bar>
      <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: { ToolBar },
  name: 'App'
}
</script>

