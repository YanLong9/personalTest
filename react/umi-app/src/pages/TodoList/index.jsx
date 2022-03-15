import React, { Component } from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './index.css'

export default class TodoList extends Component {

  //初始化状态
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打代码', done: false },
      { id: '004', name: '逛街', done: false }
    ]
  }

  //添加
  addTodo = (todo) => {
    //获取todos数据
    const { todos } = this.state
    //添加todo数据
    todos.unshift(todo)
    //更新数据驱动页面
    this.setState({ todos })
  }

  //更改todo的done状态
  changeTodoDone = (id, done) => {
    //获取todos
    const { todos } = this.state
    //设置新的todos
    this.setState({
      todos: todos.map((item, index, arr) => {
        return item.id === id ? { ...item, done } : item
      })
    })
  }

  //删除某个todo任务
  deleteTodo = (id) => {
    //获取todos
    const { todos } = this.state
    //删除对应的todo，然后更新数据驱动页面
    this.setState({
      todos: todos.filter((item, index, arr) => {
        return item.id !== id
      })
    })
  }

  //更改todos的done状态
  changeTodosDone = (flag) => {
    const { todos } = this.state
    this.setState({
      todos: todos.map((item, index, arr) => {
        return { ...item, done: flag }
      })
    })
  }

  //清除所有的已完成项目
  clearTodosDone = () => {
    const { todos } = this.state
    this.setState({
      todos:todos.filter((item,index,arr)=>{
        return !item.done
      })
    })
  }

  render () {

    //获取state数据
    const { todos } = this.state

    //获取methods函数
    const {
      addTodo,
      changeTodoDone,
      deleteTodo,
      changeTodosDone,
      clearTodosDone
    } = this

    return (
      <div className="todo-container" >
        <div className="todo-wrap">
          <Header addTodo={addTodo} />
          <List todos={todos} changeTodoDone={changeTodoDone} deleteTodo={deleteTodo} />
          <Footer todos={todos} changeTodosDone={changeTodosDone} clearTodosDone={clearTodosDone} />
        </div>
      </div >
    )
  }
}

/*

  组件传值

    父->子：props,详细使用见之前笔记

    子->父：

      父组件中定义一个函数，作为props属性传递给子组件

        addTodo = (todo) => {
          //获取todos数据
          const { todos } = this.state
          //添加todo数据
          todos.unshift(todo)
          //更新数据驱动页面
          this.setState({ todos })
        }

          <Header addTodo={addTodo} />

      子组件调用父组件传递过来的这个函数，将要传递的数据作为函数参数传递过来

        this.props.addTodo({ id: nanoid(), name, done: false })

      在父组件中接收到函数的参数，并相应的进行其他的操作



*/