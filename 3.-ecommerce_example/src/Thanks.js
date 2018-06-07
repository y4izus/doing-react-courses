import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

export const Thanks = () => (
  <div className="thank-you">
    <div className="shop-header">
      <h2>¡Gracias por tu compra XXXXX!</h2>
    </div>
    <p>Te llegará en breve a tu dirección XXX</p>
    <p>
      <Link to='/'>
        <button className="button">Volver a la tienda</button>
      </Link>
    </p>
  </div>
)
