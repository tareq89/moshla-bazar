import Vuex from 'vuex';

const createStore = () => {
		return new Vuex.Store({
			state: {
				apiBaseUrl: '',
				currentContext: {},
				categories: [],
				sidebarOpen: true,
				cartItems: [],
				currentlySelectedProductWithVariants: {}
			},
			mutations: {
				setApiBaseUrl: (state, url) => {
					state.apiBaseUrl = url;
				},
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
				setCurrentContext: (state, { context, router}) => {
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
						findNode(state.categories);
					} else if(typeof context === 'object'){
						state.currentContext = context;
					}
					if(state.currentContext.url) {
						router.push('/category/' + state.currentContext.url);
					} else {
						router.push('/');
					}
				},
				findAndSetContextByUrl: (state, url) => {
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
					findNodeByUrl(state.categories);
				},
				setExpandFlag: (state, params) => {
					function findNode(categories) {
						for(let category of categories) {
							let partialNodeId = params.nodeid.slice(0, category.nodeid.length);

							// close or expand menu if clicked in expand-close icon, don't affect other menu states

							// checking whether the current nodeid is partially matching from the beginning with the param.nodeid
							if(partialNodeId === category.nodeid) {
								// checking whether the current nodeid is exactly matching with the param.nodeid
								if(category.nodeid === params.nodeid) {
									// setting currently matched leaf nodes sibling nodes expand to false
									if((category.subcategories === undefined || category.subcategories.length == 0)) {
										for(let _category of categories) {
											_category.expand = false;
										}
									}
									category.expand = params.expand? true : !category.expand;
									if(params.closeOthers && category.subcategories && category.subcategories.length > 0) {
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
							} else if(params.closeOthers) {
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
				showMoreOptionsOfCurrentProduct: (state, item) => {					
					state.currentlySelectedProductWithVariants = item;					
				},
				hideMoreOptionsOfCurrentProduct: (state) => {
					state.currentlySelectedProductWithVariants = {};
				}
			},
			getters: {
				apiBaseUrl: (state) => {
					return state.apiBaseUrl;
				},
				categories: (state) => {
					return state.categories;
				},
				sidebarOpen: (state) => {
					return state.sidebarOpen;
				},
				currentContext: (state) => {
					return state.currentContext;
				},
				cartItems : (state) => {
					return state.cartItems;
				},
				currentlySelectedProductWithVariants: (state) => {
					return state.currentlySelectedProductWithVariants;
				}
				
			},
			actions: {
				setApiBaseUrl: (context, url) => {
					context.commit('setApiBaseUrl', url);
				},
				setCategories : (context, categories) => {
					context.commit('setCategories', categories);
				},
				setCurrentContext: (context, currentContext) => {
					context.commit('setCurrentContext', currentContext);
				},
				findAndSetContextByUrl: (context, url) => {
					context.commit('findAndSetContextByUrl', url);
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
				},
				addCartItem: (context, params) => {
					context.commit('addCartItem', params);
				},
				removeCartItem: (context, params) => {
					context.commit('removeCartItem', params);
				},
				showMoreOptionsOfCurrentProduct: (context, params) => {					
					context.commit('showMoreOptionsOfCurrentProduct', params);
				},
				hideMoreOptionsOfCurrentProduct: (context) => {
					context.commit('hideMoreOptionsOfCurrentProduct');
				}

			}
		})
	}

	export default createStore;