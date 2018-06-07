import React from 'react'
import { Link } from 'react-router-dom'

export const ProductListRow = ({ onAddProductToCart, name, description, price }) => (
  <div className="product row">
    <div className="product-summary col three-fourths">
      <h2 className="product-title">{ name }</h2>
      <div className="product-details">
        <div className="product-image col one-fourth">
          <img src="http://placehold.it/64x64" height="64" width="64" />
        </div>
        <div className="product-summary col three-fourths">
          <p>{ description }</p>
        </div>
      </div>
      </div>
      <div className="product-add-to-cart col one-fourth">
      <div className="product-price">{ price }</div>
      <div className="add-to-cart">
        <Link to='/cart'>
          <button className="button" onClick={ onAddProductToCart }>Add to cart</button>
        </Link>
      </div>
    </div>
  </div>
)

