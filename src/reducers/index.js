import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import Products from './products';
import ProductPage from './products-page';
import ProductPageInfo from './product-page-info';
import Cart from './cart';
import Categories from './categories';

export default combineReducers({
    routing: routerReducer,
    Products,
    ProductPage,
    ProductPageInfo,
    Cart,
    Categories
});