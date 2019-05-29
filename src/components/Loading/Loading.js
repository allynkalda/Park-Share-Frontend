import React, { Component } from 'react'
import './loading.css'

export default class Loading extends Component {
  render() {
    return (
      <div>
        <div className="loadingPage">
          <div className="lds-hourglass"></div>
        </div>  
      </div>
    )
  }
}