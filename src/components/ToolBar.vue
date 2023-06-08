<template>
    <div v-id class="header">
        <div>
        <router-link to="/ask"> ASK  </router-link> |
        <router-link to="/jobs">JOBS </router-link> |
        <router-link to="/news">NEWS </router-link> |
        <router-link to="/chart">Chart </router-link> | 
        
            <span>&nbsp;디자인패턴들 : </span>
            <router-link to="/common">일반적인패턴 </router-link> ,
            <router-link to="/slot">슬롯을이용한패턴 </router-link> ,
            <router-link to="/controlled">Controlled </router-link> ,
            <router-link to="/renderless">RenderLess </router-link> 
        </div>

    </div>    
</template>

<script>
export default {
}
</script>




<!-- scope 는 vue - loader 에서 제공해주는 기능으로  원래 css는 하위로 계속 타고타고 내려가져 영향을 받지만
     scope 옵션을 준 css 는 해당 컴포넌트에서만 적용되는 css이다. -->
<style scoped>
    .header {
        color: white;
        background-color: #42b883;
        display: flex;
        padding: 10px;
    }
    .header .router-link-active {
        color : #a75137
    }
    a {
        padding-right: 10px;
        padding-left: 10px;
        color:white
    }

</style>