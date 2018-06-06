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

const cartProducts = [
  {
    id: 1,
    name: 'iPhone 6',
    description: 'Grandote pero chulo',
    price: 2,
    subtotal: 2,
    qty: 1
  },
  {
    id: 2,
    name: 'Nexus 7',
    description: 'El mejor Android de la historia.',
    price: 2,
    subtotal: 2,
    qty: 1
  },
  {
    id: 3,
    name: 'Feberphone',
    description: 'Dale a tu nene el Feber, no te vaya a romper el de verdad.',
    price: 4,
    subtotal: 4,
    qty: 1
  },
  {
    id: 4,
    name: 'Woodyphone',
    description: 'En madera reciclada. Cero potencia, todo conciencia.',
    price: 4,
    subtotal: 4,
    qty: 1
  }
]

const reducer = (state={cartProducts}, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      console.log(`add product: ${action.id}`)
      return state
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
