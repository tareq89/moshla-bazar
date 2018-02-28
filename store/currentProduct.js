const CurrentProductStore = {
    state: {
        currentProduct: {}
    },
    mutations: {
        setCurrentProduct: (state, item) => {					
            state.currentProduct = item;					
        },
        unsetCurrentProduct: (state) => {
            state.currentProduct = {};
        }
    },
    getters: {
        currentProduct: (state) => {
            return state.currentProduct;
        }		
    },
    actions: {
        setCurrentProduct: (context, params) => {					
            context.commit('setCurrentProduct', params);
        },
        unsetCurrentProduct: (context) => {
            context.commit('unsetCurrentProduct');
        }
    }
}

export default CurrentProductStore;