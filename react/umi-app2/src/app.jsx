import React from 'react'
import { history, getDvaApp } from 'umi';
import { getToken } from '@/utils/storage' // 从localstorage中获取token
import baseRoutes from '@/utils/base_routes.js'//完整的基础路由表
import asyncRoutes from '@/utils/async_routes.js'//完整的基础路由表
// import { getUserInfo } from "@/api/user.js"
const whiteList = ['/user', '/user/login', '/user/register', '/404'] // 设置路由白名单，不加验证，即可进入的页面
// import {getEnterpriseBaseInfo} from '@/api/user.js'
// getEnterpriseBaseInfo().then(res=>{
//   console.log(res)
// }).catch((rej)=>{
//   console.log(rej)
// })

//生成默认用户信息
let defaultUserInfo = () => {
  return {
    username: '',
    route: [
      {
        path: '/app',
        routes: [
          {
            path: '/app',
            redirect: '/app/welcome',
          },
          {
            path: '/app/hello',
            name: 'hello',
          },
          {
            path: '/app/welcome',
            name: 'welcome',
          },
          {
            path: '/app/count',
            name: 'count',
          },
          {
            path: '/app/home',
            name: 'home',
            routes: [
              {
                path: '/app/home',
                redirect: '/home/news'
              },
              {
                path: '/app/home/news',
                name: 'News',
              },
              {
                path: '/app/home/message',
                name: 'Message',
                routes: [
                  {
                    path: '/app/home/message',
                  },
                  {
                    path: '/app/home/message/detail',
                  },
                ],
              },
            ]
          },
          {
            path: '/app/extention',
            name: 'extention',
          }
        ]
      }
    ]
  }
}

let userInfo = defaultUserInfo()//通过用户权限从后端获取到的用户信息

const getUserInfo = async (param) => {
  console.log(param)
  return Promise.resolve({
    code: 0,
    msg: "获取成功",
    data: {
      username: '',
      route: [
        {
          path: '/app',
          routes: [
            {
              path: '/app',
              redirect: '/app/welcome',
            },
            {
              path: '/app/hello',
              name: 'hello',
            },
            {
              path: '/app/welcome',
              name: 'welcome',
            },
            {
              path: '/app/count',
              name: 'count',
            },
            {
              path: '/app/home',
              name: 'home',
              routes: [
                {
                  path: '/app/home',
                  redirect: '/home/news'
                },
                {
                  path: '/app/home/news',
                  name: 'News',
                },
                {
                  path: '/app/home/message',
                  name: 'Message',
                  routes: [
                    {
                      path: '/app/home/message',
                    },
                    {
                      path: '/app/home/message/detail',
                    },
                  ],
                },
              ]
            },
            {
              path: '/app/extention',
              name: 'extention',
            }
          ]
        }
      ]
    }
  })
}

// 覆写 render,比如用于渲染之前做权限校验,获取用户信息
export function render (oldRender) {

  localStorage.setItem('saimo_vehicle_data_token', 132456)
  // 获取localstorage中的token信息，判断用户是否登录
  const hasToken = getToken()// 'test-token'
  if (hasToken) {
    /*已登录，获取用户信息并保存，且覆盖默认的用户路由表*/

    getUserInfo(hasToken).then((res) => {
      userInfo = res.data
      console.log(userInfo)
      oldRender()
    }).catch((rej) => {
      userInfo = defaultUserInfo()
      history.push(`/404`)
      oldRender()
    })

  } else {
    /*未登录，设置默认的用户路由表*/
    userInfo = defaultUserInfo()
    oldRender();
  }
}

//修改路由表，直接修改参数routes即可，不用返回值
export function patchRoutes ({ routes }) {
  console.log(456)
  console.log(routes)
  // 获取localstorage中的token信息，判断用户是否登录
  const hasToken = getToken()// 'test-token'

  console.log(hasToken)
  console.log(userInfo.route.length)
  if (hasToken && userInfo.route.length) {
    console.log(true)
    /*如果为登录状态且已经获取到了用户信息，则根据用户信息生成动态路由表*/

    const redirect404 = routes.find(item => item.path === '/404')
    console.log(redirect404)
    //获取到
    function filterAsyncRoutes (asyncRoutes, roles) {
      const result = []
      // console.log(asyncRoutes[6])

      asyncRoutes.forEach(route => {
        if (route.path) {
          // console.log(route)
          const tmp = { ...route }
          // console.log(tmp)
          roles.forEach(role => {
            if (role.path === tmp.path) { // 包括动态路由
              if (role.routes && role.routes.length > 0) {
                tmp.routes = filterAsyncRoutes(tmp.routes, role.routes)
              }
              result.push(tmp)
            }
          })
        }
      })
      // console.log(redirect404)
      result.push(redirect404)

      // console.log(result)
      return result
    }
    console.log(routes[2])

    const dynamicRoute = filterAsyncRoutes(asyncRoutes, userInfo.route).find(item => item.path === '/app')
    // debugger
    routes.splice(1, 0, dynamicRoute)
    // routes[0].redirect = '/app'
    console.log(routes)
  } else {
    console.log(false)

    //如果为未登录状态则重置路由表为基础路由表
    routes = baseRoutes
    console.log(routes)
  }
  console.log('over')
}

//在初始加载和路由切换时做一些事情，模拟路由全局守卫
export function onRouteChange ({ location, routes, action }) {
  // 获取localstorage中的token信息，判断用户是否登录
  const hasToken = getToken()// 'test-token'
  if (hasToken) {
    if (whiteList.indexOf(location.pathname) !== -1) {
      if (location.pathname === '/user/login') {
        // 如果处于登录成功状态，去向login页面时，重定向至home
        history.push('/')
      }
    } else {
      //判断是否生成了权限路由，如果没有则刷新页面生成权限路由
      if (!userInfo.route.length) {
        history.go(0)
      }
    }
  } else {
    /* 没有登录 */
    if (whiteList.indexOf(location.pathname) === -1) {
      // 没有登录，如果是要去向不是免验证白名单页面，重定向到登录页
      history.push(`/user/login`)
    }
  }
}