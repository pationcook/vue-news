<template>
    <div>
        <pattern-header :title="appTitle" :description="description"></pattern-header>
        <app-content  @renew="renewItem()" :items="items"></app-content>
    </div>
</template>

<!-- 가장 기본 적인 디자인 패턴으로 에밋을 이용하여 데이터를 위로 올린 후
   , 이쪽에서 다시 하위로 데이터를 내려서 조작하는 방법이다 -->

<script>
import AppContent from '@/components/DesignPattern/CommonDesign.vue';
import PatternHeader from '@/components/Common/PatternHeader.vue';
export default {
    components: {
        AppContent,
        PatternHeader
    },
    data() {
        return {
            appTitle: '가장 일반적인 디자인 패턴 (에밋과 props를 이용)',
            description: 
                '기본 적인 디자인 패턴으로 버튼을 클릭하게 되면,'+
            '<br>하위 컴포넌트에서 에밋을 이용하여 상위의 함수에 접근 한 뒤,'+
            '<br>데이터를 조작하여 다시 하위 컴포넌트로 데이터를 내려서 조작하는 방법이다',
            items: [10, 20, 30],
        }
    },
    methods: {
        renewItem() {
            this.items = [40,50,60];
        }
    }
}
</script>

<style>

</style>