import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home")
  },

  // {
  //   path: "/AllProperty",
  //   alias: "/AllProperty",
  //   name: "AllProperty",
  //   component: () => import("./components/AllProperty")
  // },
  
  {
    path: "/login",
    alias: "/login",
    name: "login",
    component: () => import("./components/Login")
  },
  {
    path: "/about",
    alias: "/about",
    name: "about",
    component: () => import("./components/About")
  },
  {
    path: "/services",
    alias: "/services",
    name: "services",
    component: () => import("./components/Services")
  },
  {
    path: "/Contactus",
    alias: "/Contactus",
    name: "Contactus",
    component: () => import("./components/Contactus")
  },
  {
    path: "/Buyproperty",
    alias: "/Buyproperty",
    name: "Buyproperty",
    component: () => import("./components/Buyproperty")
  },
  {
    path: "/Rentproperty",
    alias: "/Rentproperty",
    name: "Rentproperty",
    component: () => import("./components/Rentproperty")
  },
  {
    path: "/Propertydetails",
    alias: "/Propertydetails",
    name: "Propertydetails",
    component: () => import("./components/Propertydetails")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;