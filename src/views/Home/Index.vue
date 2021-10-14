<template>
  <div class="home">
    <div class="title">数据可视化方案平台</div>
    <div class="sub-title">基于echarts数据可视化图表库</div>
    <div class="button-link">
      <el-button type="danger" round @click="handleRouterChange('document')"><i
          class="el-icon-document el-icon--left"></i>快速入门</el-button>
      <el-button round plain @click="handleRouterChange('example')"><i class="el-icon-message el-icon--left"></i>所有示例
      </el-button>
    </div>
    <div id="chart-home" ref="myChart"></div>
    <div class="footer">soupjian提供技术支持</div>
  </div>
</template>
<script>
  import * as echarts from 'echarts'
  export default {
    data() {
      return {
        myChart: null
      }
    },
    methods: {
      handleRouterChange(type) {
        this.$router.push(`/${type}`)
        this.$store.commit('home/setActiveKey', `${type}`)
      },
      initChart() {
        const option = {
          series: [{
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 200],
            label: {
              show: false
            },
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 8
            },
            data: [{
                value: 40,
                name: 'rose 1'
              },
              {
                value: 38,
                name: 'rose 2'
              },
              {
                value: 32,
                name: 'rose 3'
              },
              {
                value: 30,
                name: 'rose 4'
              },
              {
                value: 28,
                name: 'rose 5'
              },
              {
                value: 26,
                name: 'rose 6'
              },
              {
                value: 22,
                name: 'rose 7'
              },
              {
                value: 18,
                name: 'rose 8'
              }
            ]
          }]
        }
        this.myChart.setOption(option)
      }
    },
    mounted() {
      this.myChart = echarts.init(this.$refs.myChart)
      this.initChart()
    }
  }
</script>
<style lang="less" scoped>
  .home {
    margin: 0 auto;
    margin-top: 30vh;
    padding: 0 100px;
    position: relative;

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

    #chart-home {
      height: 400px;
      width: 400px;
      top: -30%;
      position: absolute;
      right: 50px;
      z-index: -100;
    }
    .footer{
      position: fixed;
      bottom: 10px;
      left: 0;
      width: 100%;
      text-align: center;
    }
  }
</style>