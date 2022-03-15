import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  antd: {},
  routes: routes,
  chainWebpack (memo, { env, webpack, createCSSRule }) {
  },
  proxy: {
    '/api': {
      target: 'http://172.16.1.118:8001/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});