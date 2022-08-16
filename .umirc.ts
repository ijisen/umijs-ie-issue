import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  locale: {
    default: 'zh-CN',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  nodeModulesTransform: {
    type: 'all',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  dynamicImport: {},
  exportStatic: {},
  fastRefresh: {},
  targets: {
    ie: 10,
  },
});
