import React, { Component } from 'react'

class ActionButton extends Component {
   render () {
      return (
         <div>
            <button type="button" onClick={ this.props.handleClick }>{ this.props.btnText }</button>
         </div>
      )

   }

}

export default ActionButton