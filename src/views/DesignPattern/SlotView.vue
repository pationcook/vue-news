<template>
  <div>
    <app-header :title="title" :description=description></app-header>
    <ul>
        <item-component style="color:red;"><h3>컴포넌트 1 (여기는 상위 영역)</h3></item-component>
        <item-component style="color:blue;"><button>컴포넌트 2 (여기는 상위 영역)</button></item-component>
        <item-component style="color:green;"><input placeholder="컴포넌트 3 (여기는 상위 영역)"></item-component>
        <item-component style="color:yellow;">컴포넌트 4 : 상위영역에서 style 지정함(여기는 상위 영역)</item-component>
        <item-component>컴포넌트 5 (여기는 상위 영역)</item-component>
    </ul>
  </div>
</template>

<script>
import ItemComponent from '@/components/DesignPattern/SlotDesign.vue';
import AppHeader from '@/components/Common/PatternHeader.vue';

export default {
    data(){
      return{
        title : 'slot패턴 <slot>을이용',
        description : 'slot을 이용하여 여러콤퍼넌트들을 셋하는 방식을 말함',
      }
    }, 
    components: {
        ItemComponent,
        AppHeader
    }
}
</script>

<style>

</style>