import { combineReducers } from 'redux';
import ProductsReducer from './reducer_products'
import ActiveFilterReducer from './reducer_active_filter'

const rootReducer = combineReducers({
	products: ProductsReducer,
	activeFilter: ActiveFilterReducer
});

export default rootReducer;
