const VariablesStore = {
    state: {
        apiBaseUrl: ''
    },
    mutations: {
        setApiBaseUrl: (state, url) => {
            state.apiBaseUrl = url;
        }
    },
    getters: {
        apiBaseUrl: (state) => {
            return state.apiBaseUrl;
        }
    },
    actions: {
        setApiBaseUrl: (context, url) => {
            context.commit('setApiBaseUrl', url);
        }
    }
}

export default VariablesStore;