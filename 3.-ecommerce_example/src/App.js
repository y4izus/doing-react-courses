import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Catalog } from './Catalog'
import { Cart } from './Cart'
import { Checkout } from './Checkout'

class ECommerce extends Component {
    constructor () {
        super()
        this.state = {
            cartProducts: [{
                id: 1,
                name: 'iPhone 6',
                description: 'Grandote pero chulo',
                price: 2,
                subtotal: 2,
                qty: 1
             },
             {
                id: 2,
                name: 'Nexus 7',
                description: 'El mejor Android de la historia.',
                price: 2,
                subtotal: 2,
                qty: 1
             },
             {
                id: 3,
                name: 'Feberphone',
                description: 'Dale a tu nene el Feber, no te vaya a romper el de verdad.',
                price: 4,
                subtotal: 4,
                qty: 1
             },
             {
                id: 4,
                name: 'Woodyphone',
                description: 'En madera reciclada. Cero potencia, todo conciencia.',
                price: 4,
                subtotal: 4,
                qty: 1
             }
          ]
        }
    }

    render () {
        return (
            <div className="shopping-cart">
                <Catalog />
                <Cart cartProducts={ this.state.cartProducts }/>
                <Checkout />
            </div>
        )
    }
}

ReactDOM.render(<ECommerce />, document.getElementById('app'))