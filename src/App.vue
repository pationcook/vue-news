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
        <router-view  @loading-start="loadingChange" @loading-end="loadingChange"></router-view> 
      </transition>
      <loading-spinner :loading="loadingStatus"></loading-spinner>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';

export default {
  data() {
      return {
          loadingStatus : true,
      }
  },
  components: { ToolBar , LoadingSpinner},
  name: 'App',
  created() {
  },
  methods: {
      //에밋으로 로딩 스타트와 엔드를 실행 시키게 되면 로딩 체인지를 실행하게끔 연결해 놨다.
      loadingChange(payload) {
          this.loadingStatus = payload.loading;
      },
  },
}
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
}
a {
  text-decoration: none;
}
a:hover{
  color:blueviolet
}
a.router-link-exact-active {
  text-decoration: underline;
}
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
