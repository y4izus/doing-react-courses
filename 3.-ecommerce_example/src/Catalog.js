import React from 'react'
import { HeaderTitle } from './shared/HeaderTitle'
import { CatalogList } from './catalog/CatalogList'

export const Catalog = () => (
  <div className="catalog">
    <HeaderTitle title="Productos / Categoría"/>
    <CatalogList />
    <div className="footer"></div>
  </div>
)