import Vue from "vue";
import VueRouter from "vue-router";
import WebView from "./view/WebView.vue";
import SimpleMap from "./view/SimpleMap";
import Home from "./view/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/main/simple",
  },
  {
    path: "/main",
    name: "index",
    component: Home,
    children: [
      { path: "simple", name: "simpleMap", component: SimpleMap },
      { path: "webview", name: "webview", component: WebView },
    ],
  },
  { path: "/simp", name: "sim", component: SimpleMap },
];

export default new VueRouter({
  mode: "history",
  routes,
});
