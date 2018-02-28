const CurrentContextStore = {
    state: {
        currentContext: {},
    },
    mutations: {
        setCurrentContext: (state, {context, router, categories}) => {
            if(typeof context === 'string') {
                function findNode(categories) {
                    for(let category of categories) {
                        let partialNodeId = context.slice(0, category.nodeid.length);
                        if(partialNodeId === category.nodeid) {
                            if(category.nodeid === context) {
                                state.currentContext = category;
                                break;
                            } else if (category.subcategories && category.subcategories.length > 0) {
                                findNode(category.subcategories);
                            }
                        }
                    }							
                }
                findNode(categories);
            } else if(typeof context === 'object'){                
                state.currentContext = context;
            }
            if(state.currentContext.url) {
                router.push('/category/' + state.currentContext.url);
            } else {
                router.push('/');
            }
        },
        findAndSetContextByUrl: (state, {url, categories}) => {            
            function findNodeByUrl(categories) {
                for(let category of categories) {
                    if(category.url === url) {
                        state.currentContext = category;
                        break;
                    } else if(category.subcategories && category.subcategories.length > 0) {
                        findNodeByUrl(category.subcategories);
                    }
                }
            }
            findNodeByUrl(categories);
        },
    },
    getters: {
        currentContext: (state) => {
            return state.currentContext;
        },
    },
    actions: {
        setCurrentContext: (context, currentContext) => {            
            context.commit('setCurrentContext', { 
                context: currentContext.context, 
                router: currentContext.router,
                categories: context.rootGetters.categories
            });
        },
        findAndSetContextByUrl: (context, url) => {            
            context.commit('findAndSetContextByUrl', {
                url: url,
                categories: context.rootGetters.categories
            });
        },
    }
}

export default CurrentContextStore;