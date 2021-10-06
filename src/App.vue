<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect"
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="logo" disabled style="cursor: pointer;">logologologologologo</el-menu-item>
      <el-menu-item index="home">首页</el-menu-item>
      <el-menu-item index="document">文档</el-menu-item>
      <el-menu-item index="example">示例</el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    methods: {
      handleSelect(key) {
        this.$router.push(`/${key}`)
        this.$store.commit('home/setActiveKey', key)
      }
    },
    computed: {
      ...mapState({
        activeIndex: state => state.home.activeKey
      })
    },
  }
</script>

<style lang="less">
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #app {
    width: 100vw;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .el-menu {
    max-height: 61px;
    overflow: hidden;
  }
</style>