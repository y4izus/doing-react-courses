import React from 'react'
import { connect } from "react-redux"
import { CartTableProduct } from './CartTableProduct'
import { 
  ADD_ONE_PRODUCT_TO_CART,
  QUIT_ONE_PRODUCT_FROM_CART,
  DELETE_PRODUCT_FROM_CART } 
from "./../actionTypes"


// export class CartTableBody extends Component {
//     constructor(props){
//         super()
//         this.state = {
//             totalPrice: props.cartProducts.reduce((acc, e) => acc + e.subtotal, 0),
//             cartProducts: props.cartProducts
//         }
//         this.handleAddOneToExistingProduct = this.handleAddOneToExistingProduct.bind(this)
//     }

//     handleAddOneToExistingProduct(cartProduct){
//         console.log(cartProduct)
//         const productIndex = this.state.cartProducts.indexOf(cartProduct)
//         console.log(this.state)
//         const totalPrice = this.state.totalPrice
//         let productSubtotal = this.state.cartProducts[productIndex]
//         productSubtotal.subtotal += productSubtotal.price
//         productSubtotal.qty += 1 
//         this.setState({ totalPrice: totalPrice + cartProduct.price, cartProducts: this.state.cartProducts })
//     }
// }

export const CartTableBodyRaw = ({ cartProducts, totalPrice, onAddOneProduct, onQuitOneProduct, onDeleteProduct }) => (
  <tbody>
    { cartProducts.map( product => 
      <CartTableProduct 
          key={ product.name } 
          product={ product }
          onAddOneProduct={ () => onAddOneProduct(product.id) } 
          onQuitOneProduct={ () => onQuitOneProduct(product.id) } 
          onDeleteProduct={ () => onDeleteProduct(product.id) }/>) }
    <tr className="summary">
      <td colSpan="4" className="total">{ totalPrice } €</td>
      <td></td>
    </tr>
  </tbody>
)

const mapStateToPropsCart = state => {
  return {
    cartProducts: state.cartProducts,
    onAddOneProduct: state.onAddOneProduct,
    onQuitOneProduct: state.onQuitOneProduct,
    onDeleteProduct: state.onDeleteProduct
  }
}

const mapDispatchToPropsCart = dispatch => {
  return {
    onAddOneProduct: id => dispatch(addOneProductToCart(id)),
    onQuitOneProduct: id => dispatch(quitOneProductFromCart(id)),
    onDeleteProduct: id => dispatch(deleteProductFromCart(id))
  }
}


const addOneProductToCart = id => {
  return { type: ADD_ONE_PRODUCT_TO_CART, id }
}
const quitOneProductFromCart = id => {
  return { type: QUIT_ONE_PRODUCT_FROM_CART, id }
}
const deleteProductFromCart = id => {
  return { type: DELETE_PRODUCT_FROM_CART, id }
}

export const CartTableBody = connect(
  mapStateToPropsCart,
  mapDispatchToPropsCart
)(CartTableBodyRaw)