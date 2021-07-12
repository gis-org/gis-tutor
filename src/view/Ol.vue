<template>
  <div>
    <div id="viewDiv"></div>
    <div id="editorDiv"></div>
  </div>
</template>

<script>
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import Editor from "@arcgis/core/widgets/Editor";
export default {
  name: "Ol",
  mounted() {

    let pointLayer, lineLayer, polygonLayer;
    const webmap = new WebMap({
      basemap:'osm',
      portalItem: {
        id: "459a495fc16d4d4caa35e92e895694c8",
      },
    });

    const view = new MapView({
      container: "viewDiv",
      map: webmap,
      center:[117.13168780199648, 31.83669432640482]
    });

    view.when(() => {
      view.map.loadAll().then(() => {
        view.map.allLayers.forEach((layer) => {
          if (layer.type === "feature") {
            switch (layer.geometryType) {
              case "polygon":
                polygonLayer = layer;
                break;
              case "polyline":
                lineLayer = layer;
                break;
              case "point":
                pointLayer = layer;
                break;
            }
          }
        });

        // Create layerInfos for layers in Editor. This
        // sets the fields for editing.

        const pointInfos = {
          layer: pointLayer,
          fieldConfig: [
            {
              name: "HazardType",
              label: "头部数据",
            },
            {
              name: "Description",
              label: "描述",
            },
            {
              name: "SpecialInstructions",
              label: "特殊的介绍",
            },
            {
              name: "Status",
              label: "Status",
            },
            {
              name: "Priority",
              label: "Priority",
            },
          ],
        };

        const lineInfos = {
          layer: lineLayer,
          fieldConfig: [
            {
              name: "Severity",
              label: "Severity",
            },
            {
              name: "blocktype",
              label: "Type of blockage",
            },
            {
              name: "fullclose",
              label: "Full closure",
            },
            {
              name: "active",
              label: "Active",
            },
            {
              name: "locdesc",
              label: "地点描述",
            },
          ],
        };

        const polyInfos = {
          layer: polygonLayer,
          fieldConfig: [
            {
              name: "incidenttype",
              label: "Incident Type",
            },
            {
              name: "activeincid",
              label: "Active",
            },
            {
              name: "descrip",
              label: "特殊介绍",
            },
          ],
        };

        const editor = new Editor({
          view: view,
          layerInfos: [
            {
              layer: pointLayer,
              fieldConfig: [pointInfos],
            },
            {
              layer: lineLayer,
              fieldConfig: [lineInfos],
            },
            {
              layer: polygonLayer,
              fieldConfig: [polyInfos],
            },
          ],
          // Set the snapping options for the Editor. By default, snapping is enabled. This can be toggled on/off using the CTRL key.
          snappingOptions: {
            enabled: true,
            selfEnabled: true,
            featureEnabled: true,
            featureSources: [
              {
                layer: pointLayer,
              },
              {
                layer: lineLayer,
              },
              {
                layer: polygonLayer,
              },
            ],
          },
        });
        // Add widget to top-right of the view
        view.ui.add(editor, "top-right");
      });
    });
  },
};
</script>

<style scoped>
@import "https://js.arcgis.com/4.20/esri/themes/light/main.css";
#viewDiv {
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100%;
}

.esri-editor .esri-item-list__scroller {
  max-height: 350px;
}
</style>
