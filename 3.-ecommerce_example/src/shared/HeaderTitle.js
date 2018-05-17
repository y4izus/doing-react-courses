import React, { Component } from 'react'

export const HeaderTitle = props => {
   return (
      <div className="shop-header">
         <h2>{ props.title }</h2>
      </div>
   )
}