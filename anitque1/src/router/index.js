import Vue from 'vue'
import Router from 'vue-router'
import index from '@/index'
import detail from '@/pages/detail'
import pages_index from '@/pages/index'
import user from '@/pages/user'
import invite from '@/pages/invite'
import miner from '@/pages/miner'
import withdrawal from '@/pages/withdrawal'

import wallet from '@/pages/wallet'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path: '/detail',
          name: 'detail',
          component: detail
        },
        {
          path: '/user',
          name: 'user',
          component: user
        },
        {
          path: '/',
          name: 'pages_index',
          component: pages_index
        },
      ]
    },
    {
      path: '/invite',
      name: 'invite',
      component: invite
    },
    {
      path: '/miner',
      name: 'miner',
      component: miner
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: wallet
    },
    {
      path: '/withdrawal',
      name: 'withdrawal',
      component: withdrawal
    }
  ]
})
