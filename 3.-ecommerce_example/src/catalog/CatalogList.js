import React from "react"
import { connect } from "react-redux"
import { compose, lifecycle } from 'recompose'
import { ProductListRow } from "./ProductListRow"
import { addProductToCart } from '../modules/cart'
import { getProducts, receiveProducts } from '../modules/catalog'

const CatalogListRaw = ({ products, addProductToCart }) => (
  <div className="catalog-list">
    {products.map(product => (
      <ProductListRow
        key={product.id}
        {...product}
        onAddProductToCart={() => addProductToCart(product)}
      />
    ))}
  </div>
)

const mapStateToPropsCatalog = state => {
  return { 
    products: getProducts(state)
  }
}

const mapDispatchToPropsCatalog = {
  addProductToCart,
  receiveProducts 
}


const withCatalogData = connect(
  mapStateToPropsCatalog,
  mapDispatchToPropsCatalog
)

const withFetchOnMount = lifecycle( {
  componentDidMount() {
    if(this.props.products.length === 0) {
      fetch('/data/products.json')
      .then(res => res.json())
      .then(products => this.props.receiveProducts(products))
    }
  }
})

export const CatalogList = compose(withCatalogData, withFetchOnMount)(CatalogListRaw)