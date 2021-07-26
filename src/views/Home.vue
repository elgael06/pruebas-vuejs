<template>
  <div class="home">
    <h1>this is the home page </h1>
    <button v-on:click="increment">agregar</button>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'Home',
  components: {
  },
  methods:{
    increment(){
      store.dispatch('countStore/add')
    }
  }
}
</script>
