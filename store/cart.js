const CartStore = {
    state: {
        cartItems: [],
        cartOpen: false,
    },
    mutations: {
        toggleCart: (state, toggle) => {
            state.cartOpen = toggle;
        },
        setCartItems: (state, cartItems) => {
            state.cartItems = cartItems;
        },
        addCartItem: (state, item) => {
            let isItemNew = true;
            for(let existingItem of state.cartItems) {
                if(existingItem.id === item.id) {
                    existingItem.amount += 1;
                    existingItem.totalPrice = existingItem.amount * existingItem.price;
                    isItemNew = false;
                }
            }
            if(isItemNew) {
                item.amount = 1;
                item.totalPrice = item.amount * item.price;
                state.cartItems.push(item);
            }
        },
        removeCartItem: (state, {item, remove}) => {
            for(let index in state.cartItems) {
                let existingItem = state.cartItems[index];
                if(existingItem.id === item.id) {
                    if(remove) {
                        state.cartItems.splice(index, 1);
                    } else if(existingItem.amount === 1) {
                        break;
                    } else {
                        state.cartItems[index].amount -= 1;
                        state.cartItems[index].totalPrice = state.cartItems[index].amount * state.cartItems[index].price;
                    }
                }
            }
        },
    },
    getters: {
        cartItems: (state) => {
            return state.cartItems;
        },
        cartOpen: (state) => {
            return state.cartOpen;
        } 
    },
    actions: {
        toggleCart: (context, toggle) => {
            context.commit('toggleCart', toggle);
        },
        addCartItem: (context, params) => {
            context.commit('addCartItem', params);
        },
        removeCartItem: (context, params) => {
            context.commit('removeCartItem', params);
        },
        setCartItems: (context, params) => {            
            if(context.state.cartItems.length == 0) {
                context.commit('setCartItems', params);
            }
        }
    }
}

export default CartStore;