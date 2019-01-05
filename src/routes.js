import Vue from 'vue'
import Router from 'vue-router'
import Lista from './components/Lista.vue'
import Detalhes from './components/Detalhes.vue'
Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'Lista',
            component: Lista
        },
        {
            path: '/detalhes/:id',
            name: 'Detalhes',
            component: Detalhes
        }
    ],
    mode: "history"
})