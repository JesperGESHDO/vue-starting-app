import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/views/StartPage.vue'
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Services from "@/views/Services.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
  ]
})
