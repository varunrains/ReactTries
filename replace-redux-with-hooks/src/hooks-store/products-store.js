import { initStore } from './store';

const configureStore = () => {
    const actions = {
        TOGGLE_FAV: curState => {
            return {
                products: curState.products
            };
        }
    }

    initStore();
}

export default configureStore;