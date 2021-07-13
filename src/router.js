import Vue from "vue";
import VueRouter from "vue-router";
import WebView from "./view/WebView.vue";
import SimpleMap from "./view/SimpleMap";
import Home from "./view/Home";
import CreatePortal from "./view/CreatePortal";
import Ol from "./view/Ol";
import MapboxView from "./view/MapboxView";
import SimpleSketch from "./view/SimpleSketch";

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
      { path: "portal", name: "portal", component: CreatePortal},
      {path:'ol',name:"ol",component: Ol},
      {path:'mapbox',name:'mapbox',component: MapboxView},
      {path:'sketch',name:'sketch',component: SimpleSketch}
    ],
  },
  { path: "/simp", name: "sim", component: SimpleMap },
];

export default new VueRouter({
  mode: "history",
  routes,
});
