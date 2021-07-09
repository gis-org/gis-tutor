<template>

  <div class="portal"></div>
</template>

<script>
import SceneView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";
import Layer from "@arcgis/core/layers/Layer";
export default {
  name: "CreatePortal",
  mounted() {
    // Adds the layer to the map once it loads
    function addLayer(layer) {
      map.add(layer);
    }

    function rejection(error) {
      console.log("Layer failed to load: ", error);
    }
    const map = new Map({
      basemap: "osm",
    });

    const view = new SceneView({
      map: map,
      container: this.$el,
      zoom: 7,
      center: [117, 31],
    });

    /************************************************
     *
     * Create a layer from an existing Portal item hosted
     * in ArcGIS Online using the ID of the item.
     *
     *************************************************/
    Layer.fromPortalItem({
      portalItem: {
        // autocasts as new PortalItem()
        id: "8444e275037549c1acab02d2626daaee",
      },
    })
      .then(addLayer)
      .catch(rejection);
  },
};
</script>

<style scoped>
.portal{
  width: 100%;
  height: 90vh;
}

</style>
