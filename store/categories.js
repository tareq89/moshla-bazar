const CategoriesStore = {
    state: {
        categories: [],		
    },
    mutations: {
        setCategories: (state, categories) => {
            function customizeCategories(categories, initialIndex = 0, immediateRoots = [], initialurl = '') {
                for (let index in categories) {
                    let category = categories[index];
                    let url = '';
                    if(initialurl === '') {
                        url = category.name;
                    } else {
                        url = initialurl + '-' + category.name;
                    }
                    category.nodeid = initialIndex + index;
                    category.expand = false;
                    category.url = url.toLowerCase().replace(' ', '-');
                    category.immediateroots = immediateRoots.slice();
                    category.immediateroots.push({ name :category.name, nodeid: category.nodeid });

                    if(category.subcategories && category.subcategories.length > 0) {
                        customizeCategories(category.subcategories, category.nodeid, category.immediateroots, category.url);
                    }
                }
            }
            customizeCategories(categories);
            state.categories = categories;
        },		
        closeAllMenue: (state) => {
            function keepClosing(categories) {
                for(let category of categories) {
                    category.expand = false;
                    if(category.subcategories && category.subcategories.length > 0) {
                        keepClosing(category.subcategories);
                    }
                }
            }
            keepClosing(state.categories);
        }
    },
    getters: {
        categories: (state) => {
            return state.categories;
        },
    },
    actions: {
        setCategories : (context, categories) => {
            context.commit('setCategories', categories);
        },	
        closeAllMenue: (context) => {            
            context.commit('closeAllMenue');
        },
    }
}

export default CategoriesStore;