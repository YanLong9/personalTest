import request from './request'

//微信公众号网页兼容，使用openId获取token/验证openId是否绑定了手机号
export const openidLogin = (data) => {
    return request({
        method: 'post',
        data,
        url: '/users/login/by/openid',
        token: false
    })
}

//微信公众号网页兼容，personal页面，退出登录既是解除当前微信号与手机号的绑定关系
export const unbindTel = (data) => {
    return request({
        method: 'delete',
        data,
        url: '/authorizations/current',
        token: true
    })
}

//微信公众号网页兼容，detailPlay页面，领取邀请券接口
export const getTicket = (data) => {
    return request({
        method: 'post',
        data,
        url: '/coupon/ask/me',
        token: true
    })
}

//微信公众号网页兼容，获取微信内支付相关信息接口,全集购买
export const getWXPaySingle = (data) => {
    return request({
        method: 'post',
        data,
        url: '/orders/unit/wechatpay',
        token: true
    })
}

//微信公众号网页兼容，获取微信内支付相关信息接口,单集购买
export const getWXPayAll = (data) => {
    return request({
        method: 'post',
        data,
        url: '/pay/wechatpay/purchase',
        token: true
    })
}

//登录模块，获取验证码接口
export const getTelCode = (data) => {
    return request({
        method: 'post',
        data,
        url: '/verificationCodes',
        token: false
    })
}

//登录模块，验证验证码登录接口
export const checkCodeLogin = (data) => {
    return request({
        method: 'post',
        data,
        url: '/users/code/verify',
        token: false
    })
}

//all接口，用于刷新token
export const refreshToken = (data) => {
    return request({
        method: 'post',
        data,
        url: '/authorizations/current',
        token: false
    })
}

//tab部分，获取用户信息接口
export const getUserInfo = (params) => {
    return request({
        method: 'get',
        params,
        url: '/user',
        token: true
    })
}

//获取视频接口
export const getEpisodesList = (params) => {
    return request({
        method: 'get',
        url: `/programs/${params.program}`,
        params,
        token: true
    })
}

// 获取视频质量列表
export const getQualityList = (vid) => {
    return request({
        method: 'get',
        url: `/video/${vid}/info`,
        token: true
    })
}

// 获取 MtsHlsUriToken
export const getMtsHlsUriToken = (data) => {
    return request({
        method: 'post',
        data,
        url: '/sts/info',
        token: true
    })
}

//aboutVideo页面，获取相关视频花絮数据接口
export const getTitBits = (params) => {
    return request({
        method: 'get',
        params,
        url: `/program/${params.program_id}/titbits`,
        token: true
    })
}

//videoMsg页面，购买本条视频接口，获取支付相关信息接口
export const getBuyVideoData = (data) => {
    return request({
        method: 'post',
        data,
        url: '/pay/page/data',
        token: true
    })
}

//videoList页面，购买本集视频接口，获取支付相关信息接口
export const getBuySingleData = (data) => {
    return request({
        method: 'post',
        data,
        url: '/orders/unit/pay/data',
        token: true
    })
}

//videoMsg页面，购买本条视频接口，微信支付
export const buySingleVideoWX = (data) => {
    return request({
        method: 'post',
        data,
        url: '/orders/unit/wechatpay',
        token: true
    })
}

// 订单记录弹窗，获取数据接口
export const getOrderData = (data) => {
    return request({
        method: 'post',
        data,
        url: '/orders/purchase',
        token: true
    })
}

// 影券中心，获取数据列表接口
export const getTicketData = (data) => {
    return request({
        method: 'post',
        data,
        url: '/tickets/list',
        token: true
    })
}
// 影券中心，使用邀请券解锁剧集
export const unlockVideo = (data) => {
    return request({
        method: 'post',
        data,
        url: '/ticket/donate',
        token: true
    })
}
// 影券中心，使用邀请券生成解锁页面
export const createUnlock = (data) => {
    return request({
        method: 'post',
        data,
        url: '/tickets/unlock',
        token: true
    })
}
// appShare页面，生成页面所需数据接口
export const getAppShare = (data) => {
    return request({
        method: 'post',
        data,
        url: '/trailer/share/data',
        token: false
    })
}

// appShare页面，获取微信config验证的接口
export const getWXConfig = (params) => {
    return request({
        method: 'get',
        params,
        url: '/jssdk/config',
        token: true
    })
}

//合资方部分，quaplay页面，commentbox组件，获取评论详情数据
export const getCommentData = (params) => {
    return request({
        method: 'get',
        params,
        url: `https://juju.jupaiaction.com/app/video/interact/comment`,
    })
}

//合资方部分，兼容app，APP传递token来设置登录状态
export const tokenLogin = (params) => {
    return request({
        method: 'get',
        params,
        url: `/juju/login`,
    })
}

//合资方部分，兼容app，兑换中心页面，获取cdk信息
export const getCDKInfo = (params) => {
    return request({
        method: 'get',
        params,
        url: `http://f2356863f622.ngrok.io/api/v1/cdk/info`,
        token: true
    })
}
//合资方部分，兼容app，兑换中心页面，获取cdk信息
export const platformExchange = (params) => {
    return request({
        method: 'get',
        params,
        url: `http://f2356863f622.ngrok.io/api/v1/cdk/exchange`,
        token: true
    })
}
//合资方部分，兼容app，兑换中心页面，获取cdk信息
export const getExchangeResult = (params) => {
    return request({
        method: 'get',
        params,
        url: `http://f2356863f622.ngrok.io/api/v1/cdk/query`,
        token: true
    })
}