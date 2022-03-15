import React, { Component } from 'react'
import { nanoid } from 'nanoid'//生成唯一id的插件
import './index.css'

export default class Header extends Component {

	//当enter被按下的事件处理
	keyUpHandler = (e) => {

		//获取键码值，与input的target
		const { keyCode, target } = e

		//判断是否为enter
		if (keyCode !== 13) return

		//判断是否为空值
		let name = target.value.trim()
		if (name === '') return

		//通知父组件添加代做事项
		this.props.addTodo({ id: nanoid(), name, done: false })

		//清空input框
		target.value = ''
	}

	render () {
		return (
			<div className="todo-header">
				<input onKeyUp={this.keyUpHandler} type="text" placeholder="请输入你的任务名称，按回车键确认" />
			</div>
		)
	}
}

/*

	nanoid：uuid的简化版插件，作用是生成一个唯一的id

	使用：yarn add nanoid

	自动添加到了package.json

	引入：import { nanoid } from 'nanoid'

	使用：let id=nanoid()

*/