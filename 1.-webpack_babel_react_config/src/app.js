import React from 'react'
import ReactDOM from 'react-dom'

const HolaMundo = React.createElement('div', {}, 'Hola Mundo!!!!')

window.onload = function () {
   ReactDOM.render(HolaMundo, document.getElementById('app'))
}