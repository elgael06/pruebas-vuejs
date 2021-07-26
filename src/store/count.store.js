

export const countStore = {
    namespaced: true,
    state:{
        count:0,
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
            if(state.count > 0 ) 
                state.count--;
        }
    }
} 