import React from 'react'
import { CartTableProduct } from './CartTableProduct'

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

export const CartTableBody = ({ cartProducts, totalPrice, onAddOneProduct, onQuitOneProduct, onDeleteProduct }) => (
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