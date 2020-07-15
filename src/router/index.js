import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Shopcart = () => import('../views/cart/ShopCart')
const Profile = () => import('../views/profile/Profile')
Vue.use(Router)
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/Home',
    component:Home
  },
  {
    path:'/Category',
    component:Category
  },
  {
    path:'/Shopcart',
    component:Shopcart
  },
  {
    path:'/Profile',
    component:Profile
  }
]
export default new Router({
  routes: routes,
  mode:'history'
})
