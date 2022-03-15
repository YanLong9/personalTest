import React, { Component } from 'react'
import ExContext from "./ExContext"//context扩展
import ExFragment from "./ExFragment"//fragment扩展
import ExComponent from "./ExComponent"//Component优化扩展
import ExSetState from "./ExSetState"//SetState扩展
import ExRenderProps from "./ExRenderProps"//RenderProps扩展
import ExErrorBoundary from "./ExErrorBoundary"//ExErrorBoundary扩展

export default class Extenion extends Component {
  render () {
    return (
      <div>
        <ExRenderProps></ExRenderProps>
      </div>
    )
  }
}
