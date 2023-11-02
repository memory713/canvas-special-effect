import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/css',
  name: 'css',
  component: LAYOUT,
  redirect: '/css',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: 'css',
  },
  children: [
    {
      path: 'css0',
      name: 'css0',
      component: () => import('/@/views/css/css0/GrowCard0.vue'),
      meta: {
        // affix: true,
        title: 'animation',
      },
    },
    {
      path: 'css',
      name: 'css',
      component: () => import('/@/views/css/css/GrowCard.vue'),
      meta: {
        // affix: true,
        title: '字符',
      },
    },
    // {
    //   path: 'css1',
    //   name: 'css1',
    //   component: () => import('/@/views/css/css1/GrowCard1.vue'),
    //   meta: {
    //     // affix: true,
    //     title: '太极',
    //   },
    // },
    {
      path: 'css2',
      name: 'css2',
      component: () => import('/@/views/css/css2/GrowCard2.vue'),
      meta: {
        // affix: true,
        title: '跳动的纸片',
      },
    },
    {
      path: 'css3',
      name: 'css3',
      component: () => import('/@/views/css/css3/GrowCard3.vue'),
      meta: {
        // affix: true,
        title: '白云飘',
      },
    },
    {
      path: 'css4',
      name: 'css4',
      component: () => import('/@/views/css/css4/GrowCard4.vue'),
      meta: {
        // affix: true,
        title: '翻转',
      },
    },
    {
      path: 'css5',
      name: 'css5',
      component: () => import('/@/views/css/css5/GrowCard5.vue'),
      meta: {
        // affix: true,
        title: '3D',
      },
    },
  ],
};

export default dashboard;
