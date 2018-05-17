import React, { Component } from 'react'
import ActionButton from './ActionButton'

class Counter extends Component {
   constructor(){
      super()
      this.state = {
         counter : 0
      }
      this.handleClickIncrementCounter = this.handleClickIncrementCounter.bind(this)
      this.handleClickResetCounter = this.handleClickResetCounter.bind(this)
   }

   handleClickIncrementCounter (e) {
      this.setState({
         counter: ++this.state.counter
      })
   }

   handleClickResetCounter (e) {
      this.setState({
         counter: 0
      })
   }

   render () {
      return (
         <div>
            <ActionButton handleClick={ this.handleClickIncrementCounter } btnText="Click para subir el contador"/>
            <ActionButton handleClick={ this.handleClickResetCounter } btnText="Click para resetear el contador"/>
            <p>Número de clicks: {this.state.counter} </p>
         </div>
      )

   }

}

export default Counter