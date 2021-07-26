
<template>
<div>
    <show-counter />
    <buttons-counter />
</div>
</template>

<script>
import ButtonsCounter from '../components/Counter/ButtonsCounter.vue';
import ShowCounter from '../components/Counter/ShowCounter.vue';

export default {
    name:'counter',
    components: { ShowCounter, ButtonsCounter },
    mounted(){
        console.log('counter')
    }
    
}
</script>