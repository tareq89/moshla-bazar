import Vuex from 'vuex';

const createStore = () => {
		return new Vuex.Store({
			state: {
				currentContext: {},
				categories: []
			},
			mutations: {       
				setCategories: (state, categories) => {
					state.categories = categories;
				},
				setCurrentContext: (state, currentContext) => {
					state.currentContext = currentContext;
				}
			},
			getters: {
				categories : (state) => {
					return state.categories;
				}
			},
			actions: {
				setCategories : (context, categories) => {
					function customizeCategories(categories, immediateRoots, initialurl) {            
						for (let category of categories) {
							let url = '';
							if(initialurl === '') {
								url = category.name;
							} else {
								url = initialurl + '-' + category.name;
							}
							category.url = url.toLowerCase().replace(' ', '-');              
							category.immediateroots = immediateRoots.slice();
							category.immediateroots.push(category.name);

							if(category.subcategories && category.subcategories.length > 0) {
								customizeCategories(category.subcategories, category.immediateroots, category.url);
							}
						}
					}
					customizeCategories(categories, [], '');
					context.commit('setCategories', categories);
				},
				setCurrentContext: (context, currentContext) => {
					context.commit('setCurrentContext', currentContext);
				}
			}
		})
	}
	
	export default createStore