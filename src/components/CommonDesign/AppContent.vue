<template>
  <div>
    <div v-html="this.description"></div>
    <ul>
        <li v-for="item in items" v-bind:key="item">
            {{ item }}
        </li>
    </ul>
    <button  @click="this.$emit('renew')">renew items</button>
  </div>
</template>

<script>
export default {
    props: {
        items :{
            //props validation
            type: Array,
            required: true,
        },
        description: {
            type: String,
        }
    }
}
</script>

<style>

</style>