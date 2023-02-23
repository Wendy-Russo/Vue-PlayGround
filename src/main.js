import { createApp } from 'vue'
import App from './App.vue'
/* import router from './router' */
import Home from './components/HelloWorld.vue';
import AboutMe from "./components/AboutMe.vue";
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/AboutMe', component: AboutMe }
  ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')