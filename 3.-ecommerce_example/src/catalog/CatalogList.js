import React from 'react'
import { ProductListRow } from './ProductListRow';

export const CatalogList = ({ products, onProductClick }) => (
    <div className="catalog-list">
        { products.map( product => <ProductListRow key={ product.id } {...product} onClick={ () => onProductClick(product.id)}/> ) }
    </div>
)