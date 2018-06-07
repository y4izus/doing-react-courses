import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderTitle } from './shared/HeaderTitle'
import { CartContent } from './cart/CartContent'

export const Cart = () => (
  <div className="cart">
    <HeaderTitle title="Tu compra"/>
    <CartContent />
    <div className="footer">
      <Link to='/'>
        <button className="button">Seguir comprando</button>
      </Link>
      <Link to='/checkout'>
        <button className="button">Finalizar compra</button>
      </Link>
    </div>
  </div>
)