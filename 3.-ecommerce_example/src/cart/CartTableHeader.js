import React, { Component, Fragment } from 'react'

export class CartTableHeader extends Component {
   render () {
      return (
         <Fragment>
            <thead>
               <tr>
                  <th className="qty">Cant</th>
                  <th className="description">Product</th>
                  <th className="unit-price">Price</th>
                  <th className="subtotal">Total</th>
                  <th className="actions"></th>
               </tr>
            </thead>
         </Fragment>
      )
   }
}