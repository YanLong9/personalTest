import React, { Component } from 'react'

export default class user extends Component {
  render () {
    return (
      <div>
        user
        {this.props.children}
      </div>
    )
  }
}
