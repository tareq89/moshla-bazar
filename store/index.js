import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
      state: {
        categoryTree: []
      },
      mutations: {
        push (state, newCategory) {
          state.categoryTree.push(newCategory);
        },
        pop (state) {
            state.categoryTree.pop();
        }        
      }
    })
  }
  
  export default createStore