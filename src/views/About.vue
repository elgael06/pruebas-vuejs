<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-on:click="remove">remover</button>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'about',
  methods:{
    remove(){
      store.dispatch('countStore/remove',10)
    }
  }
}
</script>
