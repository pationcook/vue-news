import { createApp } from 'vue';
import App from './App.vue';
import { store } from './store/index.js'
import { router } from './router/index.js';
//특정 라이브러리 적용하는 방법
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import ChartPlugin from '@/plugins/ChartPlugin.js';

library.add(faEdit)
library.add(faUser)



const app = createApp(App);
   app.component('font-awesome-icon', FontAwesomeIcon);
   app
    .use(store)
    .use(router)
   
    app.use(ChartPlugin);

    
    app.mount('#app');



    


