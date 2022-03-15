import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

	handleChange = (e) => {
		this.props.changeTodosDone(e.target.checked)
	}

	render () {
		const { todos, clearTodosDone } = this.props
		//已完成的个数
		const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" checked={doneCount === todos.length && doneCount !== 0} onChange={this.handleChange} />
				</label>
				<span>
					已完成 {doneCount} / 全部 {todos.length}
				</span>
				<button className="btn btn-danger" onClick={() => { clearTodosDone() }}>清除已完成任务</button>
			</div>
		)
	}
}
