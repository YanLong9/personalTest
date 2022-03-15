import React, { Component } from 'react'

//创建context对象
const MyContext=React.createContext()
//获取context发布对象
const {Provider,Consumer}=MyContext

export default class A extends Component {

  state = { username: 'tom', age: 18 }

  render () {
    const { username, age } = this.state
    return (
      <div className="parent">
        <h3>我是A组件</h3>
        <h4>我的用户名是:{username}</h4>
        <Provider value={{username,age}}>
          <B></B>
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render () {
    return (
      <div className="child">
        <h3>我是B组件</h3>
        <C />
      </div>
    )
  }
}

// class C extends Component {
//   static contextType=MyContext
//   render () {
//     console.log(this)
//     const {username,age}=this.context
//     return (
//       <div className="grand">
//         <h3>我是C组件</h3>
//         <h4>我从A组件接收到的用户名:{username},年龄是{age}</h4>
//       </div>
//     )
//   }
// }

function C(){
	return (
		<div className="grand">
			<h3>我是C组件</h3>
			<h4>我从A组件接收到的用户名:
			<Consumer>
				{value => `${value.username},年龄是${value.age}`}
			</Consumer>
			</h4>
		</div>
	)
}

/*

  使用：

    1、创建context对象

        const MyContext=React.createContext()
    
    2、获取context发布对象

        const {Provider}=MyContext

    3、发布

        <Provider value={}>
          <B></B>
        </Provider>

        PS：value属性名不可更改

    4、类式组件接收

      1.声明接收：static contextType=MyContext

      2.获取：this.context

    5、函数式组件接收

      1.获取Consumer接收对象：const {Consumer}=MyContext

      2.接收：

        <Consumer>
          {value => `${value.username},年龄是${value.age}`}
        </Consumer>




*/