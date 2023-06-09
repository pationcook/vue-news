<template>
  <div>
    <input type="checkbox" :value="value" @click="this.togleCheck">
  </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            required: true,
        }
    },
    methods: {
        toggleCheck(){
            this.$emit('input',!this.value);
        }
    }
}
</script>

<style>

</style>