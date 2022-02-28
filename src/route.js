import HomeComp from "./components/HomeComp.vue";
import SignUp from "../src/components/SignUp.vue";
import LogInComp from './components/LogInComp.vue'
import { createRouter,createWebHistory } from "vue-router";



const routes = [
  {
    name:'Home',
    component: HomeComp,
    path: '/home',
  },
  {
    name:'SignUp',
    component: SignUp,
    path: '/',
  },
  {
    name:'LogIn',
    component: LogInComp,
    path: '/login',
  },
];

const router = createRouter({
  history:createWebHistory(),
  routes
});

export default router;
