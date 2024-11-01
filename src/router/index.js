import VueRouter from "vue-router";
import MapTest from '../Pages/MapTest/index.vue'

// 创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
    routes: [
      {
        path: "/",
        component: MapTest,
      },
    ],
  });
  
  //暴露router
  export default router;