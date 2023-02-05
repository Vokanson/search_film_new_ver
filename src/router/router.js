// // import Vue from 'vue'
// import router from "vue-router"
//
import App from '@/App.vue'


// // vue.use(router);
//
// let routes = [
//         {
//             path: '/',
//             name: 'App',
//             component: App
//         },
//         {
//             path: '/favorites',
//             name: 'favorites',
//             component:favorites
//         }
//
//
//     ]
// export default router;

// import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import main from "@/Components/Main.vue";
import favorites from "@/Components/favorites.vue";
// import newFavorites from "@/Components/Main.vue";



const routes = [
         {
            path: '/',
            name: 'main',
            component: main
        },
        {
            path: '/favorites',
            name: 'favorites',
            component:favorites,
            props: true
        },
    // {
    //     path: '/newFavorites',
    //     name: 'newFavorites',
    //     component:newFavorites,
    //     props: true
    // }


]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
