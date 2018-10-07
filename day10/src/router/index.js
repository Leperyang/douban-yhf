import Vue from 'vue'
import Router from 'vue-router'
import Audio from '@/pages/audio/audio.vue'
import Book from '@/pages/book/book.vue'
import Group from '@/pages/group/group.vue'
import Home from '@/pages/home/home.vue'
import User from '@/pages/user/user.vue'
import Moive from '@/components/moive.vue'
import Readbook from '@/components/readbook.vue'
import  Tv   from'@/components/tv.vue'
import City  from'@/components/city.vue'
import  Music  from'@/components/music.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    	path: '/audio',
      component: Audio,
      children:[
      {
      	path:'',
      	component:Moive
      }
      ,
      {
      	path:'movie',
      	component:Moive
      }
      ,
      {
      	path:'readbook',
      	component:Readbook
      }
      ,
      {
      	path:'city',
      	component:City
      }
      ,
      {
      	path:'music',
      	component:Music
      }
      ,
      {
      	path:'tv',
      	component:Tv
      }
      ]
    },
    {
    	path: '/book',
      name: 'Book',
      component: Book
    },
    {
    	path: '/group',
      name: 'Group',
      component: Group
    },
    {
    	path: '/user',
      name: 'User',
      component: User
    }
  ]
})
