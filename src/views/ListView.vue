<template>
    <div>
        <list-item></list-item>
    </div>
</template>
<script>
import ListItem from '@/components/ListItem.vue';
//ListView.vue와 CreatedListView.js 를 이용하여
//AskView.vue와 JobsView.vue와 NewsView.vue 모두 삭제해도 된다.
export default {
    components : {
        ListItem,
    }
}
</script>