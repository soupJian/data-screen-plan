<template>
  <div class="home">
    <div class="title">数据可视化方案平台</div>
    <div class="sub-title">基于echarts数据可视化</div>
    <div class="button-link">
      <el-button type="danger" round @click="handleRouterChange('document')"><i
          class="el-icon-document el-icon--left"></i>快速文档</el-button>
      <el-button round plain @click="handleRouterChange('example')"><i class="el-icon-message el-icon--left"></i>所有示例
      </el-button>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      handleRouterChange(type) {
        this.$router.push(`/${type}`)
        this.$store.commit('home/setActiveKey', `${type}`)
      }
    },
  }
</script>
<style lang="less" scoped>
  .home {
    margin-top: 20vh;
    padding: 0 30px;

    .title {
      font-size: 55px;
      font-weight: 800;
      color: #081642;
      line-height: 1.2em;
    }

    .sub-title {
      font-size: 21px;
      color: #1d2b5a;
      margin-top: 15px;
    }

    .button-link {
      margin-top: 40px;
    }
  }
</style>