<template>
<div>
  <Header >

  </Header>
  <div>
    <router-view />
  </div>
</div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "Home",
  components: {Header}
}
</script>

<style scoped>

</style>
