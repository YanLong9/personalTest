import React, { Component } from 'react'
import { NavLink } from 'umi'


export default class MyNavLink extends Component {
  render () {
    // console.log(this.props)
    return (
      // <NavLink className="list-group-item" to={this.props.to} children={this.props.children} />
      // <NavLink className="list-group-item" to={this.props.to}>{this.props.children}</NavLink>
      <NavLink className="list-group-item" {...this.props} />
    )
  }
}

/*

  组件插槽

    使用：<MyNavLink to='/hello'>Hello</MyNavLink>

    接收：this.props.children

    PS:

      一般的组件传参，使用标签属性传递，使用props属性接收

      组件插槽的传递

        传递：<MyNavLink to='/hello'>Hello</MyNavLink> //直接在组件开始标签与结束标签中写入要传递的插槽

              <NavLink className="list-group-item" to={this.props.to} children={this.props.children} /> //也可以直接通过children属性传递

        接收：this.props.children

*/