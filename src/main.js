import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import VueAMap from "@vuemap/vue-amap";
import "@vuemap/vue-amap/dist/style.css";

Vue.config.productionTip = false;

//演示全部引入
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css"; // 引入
Vue.use(ElementUI); // 使用ElementUI
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: "726723d119c2081d5040910b38def887",
  plugin: [
    // "AMap.Autocomplete",
    // "AMap.PlaceSearch",
    // "AMap.Scale",
    // "AMap.OverView",
    // "AMap.ToolBar",
    // "AMap.MapType",
    // "AMap.PolyEditor",
    // "AMap.CircleEditor",
    "AMap.Autocomplete", //输入提示插件
    "AMap.PlaceSearch", //POI搜索插件
    "AMap.Scale", //右下角缩略图插件 比例尺
    "AMap.OverView", //地图鹰眼插件
    "AMap.ToolBar", //地图工具条
    "AMap.MapType", //类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    "AMap.PolyEditor", //编辑 折线多，边形
    "AMap.CircleEditor", //圆形编辑器插件
    "AMap.Geolocation", //定位控件，用来获取和展示用户主机所在的经纬度位置
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: "1.4.4",
});

Vue.use(VueRouter);
new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
