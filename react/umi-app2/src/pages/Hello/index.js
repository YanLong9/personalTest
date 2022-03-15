import React,{Component} from 'react'
import helloCss from './index.module.css'

export default class Hello extends Component{
  render(){
    return (
      <div className={helloCss.title}>
        Hello React!
      </div>
    )
  }
}
/*

  样式私有化：

    普通CSS导入：

      命名：index.css

      本来的css文件导入：import 'index.css'
    
    CSS私有化：

      命名（加上module中间名）：index.module.css

      私有化导入（和js一样用变量接收）:import helloCss from 'index.module.css'

      使用：<div className={helloCss.title}></div>

*/

/*
  
  react模板快捷生成插件

    ES7 React/Redux/GraphQL/React-Native snippets

    rcc：创建类式组件

    rfc：创建函数式组件


*/