

export const countStore = {
    namespaced: true,
    state:{
        count:0,
        isZero:false
      },
      actions:{
        add({commit},value){
          commit('increment',value);
        },
        remove({commit},value){
          commit('decrement',value);
        }
      },
      mutations:{
        increment(state,value){
            console.log('count increnent',value)
          state.count++;
        },
        decrement(state,value){
            console.log('count decrement',value)
            if(state.count >= 1 ) 
                state.count-=1;
            else {
                state.isZero = true;
                setTimeout(()=>{
                    state.isZero = false;
                }, 500);
            }
        }
    }
} 