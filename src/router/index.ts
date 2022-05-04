import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import LogIn from "../views/LogIn.vue";
import SignIn from "../views/SignIn.vue";
import Profile from "@/views/Profile.vue";
const routes = [
  {
    path: "/",
    name: "Login",
    component: LogIn,
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
