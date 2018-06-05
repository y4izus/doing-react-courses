import React from 'react'
import { CartTableHeader } from './CartTableHeader'
import { CartTableBody } from './CartTableBody'

export const CartContent = ({ cartProducts }) => (
  <div className="cart-contents">
    <table cellSpacing="0">
      <CartTableHeader />
      <CartTableBody cartProducts={ cartProducts } />
    </table>
  </div>
)