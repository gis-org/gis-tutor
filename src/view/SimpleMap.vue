<template>
  <div class="container">
    <div class="simple-map"></div>
  </div>
</template>

<script>
import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Search from '@arcgis/core/widgets/Search'

import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
export default {
  name: "SimpleMap",
  async mounted() {
    //部分功能可能需要收费,请酌情考虑
    esriConfig.apiKey =
      "";


    const map = new Map({
      basemap: "arcgis-topographic" //Basemap layer service
    });

    const view = new MapView({
      container: this.$el,
      map: map,
      center: [-118.80543,34.02700], //Longitude, latitude
      zoom: 13
    });


    const popupTrailheads = {
      "title": '标题',
      "content": "<b>小路:</b> {TRL_NAME}<br><b>城市:</b> {CITY_JUR}<br><b>十字路:</b> {X_STREET}<br><b>Parking:</b> {PARKING}<br><b>Elevation:</b> {ELEV_FT} ft"
    }

    const trailheads = new FeatureLayer({
      url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0",
      outFields: ["TRL_NAME","CITY_JUR","X_STREET","PARKING","ELEV_FT"],
      popupTemplate: popupTrailheads
    });

    map.add(trailheads);


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
.simple-map {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
}
</style>
