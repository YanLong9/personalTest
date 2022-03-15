const asyncTime = async (param) => {
  console.log(param)
  return param
}


export default {
  namespace: 'counts',
  state: {
    count: 0
  },
  reducers: {
    increment (state, action) {
      console.log(state)
      console.log(action)
      return { ...state, count: state.count + action.payload }
      // state.count = state.count+action.payload;
    },
    decrement (state, action) {
      console.log(state)
      console.log(action)
      state.count = action.payload;
    }
  },
  effects: {
    *incrementAsync (action, effects) {
      // console.log(action)
      // console.log(effects)
      const result = yield effects.call(asyncTime, 5)
      console.log(result)
      const count = yield effects.select(state => state.counts);
      console.log(count)
      yield effects.put({ type: "increment", payload: result })
    },
    *decrementAsync (action, effects) {
      console.log(action)
      console.log(effects)
    }
  },
  subscriptions: {
    subscripCount (param, done) {
      console.log(param)
      console.log(done)
      return param.history.listen((location) => {
        console.log(location)
        console.log(location.pathname)
      })
    }
  }
}

/*

  PS1、action    Object

      action:{ type:'',... }

      type为必须有，剩余可以有多个或者一个或者没有其他参数、
      type为reducers的函数名,表示调用该函数

      action:{type:'',payload:{}}

      但是约定俗成的是，除了type，剩余参数一般归类到一个payload对象中

  PS2、dispatch(action) 用来调用reducer

  1、state          object

      用来存储该model的数据状态

  2、reducers        object

      用来定义操作state数据的同步操作函数

          increment (state, action) {
            console.log(state)
            console.log(action)
            // return {count:2}
            state.count = 2;
          }

      @params1   state  该model中的state数据状态
      @params2   action

      @return {...state,count:state.count+action.payload}

          返回一个新的object，将会替换概模块的state数据状态
          只有这样才能更改state，否则页面监听不到state对象的变化

      state.count = state.count+action.payload

          但是当开启了immer后，可以直接通过打点赋值的方法来修改state

  3、effects        object

      用来定义操作state数据的异步操作函数，可以在该部分定义一些异步操作，
      然后再异步完成后去调用reducer的同步操作函数，
      达到异步操作state数据的目的，并不能越过reducer去直接操作state

          *incrementAsync (action, effects) {
              console.log(action)
              console.log(effects)
          },

      @params1   action
      @params2   effects

            三个常用的effects

              1.put   用于触发action

                  yield put({type:'increment',payload:1})

                  这里的action不用添加model标识

              2.call  用于调用异步逻辑，支持promise

                  const result = yield call(fetch, params);

                      @params1  异步函数
                      @parmas2  异步函数的参数

              3.select  用于从state里获取数据

                  const count = yield select(state => state.counts);

                  这里的state打点要先打点model标识

  4、subscriptions  object

      监听，用于订阅一个数据源，然后根据需要 dispatch 相应的 action。
      数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、
      geolocation 变化、history 路由变化等等

          subscripCount (param, done) {
            console.log(param)
            console.log(done)
            return param.history.listen((location) => {
              console.log(location)
              console.log(location.pathname)
            })
          }

          @param1  包含dispatch对象，与history对象，主要是为了监听路由变化
          @param2  未知

      PS：https://segmentfault.com/a/1190000039180929

          subscriptions 中配置的key的名称没有任何约束，而且只有在app.unmodel的时候才有用。
          subscriptions 中配置的只能dispatch所在model的reducer和effects。
          subscriptions 中配置的函数只会执行一次，也就是在调用 app.start() 的时候，会遍历所有 model 中的 subscriptions 执行一遍。
          subscriptions 中配置的函数需要返回一个函数，该函数应该用来取消订阅的该数据源。

          1.监听路由

            param.history.listen((location) => {
              console.log(location)
              console.log(location.pathname)
            })

            这样会返回路由解除监听的函数，只要抛出就好，参数location是路由信息以及路由传参的信息

          2.监听鼠标

            function handleClick() { dispatch({type: 'increment',payload: 1}) }
            document.addEventListener('click', handleClick);

            // 此处返回一个函数，用来移除click事件
            return () => { document.removeEventListener('click', handleClick) }

          3.解除监听

              1) 首先获取到dva的app实例
              2) 接着使用app.unmodel(model的namespace)
              3) 这样导致的问题就是整个model都被删了，不知道该怎么解决

*/