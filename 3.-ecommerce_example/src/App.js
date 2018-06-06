import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Catalog } from './Catalog'
import { Cart } from './Cart'
import { Checkout } from './Checkout'
import {
  ADD_PRODUCT_TO_CART,
  ADD_ONE_PRODUCT_TO_CART,
  QUIT_ONE_PRODUCT_FROM_CART,
  DELETE_PRODUCT_FROM_CART
} from './actionTypes'

const reducer = (state={cartProducts:[], totalPrice:0}, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return addProductToCart( state, action.product )
    case ADD_ONE_PRODUCT_TO_CART:
      console.log(`add one product to cart: ${action.id}`)
      return state
    case QUIT_ONE_PRODUCT_FROM_CART:
      console.log(`quit one product from cart: ${action.id}`)
      return state
    case DELETE_PRODUCT_FROM_CART:
      console.log(`delete product from cart: ${action.id}`)
      return state

    default:
      return state
  }
}

const addProductToCart = ( state, product ) => {
  return {
    cartProducts: [...state.cartProducts, 
      {
        id: product.id, 
        name: product.name, 
        description: product.description, 
        price: product.price,
        subtotal: product.price,
        qty: 1 
      }],
    totalPrice: state.totalPrice + product.price
  }
}

const deleteProductFromCart = ( state, product ) => {
  return {
    cartProducts: [...state.cartProducts, 
      {
        id: product.id, 
        name: product.name, 
        description: product.description, 
        price: product.price,
        subtotal: product.price,
        qty: 1 
      }]
  }
}

const store = createStore(reducer)

const ECommerce = () => (
  <Provider store={store}>
    <div className='shopping-cart'>
      <Catalog />
      <Cart />
      <Checkout />
    </div>
  </Provider>
)

ReactDOM.render( <ECommerce />, document.getElementById('app'))
