import { combineReducers } from 'redux';

import { productListReducer } from './Reducers/productReducers';



const rootReducer = combineReducers({
    productList:productListReducer

});

export default rootReducer;
