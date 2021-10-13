<template>
  <div class="document">
    <div class="document-left">
      <el-menu :default-active="defaultActive" class="el-menu" router background-color="#545c64" text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>大屏适配方案</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="dashboard" route="/document/dashboard">适配方案</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>markdown</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1" route="/document/markdown-highlight">code highlight line</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="document-right">
      <router-view />
    </div>
  </div>

</template>
<script>
  export default {
    data(){
      return{
        defaultActive: 'dashboard'
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted(){
      const path = this.$route.path
      const arr = path.split('/')
      this.defaultActive = arr[arr.length-1]
    }
  }
</script>
<style lang="less" scoped>
  /deep/ .el-menu {
    max-height: none;
  }

  .document {
    width: 100%;
    max-width: 100%;

    .document-left {
      width: 200px;
      position: fixed;
      left: 0;
      bottom: 0;
      top: 61px;

      .el-menu {
        height: 100%;
        max-height: none;
      }
    }

    .document-right {
      margin-left: 200px;
    }
  }
</style>