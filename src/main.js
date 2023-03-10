// import { createApp } from 'vue'
// import App from './App.vue'
//
// import router from "@/router/router";
// // import VueRouter from 'vue-router'
//
// App.use(VueRouter).mount('#app')



import { createApp } from 'vue'
import App from '@/App'
// import components from '@/components/UI';
import router from "@/router/router";
import store from "@/store";
import './assets/css/style.css'


const app = createApp(App)

// components.forEach(component => {
//     app.component(component.name, component)
// })

// directives.forEach(directive => {
//     app.directive(directive.name, directive)
// })

app
    .use(router)
    .use(store)
    .mount('#app');