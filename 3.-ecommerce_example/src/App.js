import React from 'react'
import ReactDOM from 'react-dom'
import Catalog from './Catalog'

const ECommerce = () => {
   return (
      <div className="shopping-cart">
         <Catalog />
      </div>
   )
}

ReactDOM.render(<ECommerce />, document.getElementById('app'))