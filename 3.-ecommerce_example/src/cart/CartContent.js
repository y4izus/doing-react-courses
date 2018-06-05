import React from 'react'
import { CartTableHeader } from './CartTableHeader'
import { CartTableBody } from './CartTableBody'

export const CartContent = props => (
  <div className="cart-contents">
    <table cellSpacing="0">
      <CartTableHeader />
      <CartTableBody { ...props } />
    </table>
  </div>
)