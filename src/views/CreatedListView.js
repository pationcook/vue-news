import ListView from '@/views/default/ListView.vue'
import { h } from 'vue';
export default function CreatedListView(name){
    return {
        name : name,
        created() {
            this.$emit('loading-start',{loading : true});
            this.$store.dispatch('FETCH_LIST',this.$route.name)
            .finally(() => {
                this.$emit('loading-end',{loading : false});
            });
        },
        render(){
            return h(ListView)
        }
    }
}
