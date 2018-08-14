import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Skill from './views/Skill.vue'
import Works from './views/Works.vue'
import WorksDetail from './views/Works-detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }, 
    {
      path: '/skill',
      name: 'skill',
      component: Skill
    }, 
    {
      path: '/works',
      name: 'works',
      component: Works,
      children: [
        {
          path: ':id',
          name: 'worksDetail',
          component: WorksDetail
        }
      ]
    }
  ]
})
