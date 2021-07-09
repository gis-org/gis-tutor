<template>
<div class="simple-map"></div>
</template>

<script>
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Expand from "@arcgis/core/widgets/Expand";
import * as intl from "@arcgis/core/intl";
export default {
  name: "SimpleMap",
  async mounted() {
    intl.setLocale("zh-CN")
    const map = new Map({
      basemap: "topo-vector"
    });

    const view = new MapView({
      container: this.$el,
      map: map,
      zoom: 4,
      center: [117.13168780199648, 31.83669432640482] // longitude, latitude
    });
    // view.ui.add(map, "top-right");
  }
}
</script>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/@arcgis/core/assets/esri/css/main.css';
.simple-map{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;

}
</style>
