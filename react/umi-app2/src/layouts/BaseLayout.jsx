import ProLayout, { PageContainer, ProBreadcrumb } from '@ant-design/pro-layout';

import { Link } from 'umi'
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
const filterAsyncRoutes = (asyncRoutes, roles) => {
  const result = []
  asyncRoutes.forEach(route => {
    // console.log(route)
    const tmp = { ...route, icon: <IconFont type={'icon-' + route.icon} style={{ color: 'red' }} /> }
    // console.log(tmp)
    roles.forEach(role => {
      if (role.path === tmp.path || tmp.path.startsWith(role.url + '/') || tmp.path.startsWith(role.url + '/:')) { // 包括动态路由
        if (role.routes && role.routes.length > 0) {
          tmp.children = filterAsyncRoutes(tmp.children, role.routes)
        }
        // else if (!tmp.children || tmp.children.length !== 1 || tmp.children[0].path !== tmp.path) { // 一级路由菜单
        //   tmp.children = []
        // }
        result.push(tmp)
      }
    })
  })
  // console.log(result)
  return result
}
export default (props) => {
  fetch('/api/user/test', {
      method: 'GET',
      // headers: {
      //   'Content-Type': 'application/json;charset=UTF-8'
      // },
      // mode: 'cors',
      // cache: 'default'
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data)
    })
  console.log(props)
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        fixedHeader={true}
        fixSiderbar={true}
        {...props}
        headerContentRender={() => < ProBreadcrumb />}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (
            menuItemProps.isUrl ||
            !menuItemProps.path ||
            location.pathname === menuItemProps.path
          ) {
            return defaultDom;
          }
          return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        }}
        menuDataRender={(routes) => {
          console.log(routes)
        //   // var routesArr = filterAsyncRoutes(routes, test)
        //   // console.log(routesArr)
          return routes
        }}
      >
        <PageContainer header={{ breadcrumb: {} }} >
          {}
          {props.children}
        </PageContainer>
      </ProLayout>
    </div >
  );
};