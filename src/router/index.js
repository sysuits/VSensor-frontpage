import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home'
import About from '../components/About'
import Document from '../components/Document'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Home',
      component: Home,
      redirect: '/about',
      children: [
        {
          path: '/about',
          name: 'About',
          component: About
        },
        {
          path: '/doc',
          name: 'Document',
          component: Document
        }
      ]
    }
  ]
})
