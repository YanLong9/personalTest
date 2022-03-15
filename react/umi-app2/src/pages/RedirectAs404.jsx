import React, { Component } from 'react'
import { Redirect } from 'umi'

export default class RedirectAs404 extends Component {
  render () {
    return (
      <Redirect to='/404' />
    )
  }
}