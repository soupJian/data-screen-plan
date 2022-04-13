<template>
  <div id="chartDom" ref="chartDom"></div>
</template>
<script>
  import chinaJson from '@/utils/china.json'
  import chinaContourJson from '@/utils/china-contour.json'
  import chinaCitiesJson from '@/utils/china-cities.json'
  import worldJson from '@/utils/world.json'
  export default {
    props: ['option'],
    data() {
      return {
        showTipTimer: null,
      }
    },
    mounted() {
      // this.changeActive()
      this.myChart = this.$echarts.init(this.$refs.chartDom)
      this.setOption()
    },
    methods:{
      setOption(){
        // 将字符串转化为 对象
        const chartOption = new Function('echarts',`try{
          ${this.option}
          if(option){
            return option
          }
        }catch(e){console.log(e)}`)(this.$echarts)
        this.myChart.setOption(chartOption, true)
      }
    },
    watch: {
      // 修改左侧菜单栏
      option() {
        this.showTipTimer && clearInterval(this.showTipTimer);
        this.myChart = this.$echarts.dispose(this.$refs.chartDom)
        try {
          if (this.defaultKey === 'map') {
            if (this.defaultActive === 'map-4') {
              this.$echarts.registerMap('china-contour', chinaContourJson)
            }else if (this.defaultActive === 'map-5') {
              this.$echarts.registerMap('china-cities', chinaCitiesJson)
            }else if (this.defaultActive === 'map-6') {
              this.$echarts.registerMap('world', worldJson)
            }else{
              this.$echarts.registerMap('china', chinaJson)
            }
          }
          this.myChart = this.$echarts.init(this.$refs.chartDom)
          this.setOption()
          if (this.defaultActive === 'line-1') {
            let index = 0; //播放所在下标
            this.showTipTimer = setInterval(() => {
              this.myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: index
              });
              index++;
              if (index >= this.option.series[0].data.length) {
                index = 0;
              }
            }, 2000)
            this.myChart.on('mouseover', (params) => {
              clearInterval(this.showTipTimer);
              this.myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: params.dataIndex,
              });
            });
            this.myChart.on('mouseout', () => {
              clearInterval(this.showTipTimer);
              this.showTipTimer = setInterval(() => {
                this.myChart.dispatchAction({
                  type: 'showTip',
                  seriesIndex: 0,
                  dataIndex: index
                });
                index++;
                if (index >= this.option.series[0].data.length) {
                  index = 0;
                }
              }, 2000);
            });
          } else {
            clearInterval(this.showTipTimer);
          }
        } catch (error) {
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