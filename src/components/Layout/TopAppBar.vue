
<template>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    <p>count: {{count}} </p>
    </div>
</template>

<script>
import store from '../../store';

export default {
    computed:{
        count(){
            return store.state.countStore.count;               
        }
    }
}
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #3230c4;
}
</style>