import React from 'react'
import ReactDOM from 'react-dom'
import { Catalog } from './Catalog'
import { Cart } from './Cart'

const ECommerce = () => {
   return (
      <div className="shopping-cart">
         <Catalog />
         <Cart />
      </div>
   )
}

ReactDOM.render(<ECommerce />, document.getElementById('app'))