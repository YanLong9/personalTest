import React, { PureComponent } from 'react'

export default class Parent extends PureComponent {

	state = {carName:"奔驰c36",stus:['小张','小李','小王']}

	addStu = ()=>{
		const {stus} = this.state
		this.setState({stus:['小刘',...stus]})
	}

	changeCar = ()=>{
		this.setState({carName:'迈巴赫'})
	}

	/* shouldComponentUpdate(nextProps,nextState){
		// console.log(this.props,this.state); //目前的props和state
		// console.log(nextProps,nextState); //接下要变化的目标props，目标state
		return !this.state.carName === nextState.carName
	} */

	render() {
		console.log('Parent---render');
		const {carName} = this.state
		return (
			<div className="parent">
				<h3>我是Parent组件</h3>
				{this.state.stus}&nbsp;
				<span>我的车名字是：{carName}</span><br/>
				<button onClick={this.changeCar}>点我换车</button>
				<button onClick={this.addStu}>添加一个小刘</button>
				<Child carName={carName}/>
			</div>
		)
	}
}

class Child extends PureComponent {

	/* shouldComponentUpdate(nextProps,nextState){
		console.log(this.props,this.state); //目前的props和state
		console.log(nextProps,nextState); //接下要变化的目标props，目标state
		return !this.props.carName === nextProps.carName
	} */

	render() {
		console.log('Child---render');
		return (
			<div className="child">
				<h3>我是Child组件</h3>
				<span>我接到的车是：{this.props.carName}</span>
			</div>
		)
	}
}
/*

  问题：

    1、只要执行setState(),即使不改变状态数据, 组件也会重新render()

    2、只当前组件重新render(), 就会自动重新render子组件 ==> 效率低

  难点：

    只有当组件的state或props数据发生改变时才重新render()

  解决工具：

    Component中的shouldComponentUpdate()总是返回true

  解决方案：

    1、重写shouldComponentUpdate()方法

        比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false
      
    2、使用PureComponent

        PureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true
		
        PS: 只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了, 返回false  
            不要直接修改state数据, 而是要产生新数据，项目中一般使用PureComponent来优化

*/