import React, { Component } from 'react'

export default class ExSetState extends Component {

  state = { count: 0 }

  add = () => {

    //对象式的setState
    // const { count } = this.state
    // this.setState({ count: count + 1 }, () => {
    //   console.log(this.state.count);
    // })

    //函数式的setState
    this.setState((state, props) => {
      console.log(state, props)

      return { count: state.count + 1 }
    }, () => {
      console.log(this.state.count);
    })
  }

  render () {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
}

/*

    1、Object式的setState

        this.setState(params1, params2)

        params1：object，将会与原来的state合并

        params2：Function，将会在state与组件更新过后执行，且在函数中获取到的state与props都是更改之后的

    2、Function式的setState

        this.setState(params1, params2)

        params1：Function：(state,props)=>{ return return1 }

          state:本次更改发生之前的state

          props：本次更改发生之前的props

          return1：必须有，且必须为一个Object，将会与原来的state合并

        params2：Function，将会在state与组件更新过后执行，且在函数中获取到的state与props都是更改之后的

    3、对象式的setState是函数式的setState的简写方式(语法糖)
		
        使用原则：
        
          1.如果新状态不依赖于原状态 ===> 使用对象方式
          
          2.如果新状态依赖于原状态 ===> 使用函数方式
        
          3.如果需要在setState()执行后获取最新的状态数据, 要在第二个callback函数中读取

        


*/
