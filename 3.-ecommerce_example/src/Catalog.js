import React, { Component } from 'react'
import ActionButton from './ActionButton'
import { HeaderTitle } from './shared/HeaderTitle'
import { CatalogList } from './catalog/CatalogList'
import { products } from './data/catalog.js'

class Catalog extends Component {
   render () {
      return (
         <div className="catalog-list">
            <HeaderTitle title="Productos / Categoría"/>
            <CatalogList products={ products } />
            {/* <ActionButton handleClick={ this.handleClickIncrementCounter } btnText="XXXClick para subir el contador"/> */}
         </div>
      )
   }
}

export default Catalog