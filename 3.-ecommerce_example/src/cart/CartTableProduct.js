import React, { Component } from 'react'

export class CartTableProduct extends Component {
   render () {
    const { product, handleAddOneToExistingProduct } = this.props
      
    return (
        <tr>
            <td className="qty">1</td>
            <td className="description">
                <h3>{ product.name }</h3>
                <p>{ product.description }</p>
            </td>
            <td className="unit-price">{ product.price } €</td>
            <td className="subtotal">{ product.subtotal }</td>
            <td className="actions">
                <button type="button" onClick={ () => handleAddOneToExistingProduct(product) } className="button">+ 1</button>
                <a className="button">- 1</a>
                <a className="button">Remove</a>
            </td>
        </tr>
      )
   }
}