import { combineReducers } from 'redux'
import cartReducer from './cart'
import catalogReducer from './catalog'


export default combineReducers({
  cart: cartReducer,
  catalog: catalogReducer
})