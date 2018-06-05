import React from 'react'
import { HeaderTitle } from './shared/HeaderTitle'
import { CheckOutForm } from './checkout/CheckOutForm'

export const Checkout = () => (
    <div className="checkout">
        <HeaderTitle title="Finalizar compra"/>
        <CheckOutForm />
    </div>
)