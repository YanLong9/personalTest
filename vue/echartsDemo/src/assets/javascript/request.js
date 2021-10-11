import axios from 'axios'
import store from '../../store/index.js'
import router from '../../router'
import {
    refreshToken,
    openidLogin
} from "./apis.js";
import {
    Dialog
} from 'vant';


//设置默认请求头
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

//根据环境不同，设置baseURL
let baseURL
if (process.env.NODE_ENV == 'development') { // 测试环境
    baseURL = 'https://app.newtiming.com/api/v1';
} else { // 正式环境        
    baseURL = 'https://app.newtiming.com/api/v1';
}

//创建axios实例，并将baseurl传入，设置baseURL的该实例默认值
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: baseURL
})

//请求拦截器，在请求发起之前进行拦截，并处理该次请求的携带信息
service.interceptors.request.use(config => {
    // console.log("请求拦截器")
    // console.log(config)

    //判断是否需要添加token到请求头中
    try {
        if (config.token || config.params.token) {
            config.headers.token = store.state.userInfo.access_token
            config.headers.authorization = store.state.userInfo.token_type + ' ' + store.state.userInfo.access_token
        }
    } catch (e) {
        console.log(e)
    }
    return config
})

var requestUrl = '',
    methods = '',
    requestData = {},
    requestParams = {},
    resData = {};

//响应拦截器，在相应数据被回调函数处理之前进行拦截，并处理该次请求的返回信息
service.interceptors.response.use(response => {
        // console.log("响应拦截器")
        // console.log(response)
        return response.data
    },
    (error) => {
        // console.log(error)
        // console.log(error.response)
        let ua = navigator.userAgent.toLowerCase(), //判断是否是微信浏览器
            isWX = ua.match(/MicroMessenger/i) == "micromessenger";
        if (isWX) {
            if (error.message.search("401") !== -1) {
                requestUrl = error.response.config.url
                methods = error.response.config.method
                requestData = error.response.config.data
                requestParams = error.response.config.params
                const data = {
                    openid: store.state.WXUserInfo.open_id
                }
                return openidLogin(data).then(res => {
                    // console.log(res)
                    store.commit("changeUserInfo", res.data)
                    store.commit("changeIsLogin", true)
                    // console.log(store)
                    if (error.response.config.method == "get") {
                        return service({
                            method: methods,
                            params: requestParams,
                            url: requestUrl,
                            token: true
                        }).then(res => {
                            return resData = res
                        })
                    } else if (error.response.config.method == "post") {
                        return service({
                            method: methods,
                            data: requestData,
                            url: requestUrl,
                            token: true
                        }).then(res => {
                            return resData = res
                        })
                    }
                })
            } else {
                return Promise.reject(error);
            }
        } else {
            if (error.message.search("401") !== -1) {
                if (error.response.config.url !== '/authorizations/current') {
                    requestUrl = error.response.config.url
                    methods = error.response.config.method
                    requestData = error.response.config.data
                    requestParams = error.response.config.params
                    // console.log(requestUrl)
                    // console.log(methods)
                    // console.log(requestData)
                    // console.log(requestParams)

                    //刷新token
                    const data = {
                        refresh_token: store.state.userInfo.refresh_token
                    }
                    // console.log(store)
                    return refreshToken(data).then((res) => {
                        if (res.code == 1011) {
                            //登录状态失败
                            store.commit("changeUserInfo", {})
                            store.commit("changeIsLogin", false)
                            Dialog.alert({
                                title: '温馨提示',
                                message: '您还没有登录，请先登录再继续操作！',
                                confirmButtonText: "去登录",
                                confirmButtonColor: "#4CAAF1"
                            }).then(() => {
                                router.push("/login")
                            });
                            // return Promise.reject(error);
                        } else {
                            store.commit("changeUserInfo", res)
                            store.commit("changeIsLogin", true)
                            console.log(store)
                            if (error.response.config.method == "get") {
                                return service({
                                    method: methods,
                                    params: requestParams,
                                    url: requestUrl,
                                    token: true
                                }).then(res => {
                                    return resData = res
                                })
                            } else if (error.response.config.method == "post") {
                                return service({
                                    method: methods,
                                    data: requestData,
                                    url: requestUrl,
                                    token: true
                                }).then(res => {
                                    return resData = res
                                })
                            }
                        }
                    })

                }
            } else {
                return Promise.reject(error);
            }
        }

    })

export default service