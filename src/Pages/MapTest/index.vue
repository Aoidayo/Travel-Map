<template>
  <div>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :zoom="zoom" :center="center">
        <!-- @zoomstart="handleAmapZoomStart" -->
        <el-amap-marker
          v-for="(marker, index) in markers"
          :key="index"
          :position="marker.position"
          :icon="marker.icon"
          @click="
            (e) => {
              clickArrayMarker(marker, e);
            }
          "
        ></el-amap-marker>
        <el-amap-info-window
          :position="infoPosition"
          :visible.sync="infoVisible"
          :autoMove="true"
        >
          <el-card shadow="never" border="none" v-loading="isLoading">
            <el-row
              style="
                margin-bottom: 4px;
                border-bottom: 1px solid rgb(64, 158, 255);
              "
              >{{ infoText }}</el-row
            >
            <el-image :src="infoImgSrc" :style="imgSize"></el-image>
            <el-row>
              <el-button @click="closeInfo" style="float: right"
                >关闭</el-button
              >
            </el-row>
          </el-card>
        </el-amap-info-window>
      </el-amap>
    </div>
  </div>
</template>

<script>
export default {
  name: "MapTest",
  data() {
    return {
      imgSize: {
        width: `300px`,
        height: `500px`,
      },
      zoom: 5,
      center: [117.144521, 34.215107],
      infoVisible: false,
      infoPosition: [117.144521, 34.215107],
      infoText: "0",
      infoImgSrc: require("../../assets/someday.jpeg"),
      isLoading: false,
      markers: [
        {
          position: [117.144521, 34.215107],
          id: 1,
          title: "矿大",
          content: "读了几年,不是很熟",
          img: require("../../assets/someday.jpeg"),
          // icon: new AMap.Icon({
          //   // 图标尺寸
          //   size: new AMap.Size(25, 34),
          //   // 图标的取图地址
          //   image:
          //     "//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png",
          //   // 图标所用图片大小
          //   imageSize: new AMap.Size(135, 40),
          //   // 图标取图偏移量
          //   imageOffset: new AMap.Pixel(-9, -3),
          // }),
        },
        {
          position: [116.407387, 39.904179],
          id: 2,
          title: "北京",
          content: "北京",
          img: require("../../assets/bj.jpg"),
        },
        {
          position: [120.614262, 36.181091],
          id: 3,
          title: "青岛崂山",
          content: "天很蓝，海很蓝",
          img: require("../../assets/qd.jpg"),
        },
        {
          position: [112.477463, 34.558782],
          id: 4,
          title: "龙门石窟",
          content: "很壮观",
          img: require("../../assets/ly.jpg"),
        },
        {
          position: [113.366749, 40.09711],
          id: 5,
          title: "大同",
          content: "(♥∀♥)",
          img: require("../../assets/dt.jpg"),
        },
        {
          position: [118.798039, 31.96875],
          id: 6,
          title: "南京",
          content: "来的前一天晚上下雪了",
          img: require("../../assets/nj.jpg"),
        },
        {
          position: [120.709122, 32.154714],
          id: 7,
          title: "南通",
          content: "我家",
          img: require("../../assets/nt.jpg"),
          // icon: new AMap.Icon({
          //   // 图标尺寸
          //   size: new AMap.Size(25, 34),
          //   // 图标的取图地址
          //   image:
          //     "//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png",
          //   // 图标所用图片大小
          //   imageSize: new AMap.Size(135, 40),
          //   // 图标取图偏移量
          //   imageOffset: new AMap.Pixel(-9, -3),
          // }),
        },
        {
          position: [117.10884, 36.257434],
          id: 8,
          title: "泰山",
          content: "说来就来了",
          img: require("../../assets/ts.jpg"),
        },
        {
          position: [117.015873, 36.661073],
          id: 9,
          title: "济南",
          content: "一日游",
          img: require("../../assets/jn.jpg"),
        },
      ],
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth < 600;
    },
  },
  mounted() {
    // let img = require("../../assets/someday.jpeg");
    // console.log(img);
    if (this.isMobile) {
      // 响应式
      this.imgSize.width = `150px`;
      this.imgSize.height = `250px`;
    }
  },
  methods: {
    clickMarker() {
      alert("点击了标号");
    },
    clickArrayMarker(marker) {
      console.log(marker);
      // alert("点击了标号,标号ID： " + marker.id);
      console.log("点击了标号,标号ID： " + marker.id);
      //
      // this.infoPosition = marker.position;
      this.infoPosition = [
        marker.position[0] + 0.0,
        marker.position[1] + 0.001,
      ];
      this.infoImgSrc = marker.img;

      this.infoText = marker.title + ":  " + marker.content;
      console.log(this.infoText);
      this.infoVisible = true;
      this.isLoading = true;
      setTimeout(() => {
        // 延迟加载
        this.isLoading = false;
      }, 0);
    },
    handleAmapZoomStart() {
      if (this.infoVisible) {
        this.infoVisible = false;
        this.infoImgSrc = null;
      }
    },
    closeInfo() {
      this.infoVisible = false;
    },
  },
};
</script>

<style>
.amap-wrapper {
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
