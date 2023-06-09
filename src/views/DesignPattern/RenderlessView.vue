<template>
  <pattern-header :title="title" :description="description"/>
  <render-less-design v-slot="slotProps" url="http://jsonplaceholder.typicode.com/users/1">
    <div v-if="slotProps.loading">
      {{ slotProps.response }}
    </div>
    <div v-if="!slotProps.loading">
      loading....
    </div>
  </render-less-design>
</template>

<script>
import RenderLessDesign from '@/components/DesignPattern/RenderLessDesign.vue'
import PatternHeader from '@/components/Common/PatternHeader.vue'

export default {
  components: {
    RenderLessDesign,
    PatternHeader,
  },
  data(){
    return {
      title: '렌더리스 디자인 (화면이 없는 상태의 컴포넌트 디자인임.)',
      description: '해당 컴포넌트는 화면이 존재하지 않는 방법의 디자인으로, 공통 api 템플릿으로 만들때 사용하면 좋을듯 싶다.'
      +'<br/> 특이사항으로는 해당 컴포넌트 하위에서 데이터를 조작하여 상위로 올려주는 방식을 사용하였다. v-slot을 이용하여 구현',
    }
  }
}
</script>

<style></style>