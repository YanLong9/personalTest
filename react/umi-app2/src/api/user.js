import request from '@/utils/request'

// 企业首页/企业备案页面，页面顶部的企业基础信息接口
// export const getEnterpriseBaseInfo = () => {
//   return request.get('/api/getUserEnterpriseInfo')
// }
export const getEnterpriseBaseInfo=(params)=>{
  return request.get('/running-situation1',params)
}