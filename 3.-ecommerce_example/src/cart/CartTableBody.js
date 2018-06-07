import React from 'react'
import { connect } from "react-redux"
import { CartTableProduct } from './CartTableProduct'
import { getCartProducts, getCartTotal, addOneProductToCart, quitOneProductFromCart, deleteProductFromCart } from '../modules/cart'

export const CartTableBodyRaw = ({ cartProducts, totalPrice, onAddOneProduct, onQuitOneProduct, onDeleteProduct }) => (
  <tbody>
    { cartProducts.map( (product, index) => 
      <CartTableProduct 
          key={ product.name } 
          product={ product }
          onAddOneProduct={ () => onAddOneProduct(index, product) } 
          onQuitOneProduct={ () => onQuitOneProduct(index, product) } 
          onDeleteProduct={ () => onDeleteProduct(index, product.subtotal) }/>) }
    <tr className="summary">
      <td colSpan="4" className="total">{ totalPrice } €</td>
      <td></td>
    </tr>
  </tbody>
)

const mapStateToPropsCart = state => {
  return {
    cartProducts: getCartProducts(state),
    totalPrice: getCartTotal(state)
  }
}

const mapDispatchToPropsCart = dispatch => {
  return {
    onAddOneProduct: (index, info) => dispatch(addOneProductToCart({index, info})),
    onQuitOneProduct: (index, info) => dispatch(quitOneProductFromCart({index, info})),
    onDeleteProduct: (index, subtotal) => dispatch(deleteProductFromCart({index, subtotal}))
  }
}

export const CartTableBody = connect(
  mapStateToPropsCart,
  mapDispatchToPropsCart
)(CartTableBodyRaw)