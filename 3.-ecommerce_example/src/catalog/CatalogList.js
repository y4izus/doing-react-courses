import React, { Component } from 'react'
import { ProductListRow } from './ProductListRow';

export class CatalogList extends Component {
   render () {
      const { products } = this.props

      return (
         <div className="catalog-list">
            { products.map( e => <ProductListRow key={ e.name } productName={ e.name } productDesc={ e.description } productPrice={ e.price } /> ) }
         </div>
      )
   }
}