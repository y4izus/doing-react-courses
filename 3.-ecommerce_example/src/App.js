import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Catalog } from './Catalog'
import { Cart } from './Cart'
import { Checkout } from './Checkout'
import { ADD_PRODUCT_TO_CART, ADD_ONE_PRODUCT_TO_CART, QUIT_ONE_PRODUCT_FROM_CART, DELETE_PRODUCT_FROM_CART } from './actionTypes'

const reducer = (state, action) => {
    switch(action.type){
        case ADD_PRODUCT_TO_CART: return console.log(`add product with id: ${action.id}`)
        case ADD_ONE_PRODUCT_TO_CART: return console.log(`add one product to cart with id: ${action.id}`)
        case QUIT_ONE_PRODUCT_FROM_CART: return console.log(`quit one product from cart with id: ${action.id}`)
        case DELETE_PRODUCT_FROM_CART: return console.log(`delete product from cart with id: ${action.id}`)
        
        default: return state
    }
}

const addProductToCart = id => { return { type: ADD_PRODUCT_TO_CART, id } }
const addOneProductToCart = id => { return { type: ADD_ONE_PRODUCT_TO_CART, id } }
const quitOneProductFromCart = id => { return { type: QUIT_ONE_PRODUCT_FROM_CART, id } }
const deleteProductFromCart = id => { return { type: DELETE_PRODUCT_FROM_CART, id } }


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
        <Catalog products={ products } onAddProductToCart={ id => store.dispatch(addProductToCart(id)) }/>
        <Cart 
            cartProducts={ cartProducts } 
            onAddOneProduct={ id => store.dispatch(addOneProductToCart(id)) } 
            onQuitOneProduct={ id => store.dispatch(quitOneProductFromCart(id)) } 
            onDeleteProduct={ id => store.dispatch(deleteProductFromCart(id)) }/>
        <Checkout />
    </div>
)

ReactDOM.render(<ECommerce />, document.getElementById('app'))