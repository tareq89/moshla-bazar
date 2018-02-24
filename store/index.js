import Vuex from 'vuex';

const createStore = () => {
		return new Vuex.Store({
			state: {
				currentContext: {},
				categories: [],
				sidebarOpen: true
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
				setCurrentContext: (state, currentContext) => {					
					if(typeof currentContext === 'string') {
						function findNode(categories) {
							for(let category of categories) {
								let partialNodeId = currentContext.slice(0, category.nodeid.length);
								if(partialNodeId === category.nodeid) {
									if(category.nodeid === currentContext) {
										state.currentContext = category;										
										break;
									} else if (category.subcategories && category.subcategories.length > 0) {
										findNode(category.subcategories);
									}
								}
							}
						}
						findNode(state.categories);
					} else if(typeof currentContext === 'object'){
						state.currentContext = currentContext;
					}
				},
				setExpandFlag: (state, params) => {					
					function findNode(categories) {						
						for(let category of categories) {
							let partialNodeId = params.nodeid.slice(0, category.nodeid.length);

							// close or expand menu if clicked in expand-close icon, don't affect other menu states
							if(partialNodeId === category.nodeid) { // checking whether the current nodeid is partially matching from the beginning with the param.nodeid
								if(category.nodeid === params.nodeid) { // checking whether the current nodeid is exactly matching with the param.nodeid
									if((category.subcategories === undefined || category.subcategories.length == 0)) { // setting currently matched leaf nodes sibling nodes expand to false
										for(let _category of categories) {
											_category.expand = false;
										}
									}
									category.expand = params.expand? true : !category.expand;									
								} else if(category.subcategories && category.subcategories.length > 0) { // since current nodeid is partially matched, so desired node must be in the subcategories
									findNode(category.subcategories);									
								}
							} else if(params.closeOthers) { // close other expanded menu if clicked on menu text
								category.expand = false;
								if(category.subcategories && category.subcategories.length > 0) {
									findNode(category.subcategories);
								}

							}
						}
					}
					findNode(state.categories);
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
					
				},
				toggleSidebar: (state) => {
					state.sidebarOpen = !state.sidebarOpen;					
				}
			},
			getters: {
				categories : (state) => {
					return state.categories;
				},
				sidebarOpen: (state) => {
					return state.sidebarOpen;
				},
				currentContext: (state) => {
					return state.currentContext;
				}
			},
			actions: {
				setCategories : (context, categories) => {					
					context.commit('setCategories', categories);
				},
				setCurrentContext: (context, currentContext) => {
					context.commit('setCurrentContext', currentContext);
				},
				setExpandFlag: (context, params) => {
					context.commit('setExpandFlag', params);
				},
				setExpandFlagTrueAndSelectAndCloseOthers: (context, nodeid) => {					
					context.commit('setExpandFlag', {
						nodeid: nodeid,
						expand: true,
						closeOthers: true
					});
				},
				closeAllMenue: (context) => {
					context.commit('closeAllMenue');
				},
				toggleSidebar: (context) => {
					context.commit('toggleSidebar');
				}
			}
		})
	}

	export default createStore;