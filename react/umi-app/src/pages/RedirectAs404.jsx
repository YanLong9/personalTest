import React, { Component } from 'react'
import { Redirect } from 'umi'

export default class RedirectAs404 extends Component {
  render () {
    return (
      <Redirect to='/404' />
    )
  }
}
// const RedirectAs404 = ({ location }) => <Redirect to='{Object.assign({}, location, { state: { is404: true } })}' />