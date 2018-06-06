import React from "react"
import { connect } from "react-redux"
import { ProductListRow } from "./ProductListRow"
import { ADD_PRODUCT_TO_CART } from "./../actionTypes"
import { products } from './../data/products'

const CatalogListRaw = ({ onAddProductToCart }) => (
  <div className="catalog-list">
    {products.map(product => (
      <ProductListRow
        key={product.id}
        {...product}
        onAddProductToCart={() => onAddProductToCart(product.id)}
      />
    ))}
  </div>
)

const mapStateToPropsCatalog = state => {
  console.log('state: ', state)
  return {
    onAddProductToCart: state.onAddProductToCart
  }
}

const mapDispatchToPropsCatalog = dispatch => {
  return {
    onAddProductToCart: id => dispatch(addProductToCart(id))
  }
}

const addProductToCart = id => {
  return { type: ADD_PRODUCT_TO_CART, id }
}

export const CatalogList = connect(
  mapStateToPropsCatalog,
  mapDispatchToPropsCatalog
)(CatalogListRaw)
