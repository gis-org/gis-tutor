<template>
<div class="header">
  <el-menu :default-active="activeIndex" router   mode="horizontal" @select="handleSelect">
    <el-menu-item index="/main/simple">simple</el-menu-item>
    <el-menu-item index="/main/webview">webview</el-menu-item>
    <el-menu-item index="/main/portal">create</el-menu-item>
    <el-menu-item index="/main/ol">open</el-menu-item>


  </el-menu>
</div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }

  }
}
</script>

<style scoped>
.header{
  height: 40px;

}
</style>
