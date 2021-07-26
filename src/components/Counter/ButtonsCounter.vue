<template>
  <div class="buttons-counter">
      <br />
    <button v-on:click="increment">agregar</button>
    <button v-on:click="remove">remover</button>
  </div>
</template>

<script>
import store from '../../store';

export default {

  methods:{
    increment(){
      store.dispatch('countStore/add',12)
    },
    remove(){
      store.dispatch('countStore/remove',10)
    }
  }
}
</script>

<style>
.buttons-counter button{
    padding: 10px;
    margin: 10px;
}
</style>