import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class GitSearch extends Component {
	render () {
		return (
			<div >
				<Search />
				<List />
			</div>
		)
	}
}

/*

	兄弟组件/隔代组件/不相关组件传值


	1、消息订阅-发布模式：EventBus模式

			安装pubsub库：yarn add pubsub-js

			引入：import PubSub from 'pubsub-js'

			使用：

				发布：PubSub.publish("发布消息标识",{要发布的数据})

				接收：PubSub.subscribe('发布消息标识',(发布消息标识,要发布的数据)=>{})






*/
