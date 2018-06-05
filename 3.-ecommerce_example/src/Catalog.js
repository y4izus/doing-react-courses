import React, { Component } from 'react'
import { HeaderTitle } from './shared/HeaderTitle'
import { CatalogList } from './catalog/CatalogList'

export const Catalog = ({ products, onAddProductToCart }) => (
    <div className="catalog">
        <HeaderTitle title="Productos / Categoría"/>
        <CatalogList products={ products } onAddProductToCart={ onAddProductToCart }/>
        <div className="footer"></div>
    </div>
)