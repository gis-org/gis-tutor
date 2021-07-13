<template>
  <div class="container">
    <div class="simple-sketch"></div>
  </div>
</template>

<script>
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Sketch from "@arcgis/core/widgets/Sketch";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
export default {
  name: "SimpleSketch",
  async mounted() {
    const graphicsLayer = new GraphicsLayer();
    const map = new Map({
      basemap: "topo-vector",
      layers: [graphicsLayer],
      //Basemap layer service
    });

    const view = new MapView({
      container: this.$el,
      map: map,
      center: [-118.80543, 34.027], //Longitude, latitude
      zoom: 13,
    });

    await view.when(() => {
      const sketch = new Sketch({
        layer: graphicsLayer,
        view: view,
        // graphic will be selected as soon as it is created
        creationMode: "update",
      });

      view.ui.add(sketch, "top-right");
    });
  },
};
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/@arcgis/core/assets/esri/css/main.css";
.container {
  padding: 0;
  margin: 0;
  width: 100%;
}
.simple-sketch {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
}
</style>
