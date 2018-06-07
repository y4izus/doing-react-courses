import { RECEIVE_PRODUCTS } from './actionTypes'

export const receiveProducts = products => {
  return { type: RECEIVE_PRODUCTS, products }
}