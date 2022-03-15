import React, { Component } from 'react'
import Header from "@/components/Header"
import MyNavLink from "@/components/MyNavLink"

export default class index extends Component {
  render () {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header></Header>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink to='/index/hello'>Hello</MyNavLink>
              <MyNavLink to='/index/welcome'>Welcome</MyNavLink>
              <MyNavLink to='/index/todoList'>TodoList</MyNavLink>
              <MyNavLink to='/index/gitSearch'>GitSearch</MyNavLink>
              <MyNavLink to='/index/home'>Home</MyNavLink>
              <MyNavLink to='/index/count'>Count</MyNavLink>
              <MyNavLink to='/index/extention'>Extention</MyNavLink>
              <MyNavLink to='/index/countDva'>CountDva</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
