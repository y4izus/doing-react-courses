import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Catalog } from './Catalog'
import { Cart } from './Cart'
import { Checkout } from './Checkout'

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_PRODUCT': console.log(`add product with id: ${action.id}`)
        default: return state
    }
}

const store = createStore(reducer)

const products = [{
    id: 1,
    name: 'iPhone 6',
    description: 'Grandote pero chulo',
    price: 699.99
 },
 {
    id: 2,
    name: 'Nexus 7',
    description: 'El mejor Android de la historia.',
    price: 799.99
 },
 {
    id: 3,
    name: 'Feberphone',
    description: 'Dale a tu nene el Feber, no te vaya a romper el de verdad.',
    price: 899.99
 },
 {
    id: 4,
    name: 'Woodyphone',
    description: 'En madera reciclada. Cero potencia, todo conciencia.',
    price: 899.99
 }
]

const cartProducts = [{
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

const ECommerce = () => (
    <div className="shopping-cart">
        <Catalog products={ products } onProductClick={ id => store.dispatch({type: 'ADD_PRODUCT', id}) }/>
        <Cart cartProducts={ cartProducts } />
        <Checkout />
    </div>
)

ReactDOM.render(<ECommerce />, document.getElementById('app'))