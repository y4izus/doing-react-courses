import React, { Component } from 'react'
import ActionButton from './ActionButton'
import { HeaderTitle } from './shared/HeaderTitle'
import { CartContent } from './cart/CartContent'

export class Cart extends Component {
   render () {
      return (
         <div className="cart">
            <HeaderTitle title="Tu compra"/>
            <CartContent />
            <div className="footer">
               <a className="button">Seguir comprando</a>
               <a className="button">Finalizar compra</a>
            </div>
         </div>
      )
   }
}