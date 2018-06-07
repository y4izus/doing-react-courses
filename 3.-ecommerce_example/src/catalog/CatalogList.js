import React from "react"
import { connect } from "react-redux"
import { ProductListRow } from "./ProductListRow"
import { products } from './../data/products'
import { addProductToCart } from '../modules/cart'

const CatalogListRaw = ({ onAddProductToCart }) => (
  <div className="catalog-list">
    {products.map(product => (
      <ProductListRow
        key={product.id}
        {...product}
        onAddProductToCart={() => onAddProductToCart(product)}
      />
    ))}
  </div>
)

const mapStateToPropsCatalog = state => {
  return { }
}

const mapDispatchToPropsCatalog = dispatch => {
  return {
    onAddProductToCart: product => dispatch(addProductToCart(product))
  }
}

export const CatalogList = connect(
  mapStateToPropsCatalog,
  mapDispatchToPropsCatalog
)(CatalogListRaw)
