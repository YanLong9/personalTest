/*
 * @Author: YanLong
 * @Date: 2022-01-11 15:59:53
 * @LastEditTime: 2022-01-11 16:09:01
 * @LastEditors: YanLong
 * @Description: 
 */
/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState) {
  const { currentUser } = initialState || {};
  console.log(initialState)
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
  };
}
