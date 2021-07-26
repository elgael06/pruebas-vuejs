<template>
<div class="show-counter">
    <b>This is the counter:</b>
    <h1> {{count}} </h1>

    <div class="is-zero">
        <p  v-if="isZero">Count is zero!!! </p>
    </div>

</div>
</template>

<script>
import store from '../../store';

export default {
    name:'showCounter',
    computed:{
        count(){
            return store.state.countStore.count;               
        },
        isZero(){
            return store.state.countStore.isZero;
        }
    }
}

</script>

<style>
.show-counter>b{
    font-size: 30px;
    color: rgba(87, 81, 81, 0.85);
}
.is-zero{
    font-size: 22px;
    color: rgb(255, 0, 0);
    height: 50px;
}
</style>