import * as ActionTypes from './actionTypes'
import { getProducts  } from './selectors'

export const fetchProductsSuccess = products => {
  return { type: ActionTypes.FETCH_PRODUCTS_SUCCESS, products }
}

export const fetchProductsRequest = () => {
  return { type: ActionTypes.FETCH_PRODUCTS_REQUEST }
}

export const fetchProductsFailed = () => ({ type: ActionTypes.FETCH_PRODUCTS_FAILED })


export function fetchProducts(){
  return function(dispatch, getState){
    const currentProducts = getProducts(getState())
    if(currentProducts.length){
      return
    }    
    dispatch(fetchProductsRequest())
    fetch('/data/products.json')
    .then(res => res.json())
    .then(products => {      
      setTimeout(() => dispatch(fetchProductsSuccess(products)), 2000)
      
    })
    .catch(err => dispatch(fetchProductsFailed()))
  }
}