const CurrentlySelectedItemStore = {
    state: {
        currentlySelectedProductWithVariants: {}
    },
    mutations: {
        showMoreOptionsOfCurrentProduct: (state, item) => {					
            state.currentlySelectedProductWithVariants = item;					
        },
        hideMoreOptionsOfCurrentProduct: (state) => {
            state.currentlySelectedProductWithVariants = {};
        }
    },
    getters: {
        currentlySelectedProductWithVariants: (state) => {
            return state.currentlySelectedProductWithVariants;
        }		
    },
    actions: {
        showMoreOptionsOfCurrentProduct: (context, params) => {					
            context.commit('showMoreOptionsOfCurrentProduct', params);
        },
        hideMoreOptionsOfCurrentProduct: (context) => {
            context.commit('hideMoreOptionsOfCurrentProduct');
        }
    }
}

export default CurrentlySelectedItemStore;