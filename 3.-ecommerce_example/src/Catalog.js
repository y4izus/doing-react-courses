import React, { Component } from 'react'
import { HeaderTitle } from './shared/HeaderTitle'
import { CatalogList } from './catalog/CatalogList'

export const Catalog = ({ products, onProductClick }) => (
    <div className="catalog">
        <HeaderTitle title="Productos / Categoría"/>
        <CatalogList products={ products } onProductClick={ onProductClick }/>
        <div className="footer"></div>
    </div>
)