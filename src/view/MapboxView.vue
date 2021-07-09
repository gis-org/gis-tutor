<template>
  <div id="mapbox1"></div>
</template>

<script>
import "mapbox-gl/dist/mapbox-gl.css";
import mapBoxGl from "mapbox-gl";
export default {
  name: "MapboxView",
  mounted() {
    mapBoxGl.accessToken =
      "pk.eyJ1IjoieXpxZGV2IiwiYSI6ImNrcXU4a2I3djAyNXUybms5Nmg5MmNsNDUifQ.id9oVeC2X4mPochQ2i5S_g";
    const basemapEnum = "ArcGIS:Streets";

    const map = new mapBoxGl.Map({
      container: "mapbox1",
      style:'mapbox://styles/mapbox/streets-v11',
      // style: `https://basemaps-api.arcgis.com/arcgis/rest/services/styles/${basemapEnum}?type=style&token=${apiKey}`,
      zoom: 12, // starting zoom
      center: [-118.805, 34.027], // starting location [longitude, latitude]
    });
    map.addControl(
      new mapBoxGl.FullscreenControl({
        container: document.querySelector("#mapbox1"),
      }),
      "top-right"
    );
  },
};
</script>

<style scoped>
#mapbox1 {
  width: 100%;
  height: 90vh;
}
</style>
