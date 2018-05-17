import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ActionButton extends Component {
   render () {
      return (
         <div>
            <button type="button" onClick={ this.props.handleClick }>{ this.props.btnText }</button>
         </div>
      )

   }

}

ActionButton.propTypes = {
   onClick: PropTypes.func
}

export default ActionButton