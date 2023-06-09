<template>
  <header> {{ title }} </header>
  <div v-html="this.description"></div>
  <div><br/></div>
</template>

<script>
export default {
    props: {
        title: String,
        description: {
            type: String,
        }
    }
}
</script>

<style>

</style>