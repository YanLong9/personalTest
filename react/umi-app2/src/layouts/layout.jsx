import React, { Component } from 'react'

export default class layout extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
