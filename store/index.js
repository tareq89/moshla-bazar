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
				},
				setExpandFlag: (state, params) => {

					function findNode(categories) {
						for(let category of categories) {
							if(category.nodeid === params.nodeid) {
								if((category.subcategories === undefined || category.subcategories.length == 0)) {
									for(let _category of categories) {
										_category.expand = false;
									}
								}
								category.expand = params.expand? true : !category.expand;
								break;
							} else if(category.subcategories && category.subcategories.length > 0) {
								findNode(category.subcategories);
							}
						}
					}
					findNode(state.categories);
				}
			},
			getters: {
				categories : (state) => {
					return state.categories;
				}
			},
			actions: {
				setCategories : (context, categories) => {
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
							category.immediateroots.push(category.name);

							if(category.subcategories && category.subcategories.length > 0) {
								customizeCategories(category.subcategories, category.nodeid, category.immediateroots, category.url);
							}
						}
					}
					customizeCategories(categories);
					context.commit('setCategories', categories);
				},
				setCurrentContext: (context, currentContext) => {
					context.commit('setCurrentContext', currentContext);
				},
				setExpandFlag: (context, params) => {
					context.commit('setExpandFlag', params);
				}
			}
		})
	}

	export default createStore