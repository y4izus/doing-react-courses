import React from "react"
import { connect } from "react-redux"
import { compose, lifecycle } from 'recompose'
import { ProductListRow } from "./ProductListRow"
import { addProductToCart } from '../modules/cart'
import { getProducts, isFetching, hasFetchError, fetchProducts } from '../modules/catalog'

const CatalogListRaw = ({ products, isFetching, hasError, addProductToCart }) => (
  <div className="catalog-list">
    { isFetching && <p>Cargando.... </p>}
    { hasError && <p>Error</p>}
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
    products: getProducts(state),
    isFetching: isFetching(state),
    hasError: hasFetchError(state)
  }
}

const mapDispatchToPropsCatalog = {
  addProductToCart,
  fetchProducts
}


const withCatalogData = connect(
  mapStateToPropsCatalog,
  mapDispatchToPropsCatalog
)

const withFetchOnMount = lifecycle( {
  componentDidMount() {        
    this.props.fetchProducts()    
  }
})

const withCatalogLogic = compose(withCatalogData, withFetchOnMount)

export const CatalogList = withCatalogLogic(CatalogListRaw)