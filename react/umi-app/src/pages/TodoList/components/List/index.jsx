import React, { Component } from 'react'

import Item from '../Item'

import './index.css'

export default class List extends Component {

	render () {
		const {
			todos,//列表数据
			changeTodoDone,//更改todo的done状态
			deleteTodo//删除某个todo任务
		} = this.props
		return (
			<ul className="todo-main">
				{
					todos.map(todo => {
						return <Item key={todo.id} {...todo} changeTodoDone={changeTodoDone} deleteTodo={deleteTodo} />
					})
				}
			</ul>
		)
	}

}