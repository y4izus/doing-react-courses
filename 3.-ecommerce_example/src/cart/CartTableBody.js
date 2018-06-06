import React from 'react'
import { connect } from "react-redux"
import { CartTableProduct } from './CartTableProduct'
import { 
  ADD_ONE_PRODUCT_TO_CART,
  QUIT_ONE_PRODUCT_FROM_CART,
  DELETE_PRODUCT_FROM_CART } 
from "./../actionTypes"

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
    cartProducts: state.cartProducts,
    totalPrice: state.totalPrice
  }
}

const mapDispatchToPropsCart = dispatch => {
  return {
    onAddOneProduct: (index, info) => dispatch(addOneProductToCart({index, info})),
    onQuitOneProduct: (index, info) => dispatch(quitOneProductFromCart({index, info})),
    onDeleteProduct: (index, subtotal) => dispatch(deleteProductFromCart({index, subtotal}))
  }
}

const addOneProductToCart = product => {
  return { type: ADD_ONE_PRODUCT_TO_CART, product }
}
const quitOneProductFromCart = product => {
  return { type: QUIT_ONE_PRODUCT_FROM_CART, product }
}
const deleteProductFromCart = product => {
  return { type: DELETE_PRODUCT_FROM_CART, product }
}

export const CartTableBody = connect(
  mapStateToPropsCart,
  mapDispatchToPropsCart
)(CartTableBodyRaw)