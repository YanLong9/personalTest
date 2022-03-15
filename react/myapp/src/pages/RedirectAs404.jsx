/*
 * @Author: YanLong
 * @Date: 2021-11-05 17:16:59
 * @LastEditTime: 2021-11-24 10:06:14
 * @LastEditors: YanLong
 * @Description: 重定向至全局404页面，主要是用来放置在每一级路由的最后面，实现路由匹配出错跳转全局404页面的功能
 */
import React, { Component } from 'react'
import { Redirect } from 'umi'

export default class RedirectAs404 extends Component {
  render () {
    return (
      <Redirect to='/404' />
    )
  }
}