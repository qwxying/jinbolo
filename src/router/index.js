import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import News from "../views/News"
import ContactUs from "../views/ContactUs"
import JoinUs from "../views/JoinUs"
import Products from "../views/Products"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/news",
    name: "news",
    component: News
  },
  {path: '/contact_us',
    name:'contact',
    component: ContactUs

  },
  {path: '/join_us',
    name:'join',
    component: JoinUs
  },
  {
    path: "/products",
    name: "Products",
    component: Products
  }
]

const router = new VueRouter({
  routes
})

export default router
