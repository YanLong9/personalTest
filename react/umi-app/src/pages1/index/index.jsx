import { Component } from 'react'

export default class Index extends Component {
  render () {
    console.log(this.props.children)
    return (
      <div id='index'>
        <h1>Page index</h1>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}