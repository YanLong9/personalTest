import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

	// 处理checkbox勾选、取消勾选的函数
	handleChange = (id) => {
		return (e) => {
			//更改todoList组件的state数据状态，然后再反过来驱动item组件的checkbox状态
			this.props.changeTodoDone(id, e.target.checked)
		}
	}

	render () {
		const {
			name,//todo任务的描述
			done,//todo任务的完成状态
			id,//todo任务的唯一id
			deleteTodo//删除某个todo任务
		} = this.props
		return (
			<li>
				<label>
					<input type="checkbox" checked={done} onChange={this.handleChange(id)} />
					<span>{name}</span>
				</label>
				<button className="btn btn-danger" onClick={() => deleteTodo(id)}>删除</button>
			</li>
		)
	}
}