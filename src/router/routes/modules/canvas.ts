import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/canvas',
  name: 'canvas',
  component: LAYOUT,
  redirect: '/canvas',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: 'canvas',
  },
  children: [
    {
      path: 'canvas0',
      name: 'canvas0',
      component: () => import('/@/views/canvas/canvas0/index.vue'),
      meta: {
        // affix: true,
        title: 'helloworld',
      },
    },
    {
      path: 'canvas1',
      name: 'canvas1',
      component: () => import('/@/views/canvas/canvas1/index.vue'),
      meta: {
        // affix: true,
        title: '矩形',
      },
    },
    {
      path: 'canvas2',
      name: 'canvas2',
      component: () => import('/@/views/canvas/canvas2/index.vue'),
      meta: {
        title: '圆及圆弧',
      },
    },
    {
      path: 'canvas3',
      name: 'canvas3',
      component: () => import('/@/views/canvas/canvas3/index.vue'),
      meta: {
        title: '渐变',
      },
    },
    {
      path: 'canvas4',
      name: 'canvas4',
      component: () => import('/@/views/canvas/canvas4/index.vue'),
      meta: {
        title: '天空',
      },
    },
    {
      path: 'canvas5',
      name: 'canvas5',
      component: () => import('/@/views/canvas/canvas5/index.vue'),
      meta: {
        title: '简单介绍5',
      },
    },
  ],
};

export default dashboard;
