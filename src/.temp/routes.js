const c1 = () => import(/* webpackChunkName: "page--src-pages-project-vue" */ "F:\\git\\My-VBlog\\src\\pages\\Project.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-social-vue" */ "F:\\git\\My-VBlog\\src\\pages\\Social.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-blog-vue" */ "F:\\git\\My-VBlog\\src\\pages\\Blog.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "F:\\git\\My-VBlog\\src\\pages\\About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules-gridsome-0-7-21-gridsome-app-pages-404-vue" */ "F:\\git\\My-VBlog\\node_modules\\_gridsome@0.7.21@gridsome\\app\\pages\\404.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "F:\\git\\My-VBlog\\src\\pages\\Index.vue")

export default [
  {
    path: "/project/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/social/",
    component: c2
  },
  {
    path: "/blog/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
