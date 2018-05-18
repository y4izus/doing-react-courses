import React, { Component } from 'react'
import { CartTableHeader } from './CartTableHeader'
import { CartTableBody } from './CartTableBody'

export class CartContent extends Component {
   render () {
    const { cartProducts } = this.props
    
      return (
         <div className="cart-contents">
            <table cellSpacing="0">
               <CartTableHeader />
               <CartTableBody cartProducts={ cartProducts } />
            </table>
         </div>
      )
   }
}