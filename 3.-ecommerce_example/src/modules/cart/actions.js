import { ADD_ONE_PRODUCT_TO_CART, QUIT_ONE_PRODUCT_FROM_CART, DELETE_PRODUCT_FROM_CART, ADD_PRODUCT_TO_CART } from "./actionTypes";

export const addOneProductToCart = product => {
  return { type: ADD_ONE_PRODUCT_TO_CART, product }
}
export const quitOneProductFromCart = product => {
  return { type: QUIT_ONE_PRODUCT_FROM_CART, product }
}
export const deleteProductFromCart = product => {
  return { type: DELETE_PRODUCT_FROM_CART, product }
}

export const addProductToCart = product => {
  return { type: ADD_PRODUCT_TO_CART, product }
}
