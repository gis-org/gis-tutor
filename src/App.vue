<template>
  <div  >
    <router-view />

  </div>
</template>

<script>

import WebView from "./view/WebView";
import SimpleMap from "./view/SimpleMap";
export default {
  name: 'App',
  components: { },
}
</script>
<style>
html,
body
 {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
