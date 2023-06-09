<template>
  <pattern-header :title="title" :description="description"></pattern-header>
  <controlled-design :v-model="checked"></controlled-design>
</template>

<script>
import ControlledDesign from '@/components/DesignPattern/ControlledDesign.vue';
import PatternHeader from '@/components/Common/PatternHeader.vue';

export default {
  components: {
    ControlledDesign,
    PatternHeader
  },
  data(){
    return{
      title: '컨트롤 디자인',
      description: '일반적인 방식과 비슷하나 v-model을 사용한 양방향 바인딩이 핵심이다.'
      + '사실 잘 모르겠음. 강의에서 말하길래 써놨고 의심해야됨.',
      checked:  false,
    }
  }
}
</script>

<style>

</style>