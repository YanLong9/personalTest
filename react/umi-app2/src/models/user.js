import { useState, useCallback } from 'react'
import { getToken } from '@/utils/storage'

const getDefaultState = () => {
  return {
    token: getToken(), // 用户token信息
    name: '', // 用户名
    menu: '', // 用户对应权限的异步路由表
    avatar: ''// 用户头像
  }
}

export default function useAuthModel () {
  const [user, setUser] = useState(getDefaultState())

  return {
    user
  }
}