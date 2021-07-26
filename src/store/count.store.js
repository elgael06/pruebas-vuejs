

export const countStore = {
    namespaced: true,
    state:{
        count:0,
      },
      actions:{
        add({commit}){
          commit('increment');
        },
        remove({commit}){
          commit('decrement');
        }
      },
      mutations:{
        increment(state){
            console.log('count increnent')
          state.count++;
        },
        decrement(state){
            console.log('count decrement')
          state.count--;
        }
    }
} 