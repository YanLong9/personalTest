import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  antd: {}, // 开启Ant Design功能
  routes: routes,
  // layout: {
  //   name: 'Ant Design',
  //   locale: false,
  //   layout: 'side',
  // },
  dva: {
    immer: true, // (方便修改 reducer)。
  }
});