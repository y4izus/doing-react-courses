import React, { Component } from 'react'

export class ProductListRow extends Component {
   render () {
      return (
         <div className="product row">
            <div className="product-summary col three-fourths">
               <h2 className="product-title">{ this.props.productName }</h2>
               <div className="product-details">
                  <div className="product-image col one-fourth">
                     <img src="http://placehold.it/64x64" height="64" width="64" />
                  </div>
                  <div className="product-summary col three-fourths">
                     <p>{ this.props.productDesc }</p>
                  </div>
               </div>
               </div>
               <div className="product-add-to-cart col one-fourth">
               <div className="product-price">{ this.props.productPrice }</div>
               <div className="add-to-cart">
                  <a className="button">Add to cart</a>
               </div>
            </div>
         </div>
      )
   }
}