import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    // 别名
    alias: '/home_page',
    name: 'home',
    component: Home,
    // 动态路由传参,function
    props: route => ({
      food: route.query.food
    })
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/about',
    // 命名路由
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    // 动态路由传参,object
    props: {
      food: 'banana'
    },
    meta: {
      title: '关于我们'
    }
  },
  {
    // 动态路由
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/Argu.vue'),
    // 动态路由传参,boolean
    props: true
  },
  {
    // 嵌套路由
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/Parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/Child.vue')
      }
    ]
  },
  {
    // 命名视图
    path: '/name_view',
    components: {
      default: () => import('@/views/Child.vue'),
      email: () => import('@/views/Email.vue'),
      tel: () => import('@/views/Tel.vue')
    }
  },
  {
    // 重定向
    path: '/main',
    // redirect: '/'
    // 也可以通过命名路由的方式
    redirect: {
      name: 'home'
    }
    // 也可以是方法
    // redirect: to => {return {name: 'home'}}
    // redirect: to => '/'
  },
  {
    path: '/store',
    component: () => import('@/views/Store.vue')
  },
  {
    // 404 一定要定义到最后（优先级问题）
    path: '*',
    component: () => import('@/views/error_404.vue')

  }
]
