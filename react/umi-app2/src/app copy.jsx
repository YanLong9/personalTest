import React from 'react'
import ProLayout, { PageContainer, ProBreadcrumb, PageLoading } from '@ant-design/pro-layout';
import { createFromIconfontCN } from '@ant-design/icons';
// console.log('GLOBAL_VAR', GLOBAL_VAR) // > global_var
// console.log('process.env.NODE_ENV', process.env.NODE_ENV) // > prod
// console.log('process.env.test', process.env.test) // > prod

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2914437_zqy9hr4p2.js',
});
// export const layout = ({ initialState }) => {
//   return {
//     headerContentRender: () => < ProBreadcrumb />,
//     onPageChange: () => {
//       console.log(123)
//     },
//   };
// };

import { getEnterpriseBaseInfo } from "@/api/user.js"
getEnterpriseBaseInfo({ test: 123 }).then(res => {
  console.log('res')
  console.log(res)
}).catch(rej => {
  console.log('rej')
  console.log(rej)
})
export const initialStateConfig = {
  loading: <PageLoading />,
};
/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */

export async function getInitialState () {
  // console.log(789)
  // const fetchUserInfo = async () => {
  //   try {
  //     const msg = await queryCurrentUser();
  //     return msg.data;
  //   } catch (error) {
  //     history.push(loginPath);
  //   }

  //   return undefined;
  // }; // 如果是登录页面，不执行

  // if (history.location.pathname !== loginPath) {
  //   const currentUser = await fetchUserInfo();
  //   return {
  //     fetchUserInfo,
  //     currentUser,
  //     settings: {},
  //   };
  // }

  // return {
  //   fetchUserInfo,
  //   settings: {},
  // };
} // ProLayout 支持的api https://procomponents.ant.design/components/layout

var test = [
  {
    path: '/app',
    redirect: '/app/welcome',
  },
  // {
  //   path: '/app/hello',
  //   name: 'hello',
  // },
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

export function render (oldRender) {
  // console.log(123)
  oldRender();
}
export function patchRoutes ({ routes }) {
  console.log(456)
  // console.log(routes)
  const redirect404 = routes[4]
  function filterAsyncRoutes (asyncRoutes, roles) {
    const result = []
    // console.log(asyncRoutes[6])

    asyncRoutes.forEach(route => {
      if (route.path) {
        // console.log(route)
        const tmp = { ...route, icon: <IconFont type={'icon-' + route.icon} style={{ color: 'red' }} /> }
        // console.log(tmp)
        roles.forEach(role => {
          if (role.path === tmp.path || tmp.path.startsWith(role.url + '/') || tmp.path.startsWith(role.url + '/:')) { // 包括动态路由
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

  routes[2].routes = filterAsyncRoutes(routes[2].routes, test)
  // routes=routes.slice(0,5)
  // console.log(routes)
  // merge(routes, extraRoutes);
}
export function onRouteChange ({ location, routes, action }) {
  // console.log(101112)

  // bacon(location.pathname);
  // console.log(location, routes)
}