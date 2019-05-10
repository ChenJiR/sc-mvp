// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'
import  { AlertPlugin } from 'vux'
import TabFrame from '@/pages/TabFrame'
import Index from '@/pages/index/Index'
import Publish from '@/pages/publish/Publish'
import Mine from '@/pages/mine/Mine'
import UserInfoOption from '@/pages/mine/UserInfoOption'
import ReceiveLike from '@/pages/mine/ReceiveLike'
import ReceiveComment from '@/pages/mine/ReceiveComment'
import ArticleContent from '@/pages/Article/ArticleContent'
import SignInUp from '@/pages/index/SignInUp'

import { AjaxPlugin } from 'vux'

Vue.use(AjaxPlugin)

Vue.use(VueRouter)

Vue.use(AlertPlugin)

const routes = [
  {
    path: '/',
    component: TabFrame,
    children:[
      {
        path: '',
        component: Index,
      },
      {
        path: '/publish',
        component: Publish
      },
      {
        path: '/mine',
        component: Mine
      }
    ]
  },
  {
    path:'/UserInfoOption',
    component: UserInfoOption,
  },
  {
    path:'/ReceiveLike',
    component: ReceiveLike,
  },
  {
    path:'/ReceiveComment',
    component: ReceiveComment,
  },
  {
    path:'/ArticleContent/:id',
    component: ArticleContent,
  },
  {
    path:'/SignInUp',
    component: SignInUp,
  }
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
