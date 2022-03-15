import React, { Component } from 'react'

//引入connect用于连接UI组件与dva
import { connect, getDvaApp } from 'umi'

//定义UI组件
class CountUI extends Component {

	state = { count: 0 }

	//加法
	increment = () => {
		const { value } = this.selectNumber
		console.log(value)
		// this.props.increment(value * 1)
		this.props.dispatch({ type: 'counts/increment', payload: value * 1 })
	}
	//减法
	decrement = () => {
		const { value } = this.selectNumber
		this.props.decrement(value * 1)
	}
	//奇数再加
	incrementIfOdd = () => {
		// const { value } = this.selectNumber
		// if (this.props.count % 2 !== 0) {
		// 	this.props.increment(value * 1)
		// }
		var app = getDvaApp()
		console.log(app)
		app.unmodel('counts')
	}
	//异步加
	incrementAsync = () => {
		const { value } = this.selectNumber
		console.log(value)
		// this.props.asyncIncrement(value * 1, 500)
		this.props.dispatch({ type: 'counts/incrementAsync', payload: value * 1 })
	}

	render () {
		console.log(this.props)
		const { count } = this.props.count
		return (
			<div>
				<h1>当前求和为：{count}</h1>
				<h2>我是Count组件,person组件总人数为:{this.props.peopleNum}</h2>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>&nbsp;
			</div>
		)
	}
}

//给UI组件传递props
// function mapStateToProps(state){
//   // console.log(state)
//   // return {count:state.countReducer,peopleNum:state.personReducer.length}
// }

//给UI组件操作props的方法---一般写法
// function mapDispathToProps(dispatch){
//   return {
//     increment:(data)=>{dispatch(createIncrementAction(data))},
//     decrement:(data)=>{dispatch(createDecrementAction(data))},
//     asyncIncrement:(data,time)=>{dispatch(createIncrementAsyncAction(data,time))},
//   }
// }

//给UI组件操作props的方法---精简写法
// var mapDispatchToProps={
//   increment:createIncrementAction,
//   decrement:createDecrementAction,
//   asyncIncrement:createIncrementAsyncAction
// }

function mapStateToProps (state) {
	console.log(state)
	return { count: state.counts }
}
//使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps)(CountUI)

