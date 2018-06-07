import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Catalog } from './Catalog'
import { Cart } from './Cart'
import { Checkout } from './Checkout'
import { Thanks } from './Thanks'
import appReducer from './modules'
import store from './configureStore'

const ECommerce = () => (
  <Provider store={store}>
    <Router>
      <div className='shopping-cart'>
        <Route exact={true} path="/" component={Catalog} />
        <Route exact={true} path="/cart" component={Cart} />
        <Route exact={true} path="/checkout" component={Checkout} />
        <Route exact={true} path="/thanks" component={Thanks} />
      </div>
    </Router>
  </Provider> 
)

ReactDOM.render(<ECommerce/>, document.getElementById('app'))

