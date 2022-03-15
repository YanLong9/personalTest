/* 所有需要localstorage缓存的数据都在该文件中 */
const TOKEN_KEY = 'saimo_vehicle_data_token'
const ID_KEY = 'saimo_vehicle_data_id'

export const getToken = () => {
  return localStorage?.getItem(TOKEN_KEY)
}

export const setToken = token => {
  return localStorage?.setItem(TOKEN_KEY, token)
}

export const removeToken = () => {
  return localStorage?.removeItem(TOKEN_KEY)
}

export const getId = () => {
  return localStorage?.getItem(ID_KEY)
}

export const setId = token => {
  return localStorage?.setItem(ID_KEY, token)
}

export const removeId = () => {
  return localStorage?.removeItem(ID_KEY)
}

