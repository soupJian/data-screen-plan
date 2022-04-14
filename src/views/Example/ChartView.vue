<template>
  <div id="chartDom" ref="chartDom"></div>
</template>
<script>
  import chinaJson from '@/utils/china.json'
  import chinaContourJson from '@/utils/china-contour.json'
  import chinaCitiesJson from '@/utils/china-cities.json'
  import worldJson from '@/utils/world.json'
  export default {
    props: ['option','defaultKey','defaultActive'],
    data() {
      return {
        showTipTimer: null,
      }
    },
    mounted() {
      this.myChart = this.$echarts.init(this.$refs.chartDom)
      this.setChartOption()
    },
    methods:{
      setChartOption(){
        if (this.defaultKey === 'map') {
          if (this.defaultActive === 'map-4') {
            // 中国地图边框线
            this.$echarts.registerMap('china-contour', chinaContourJson)
          }else if (this.defaultActive === 'map-5') {
            // 城市地图
            this.$echarts.registerMap('china-cities', chinaCitiesJson)
          }else if (this.defaultActive === 'map-6') {
            // 世界地图
            this.$echarts.registerMap('world', worldJson)
          }else{
            // 中国地图
            this.$echarts.registerMap('china', chinaJson)
          }
        }
        // 将字符串转化为 对象
        const chartOption = new Function('echarts,myChart',`try{
          ${this.option}
          if(option){
            return option
          }
        }catch(e){console.log(e)}`)(this.$echarts,this.myChart)
        this.myChart.setOption(chartOption, true)
      }
    },
    watch: {
      // 修改左侧菜单栏
      option() {
        // this.showTipTimer && clearInterval(this.showTipTimer);
        this.myChart = this.$echarts.dispose(this.$refs.chartDom)
        try {
          this.myChart = this.$echarts.init(this.$refs.chartDom)
          this.setChartOption()
        } catch (error) {
          console.log(error);
          this.$message.error("JSON文件格式错误或者代码配置属性错误");
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  #chartDom {
    width: 100%;
    height: 100%;
  }
</style>