import { combineReducers } from 'redux'
import cartReducer from './cart'
import catalogReducer from './catalog'
import { checkoutReducer } from './checkout';

export default combineReducers({
  cart: cartReducer,
  catalog: catalogReducer,
  checkout: checkoutReducer
})