import { RECEIVE_PRODUCTS } from './actionTypes'
export * from './actions'
export * from './selectors'

export default function catalogReducer(state = [], action ){
  switch(action.type) {
    case RECEIVE_PRODUCTS: return action.products 
    default: return state
  }
}