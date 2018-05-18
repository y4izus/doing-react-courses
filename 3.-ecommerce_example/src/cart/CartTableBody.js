import React, { Component, Fragment } from 'react'

export class CartTableBody extends Component {
   render () {
      return (
         <Fragment>
            <tbody>
               <tr>
                  <td className="qty">1</td>
                  <td className="description">
                     <h3>iPhone 6</h3>
                     <p>A wonderful yet expensive phone with many features that you'll never need</p>
                  </td>
                  <td className="unit-price">699.99 €</td>
                  <td className="subtotal">699.99 €</td>
                  <td className="actions">
                     <a className="button">+ 1</a>
                     <a className="button">- 1</a>
                     <a className="button">Remove</a>
                  </td>
               </tr>
               <tr className="summary">
                  <td colSpan="4" className="total">
                     699.99 €
                  </td>
                  <td></td>
               </tr>
            </tbody>
         </Fragment>
      )
   }
}