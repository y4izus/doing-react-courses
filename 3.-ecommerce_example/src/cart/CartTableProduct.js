import React from 'react'

export const CartTableProduct = ({ product, onAddOneProduct, onQuitOneProduct, onDeleteProduct }) => (
  <tr>
    <td className="qty">{ product.qty }</td>
    <td className="description">
      <h3>{ product.name }</h3>
      <p>{ product.description }</p>
    </td>
    <td className="unit-price">{ product.price } €</td>
    <td className="subtotal">{ product.subtotal }</td>
    <td className="actions">
      <a className="button" onClick={ onAddOneProduct }>+ 1</a>
      <a className="button" onClick={ onQuitOneProduct }>- 1</a>
      <a className="button" onClick={ onDeleteProduct }>Remove</a>
    </td>
  </tr>
)