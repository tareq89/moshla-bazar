import Vuex from 'vuex';
import VariablesStore from './variables';
import CartStore from './cart';
import CurrentContextStore from './currentContext';
import CurrentlySelectedItemStore from './currentlySelectedItem';
import SidebarStore from './sidebar';
import CategoriesStore from './categories';

const createStore = () => {
	return new Vuex.Store({
		modules: {
			variables: VariablesStore,
			categories: CategoriesStore,
			cart: CartStore,
			currentContext: CurrentContextStore,
			CurrentlySelectedItemStore: CurrentlySelectedItemStore,
			sidebar: SidebarStore
		}
	})
}

	export default createStore;