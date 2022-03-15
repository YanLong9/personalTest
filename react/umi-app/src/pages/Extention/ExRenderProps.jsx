import React, { Component } from 'react'

export default class ExRenderProps extends Component {
  render () {
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        <A render={(name) => <B name={name} />} />
      </div>
    )
  }
}


class A extends Component {
  state = { name: 'tom' }
  render () {
    console.log(this.props);
    const { name } = this.state
    return (
      <div className="a">
        <h3>我是A组件</h3>
        {this.props.render(name)}
      </div>
    )
  }
}

class B extends Component {
  render () {
    console.log('B--render');
    return (
      <div className="b">
        <h3>我是B组件,{this.props.name}</h3>
      </div>
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
        

  作用域插槽

        传递：A组件标签：<A render={(name) => <B name={name} />} />

        渲染：A组件：{this.props.render(name)}

        获值：B组件：this.props.name、

        这样就满足了我们在A组件预留的插槽中渲染组件并给组件传参的需求，可以将A组件中的数据传递给B组件了

*/