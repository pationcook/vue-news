<template>
    <div>
        <user-profile :info="GET_USER_INFO">
            <template v-slot:username>
                <div> {{ GET_USER_INFO.id }}</div>
            </template>
            <template v-slot:time> {{ GET_USER_INFO.created }}</template>
            <template v-slot:karma> {{ GET_USER_INFO.karma }}</template>
        </user-profile>
        <!-- <div> name : {{ GET_USER_INFO.id }}</div>
        <div> karma : {{ GET_USER_INFO.karma }}</div>
        <div> created : {{ GET_USER_INFO.created }}</div>
        <div> created_time : {{ GET_USER_INFO.created_time }}</div> -->
    </div>
</template>


<script>
import UserProfile from '@/components/UserProfile.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    components: {
        UserProfile
    },
    computed: {
        ...mapGetters([
            'GET_USER_INFO'
        ])
    },
    methods: {
        ...mapActions(
            ['FETCH_USER']
        )
    },
    created(){
        const userName = this.$route.params.id;
        this.FETCH_USER(userName);
        // this.FETCH_USER(userName);
    }
}
</script>
