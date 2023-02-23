<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <nav>
    <router-link class="lgt rd shadow-both-sm border-top" to="/">Home</router-link>
    <router-link class="border-top shadow-both-sm rd lgt" to="/AboutMe">About Me</router-link>
  </nav>
  
  <router-view></router-view>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
};
</script>

<style>

.rd{
  border-radius: 1rem;
}

.lgt{
  background-color: rgba(255,255,255,0.1);
} 

.shadow-in{
  box-shadow: inset rgba(0,0,0,0.2) 0rem 0rem 0.5rem;
}

.shadow-out{
  box-shadow: rgba(0,0,0,0.2) 0rem 0rem 0.5rem;
}

.shadow-both{
  box-shadow: inset rgba(0,0,0,0.2) 0rem 0.25rem 0.5rem, rgba(0,0,0,0.2) 0rem 0.25rem 0.5rem;
}

.shadow-both-sm{
  box-shadow: inset rgba(0,0,0,0.1) 0rem 0.125rem 0.25rem, rgba(0,0,0,0.1) 0rem 0.125rem 0.25rem;
}

.border-top{
  border-top: solid 1px rgba(255,255,255,0.15);
  border-left: solid 1px rgba(255,255,255,0.10);
  border-right: solid 1px rgba(255,255,255,0.10);
  border-bottom: solid 1px rgba(255,255,255,0.05);
}

.border-top-sm{
  border-top: solid 1px rgba(255,255,255,0.10);
  border-left: solid 1px rgba(255,255,255,0.05);
  border-right: solid 1px rgba(255,255,255,0.05);
  border-bottom: solid 1px rgba(255,255,255,0.025);
}

nav{
  display: flex;
  gap: 2rem ;
  justify-content: center;
  
}

nav a{
  text-decoration: none;
  color: white;
  padding: .25rem 1rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}

body{
  background-color: #172b36;
}
</style>

