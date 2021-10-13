<template>
  <div id="app">
    <header>
      <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="logo" disabled style="cursor: pointer;">logologologologologo</el-menu-item>
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/document">文档</el-menu-item>
        <el-menu-item index="/example">示例</el-menu-item>
      </el-menu>
    </header>
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
        this.$router.push(`${key}`)
        this.$store.commit('home/setActiveKey', key)
      }
    },
    computed: {
      ...mapState({
        activeIndex: state => state.home.activeKey
      }),
      activeRouter() {
        return this.$route.path
      }
    }
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
    overflow: auto;
  }

  // ol{
  //   padding-inline-start: 30px;
  //   li{
  //     &::marker{
  //       color: #7f7c7c;
  //     }
  //   }
  // }
  .hljs ol {
    margin: 0 0 0 35px;
    padding: 0;
    list-style-type: decimal;
  }

  .hljs ol li {
    padding-left: 10px;
    color: #abb2bf;
    white-space: pre;
    list-style-position: outside;
    border-left: 1px solid #c5c5c5;
  }

  header {
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
  }

  .el-menu {
    max-height: 61px;
    overflow: hidden;
  }

  .el-menu.el-menu--horizontal {
    border-bottom: 2px solid rgb(84, 92, 100) !important;
  }
</style>