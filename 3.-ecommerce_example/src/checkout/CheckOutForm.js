import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import { setName, setLastName, setEmail, setAddress, getName, getLastName, getEmail, getAddress } from '../modules/checkout'


const CheckOutFormRaw = props =>  (
  <div className="checkout-form">
    <div className="row">
      <div className="col one-third">
        <label>Nombre</label>
      </div>
      <div className="col two-thirds">
        <input type="text" id="nombre" onInput={() => props.setName(nombre.value)} defaultValue={props.name}/>
      </div>
    </div>
    <div className="row">
      <div className="col one-third">
        <label>Apellidos</label>
      </div>
      <div className="col two-thirds">
        <input type="text" id="apellido" onInput={() => props.setLastName(apellido.value)} defaultValue={props.lastName}/>
      </div>
    </div>
    <div className="row">
      <div className="col one-third">
        <label>Email</label>
      </div>
      <div className="col two-thirds">
        <input type="text" id="email" className='error' onInput={() => props.setEmail(email.value)} defaultValue={props.email}/>
        <span className="error-text">El email es obligatorio</span>
      </div>
    </div>
    <div className="row">
      <div className="col one-third">
        <label>Dirección</label>
      </div>
        <div className="col two-thirds">
        <textarea className="big" id="direccion" onInput={() => props.setAddress(direccion.value)} defaultValue={props.address}></textarea>
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

const mapStateToPropsCheckout = state => {
  return { 
    name: getName(state),
    lastName: getLastName(state),
    email: getEmail(state),
    address: getAddress(state)
  }
}

const mapDispatchToPropsCheckout = {
  setName,
  setLastName,
  setEmail,
  setAddress
}

export const CheckOutForm = connect(
  mapStateToPropsCheckout,
  mapDispatchToPropsCheckout
)(CheckOutFormRaw)