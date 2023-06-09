<template>
    <div>
        <list-item></list-item>
    </div>
</template>
<script>
import ListItem from '@/components/ListItem.vue'
// import ListMixin from '../mixins/ListMixin.js'

//newsView 만 mixin을 이용하여 만듬.

export default {
    components: {
        ListItem
    },
    // mixins : [ListMixin]
}
</script>