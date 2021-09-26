import { combineReducers } from 'redux';
import { cartReducer } from './Reducers/cartReducers';

import { productListReducer } from './Reducers/productReducers';



const rootReducer = combineReducers({
    productList:productListReducer,
    cartList:cartReducer

});

export default rootReducer;
