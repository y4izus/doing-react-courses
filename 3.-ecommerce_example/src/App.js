import React from 'react'
import ReactDOM from 'react-dom'
import { Catalog } from './Catalog'
import { Cart } from './Cart'
import { Checkout } from './Checkout'

const ECommerce = () => {
   return (
      <div className="shopping-cart">
         <Catalog />
         <Cart />
         <Checkout />
      </div>
   )
}

ReactDOM.render(<ECommerce />, document.getElementById('app'))