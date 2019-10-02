import Vue from 'vue'
import Router from 'vue-router'
import VueScrollTo from 'vue-scrollto'

import Loyaut from './Loyaut'
import Home from './views/Home'
import Features from './views/Features'

Vue.use(Router);

export default new Router({
  // mode: 'hash',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'loyaut',
      component: Loyaut

    },
    {
      path: '/features',
      name: 'features',
      component: Features
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About')
    },
    {
      path: '/video',
      name: 'video',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Video')
    },
    {
      path: '/clients',
      name: 'clients',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Clients')
    },
    {
      path: '/screenshots',
      name: 'screenshots',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Screenshots')
    },
    {
      path: '/pricing',
      name: 'pricing',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Pricing')
    },
    {
      path: '/download',
      name: 'download',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Download')
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Contact')
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      VueScrollTo.scrollTo(to.hash, 700);
      return { selector: to.hash }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
  }


/*
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
                // , offset: { x: 0, y: 10 }
            }
        }
    }*/
})
