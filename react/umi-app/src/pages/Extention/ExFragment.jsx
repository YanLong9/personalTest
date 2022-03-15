import React, { Component, Fragment } from 'react'

export default class ExFragment extends Component {
  render () {
    return (
      // <Fragment>
      //   <input type="text" />
      //   <input type="text" />
      // </Fragment>
      <>
        <input type="text" />
        <input type="text" />
      </>
    )
  }  
}

/* 

    Fragment：可以用来做组件的根标签，或循环的根标签，并不会被真实渲染，

    <></>：使用方法与Fragment相同，区别在于Fragment可以写key等属性，但是空标签不可以写任何属性

*/
