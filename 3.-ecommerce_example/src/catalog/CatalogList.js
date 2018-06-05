import React from 'react'
import { ProductListRow } from './ProductListRow';

export const CatalogList = ({ products, onAddProductToCart }) => (
    <div className="catalog-list">
        { products.map( product => <ProductListRow key={ product.id } {...product} onAddProductToCart={ () => onAddProductToCart(product.id)}/> ) }
    </div>
)