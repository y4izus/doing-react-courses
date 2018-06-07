import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class CheckOutForm extends Component {
  render () {
    return (
      <div className="checkout-form">
        <div className="row">
          <div className="col one-third">
            <label>Nombre</label>
          </div>
          <div className="col two-thirds">
            <input type="text" name="nombre" />
          </div>
        </div>
        <div className="row">
          <div className="col one-third">
            <label>Apellidos</label>
          </div>
          <div className="col two-thirds">
            <input type="text" name="nombre" />
          </div>
        </div>
        <div className="row">
          <div className="col one-third">
            <label>Email</label>
          </div>
          <div className="col two-thirds">
            <input type="text" name="nombre" className='error' />
            <span className="error-text">El nombre es obligatorio</span>
          </div>
        </div>
        <div className="row">
          <div className="col one-third">
            <label>Dirección</label>
          </div>
            <div className="col two-thirds">
            <textarea className="big"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col one-whole">
            <Link to='/thanks'>
              <button className="button">Finalizar</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}