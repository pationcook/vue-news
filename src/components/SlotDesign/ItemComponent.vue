<template>
  <li>
    <slot>
    </slot>
    <h4> slot을 이용한 디자인 패턴: 여기 부터는 하위 컴포넌트 입니다</h4>
    <p>
         맨 위는 슬롯영역으로  상위 컴포넌트에서 정의되어 내려옵니다. style 속성은 상위 컴포넌트에서 적용되어 있음 
    </p>
  </li>
</template>

<script>
export default {

}
</script>

<style>

</style>