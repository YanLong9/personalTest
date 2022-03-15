import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    "process.env": {
      NODE_ENV: 'development',
      API_BASE_URL:'http://172.15.2.80:8010/api'
    }, // 修改process.env对象数据
    GLOBAL_VAR: "global_var", // 直接增加全局变量
  },
});