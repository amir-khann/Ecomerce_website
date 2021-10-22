import { combineReducers } from 'redux';
import { cartReducer } from './Reducers/cartReducers';

import { productListReducer, singleProductReducer } from './Reducers/productReducers';



const rootReducer = combineReducers({
    productList:productListReducer,
    product:singleProductReducer,
    cartList:cartReducer

});

export default rootReducer;
