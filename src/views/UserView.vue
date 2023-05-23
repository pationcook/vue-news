<template>
    <div>
        <div> name : {{ GET_USER_INFO.id }}</div>
        <div> karma : {{ GET_USER_INFO.karma }}</div>
        <div> created : {{ GET_USER_INFO.created }}</div>
        <div> created_time : {{ GET_USER_INFO.created_time }}</div>
    </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';
export default {

    setup() {
        
    },
    computed: {
        ...mapGetters([
            'GET_USER_INFO'
        ])
    },
    methods : {
        ...mapActions([
            'FETCH_USER'
        ])
    },
    created(){
        const userName = this.$route.params.id;
        console.log(userName);
        this.FETCH_USER(userName);
    }
}
</script>
