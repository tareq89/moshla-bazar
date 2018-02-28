const SidebarStore = {
    state: {
        sidebarOpen: true,
    },
    mutations: {
        setExpandFlag: (state, {nodeid, expand, closeOthers, categories}) => {
            function findNode(categories) {
                for(let category of categories) {
                    let partialNodeId = nodeid.slice(0, category.nodeid.length);

                    // close or expand menu if clicked in expand-close icon, don't affect other menu states

                    // checking whether the current nodeid is partially matching from the beginning with the param.nodeid
                    if(partialNodeId === category.nodeid) {
                        // checking whether the current nodeid is exactly matching with the param.nodeid
                        if(category.nodeid === nodeid) {
                            // setting currently matched leaf nodes sibling nodes expand to false
                            if((category.subcategories === undefined || category.subcategories.length == 0)) {
                                for(let _category of categories) {
                                    _category.expand = false;
                                }
                            }
                            category.expand = expand? true : !category.expand;
                            if(closeOthers && category.subcategories && category.subcategories.length > 0) {
                                function keepClosing(categories) {
                                    for(let category of categories) {
                                        category.expand = false;
                                        if(category.subcategories && category.subcategories.length > 0) {
                                            keepClosing(category.subcategories);
                                        }
                                    }
                                }
                                keepClosing(category.subcategories);
                            }
                        // since current nodeid is partially matched, so desired node must be in the subcategories
                        } else if(category.subcategories && category.subcategories.length > 0) {
                            findNode(category.subcategories);
                        }
                    // close other expanded menu if clicked on menu text
                    } else if(closeOthers) {
                        category.expand = false;
                        if(category.subcategories && category.subcategories.length > 0) {
                            findNode(category.subcategories);
                        }

                    }
                }
            }
            findNode(categories);
        },
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen;
        },
    },
    getters: {
        sidebarOpen: (state) => {
            return state.sidebarOpen;
        },
    },
    actions: {
        setExpandFlag: (context, params) => {
            context.commit('setExpandFlag', {
                nodeid: params.nodeid,
                expand: params.expand,
                closeOthers: false,
                categories: context.rootGetters.categories
            });
        },
        setExpandFlagTrueAndSelectAndCloseOthers: (context, nodeid) => {
            context.commit('setExpandFlag', {
                nodeid: nodeid,
                expand: true,
                closeOthers: true,
                categories: context.rootGetters.categories
            });
        },
        toggleSidebar: (context) => {
            context.commit('toggleSidebar');
        },
    }
}

export default SidebarStore;