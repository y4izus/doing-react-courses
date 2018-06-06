import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Catalog } from './Catalog'
import { Cart } from './Cart'
import { Checkout } from './Checkout'
import { reducer } from './reducers'

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
