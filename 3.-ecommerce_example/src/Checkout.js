import React, { Component } from 'react'
import { HeaderTitle } from './shared/HeaderTitle'
import { CheckOutForm } from './checkout/CheckOutForm'

export class Checkout extends Component {
   render () {
      return (
         <div className="checkout">
            <HeaderTitle title="Finalizar compra"/>
            <CheckOutForm />
         </div>
      )
   }
}