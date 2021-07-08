<template>
<div class="simple-map"></div>
</template>

<script>
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Expand from "@arcgis/core/widgets/Expand";
export default {
  name: "SimpleMap",
  async mounted() {
    const map = new Map({
      basemap: "topo-vector"
    });

    const view = new MapView({
      container: this.$el,
      map: map,
      zoom: 4,
      center: [15, 65] // longitude, latitude
    });
    // view.ui.add(map, "top-right");
  }
}
</script>

<style scoped>
@import 'https://js.arcgis.com/4.19/@arcgis/core/assets/esri/themes/light/main.css';
.simple-map{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;

}
</style>
