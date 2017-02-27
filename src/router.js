import Vue from 'vue'
import Router from 'vue-router'
import NotFound from 'components/NotFound'
import Home from 'components/Home'
import SetReporter from 'components/SetReporter'
import ListReporter from 'components/ListReporter'
import DefineReporter from 'components/DefineReporter'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //     path: '/login',
    //     component: Login,
    //     name: '',
    //     hidden: true
    // },
    {
        path: '/404',
        component: NotFound,
        name: '404',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: 'Home',
        children: [
            { path: '/ListReporter', component: ListReporter, name: 'ListReporter'},
            { path: '/SetReporter', component: SetReporter, name: 'SetReporter' },
            { path: '/DefineReporter', component: DefineReporter, name: 'DefineReporter' }
        ]
    }
  ]
})
