import * as ActionTypes from './actionTypes'
export * from './actions'
export * from './selectors'

const initialState = {
  products: [],
  isLoading: false,
  hasError: false
}

export default function catalogReducer(state = initialState, action ){
  switch(action.type) {
    case ActionTypes.FETCH_PRODUCTS_SUCCESS: return {
      isLoading: false, 
      products: action.products,
      hasError: false
    }
    case ActionTypes.FETCH_PRODUCTS_REQUEST: return {
      ...state,
      isLoading: true, 
    }
    case ActionTypes.FETCH_PRODUCTS_FAILED: return {
      ...state,
      hasError: true,
      isLoading: false
    }
    default: return state
  }
}