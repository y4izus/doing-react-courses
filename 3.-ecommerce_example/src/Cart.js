import React from 'react'
import { HeaderTitle } from './shared/HeaderTitle'
import { CartContent } from './cart/CartContent'

export const Cart = props => (
    <div className="cart">
        <HeaderTitle title="Tu compra"/>
        <CartContent { ...props } />
        <div className="footer">
            <a className="button">Seguir comprando</a>
            <a className="button">Finalizar compra</a>
        </div>
    </div>
)