<template>
  <div>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :zoom="zoom" :center="center">
        <el-amap-marker
          v-for="(marker, index) in markers"
          :key="index"
          :position="marker.position"
          onclick="
            (e) => {
              clickArrayMarker(marker, e);
            }
          "
        ></el-amap-marker>
        <el-amap-info-window
          :position="infoPosition"
          :visible.sync="infoVisible"
        >
          <div>
            <p>{{ infoText }}</p>
          </div>
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
      zoom: 14,
      center: [117.144521, 34.215107],
      infoVisible: false,
      infoPosition: [117.144521, 34.215107],
      infoText: "0",
      markers: [
        {
          position: [117.144521, 34.215107],
          id: 1,
          // title: "俺的学校",
          // content: "俺的学校",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    markerInit(e) {
      console.log("marker init: ", e);
    },
    clickArrayMarker(marker) {
      console.log(marker);
      alert("点击了标号,标号ID： " + marker.id);
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
