<template>
  <div id="chartDom" ref="chartDom"></div>
</template>
<script>
  import chinaJson from '@/utils/china.json'
  import chinaContourJson from '@/utils/china-contour.json'
  import chinaCitiesJson from '@/utils/china-cities.json'
  import worldJson from '@/utils/world.json'
  import {pieOneOption,barOneOption,barTwoOption,barThreeOption,barFourOption,lineOneOption,mapOneOption,mapTwoOption,mapThreeOption,mapFourOption,mapFiveOption,mapSixOption} from './chartOption'
  export default {
    props: ['code', 'update', 'defaultKey', 'defaultActive'],
    data() {
      return {
        showTipTimer: null
      }
    },
    mounted() {
      this.myChart = this.$echarts.init(this.$refs.chartDom)
      this.myChart.setOption(this.option,true)
    },
    computed: {
      option() {
        let defaultOption = null
        switch (this.defaultActive) {
          case 'pie-1':
            defaultOption = pieOneOption
            break;
          case 'bar-1':
            defaultOption = barOneOption
            break;
          case 'bar-2':
            defaultOption = barTwoOption
            break;
          case 'bar-3':
            defaultOption = barThreeOption
            break;
          case 'bar-4':
            defaultOption = barFourOption
            break;
          case 'line-1':
            defaultOption = lineOneOption
            break;
          case 'map-1':
            defaultOption = mapOneOption
            break;
          case 'map-2':
            defaultOption = mapTwoOption
            break;
          case 'map-3':
            defaultOption = mapThreeOption
            break;
          case 'map-4':
            defaultOption = mapFourOption
            break;
          case 'map-5':
            defaultOption = mapFiveOption
            break;
          case 'map-6':
            defaultOption = mapSixOption
            break;
        }
        this.$emit('setOption', defaultOption, 1)
        return defaultOption
      }
    },
    watch: {
      update() {
        if (this.update) {
          try {
            this.myChart.setOption(JSON.parse(this.code),true)
            this.$emit('setOption', JSON.parse(this.code), 2)
          } catch (error) {
            this.$message.error("JSON文件格式错误或者代码配置属性错误");
          }
        }
      },
      defaultActive() {
        clearInterval(this.showTipTimer);
        this.myChart = this.$echarts.dispose(this.$refs.chartDom)
        try {
          if (this.defaultKey === 'map') {
            this.$echarts.registerMap('china', chinaJson)
            if (this.defaultActive === 'map-4') {
              this.$echarts.registerMap('china-contour', chinaContourJson)
            }
            if (this.defaultActive === 'map-5') {
              this.$echarts.registerMap('china-cities', chinaCitiesJson)
            }
            if (this.defaultActive === 'map-6') {
              this.$echarts.registerMap('world', worldJson)
            }
          }
          this.myChart = this.$echarts.init(this.$refs.chartDom)
          this.myChart.setOption(this.option,true)
          this.$emit('setOption', this.option, 1)
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
              this.showTipTimer = setInterval(()=> {
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
      },
    }
  }
</script>
<style lang="less" scoped>
  #chartDom {
    width: 100%;
    height: 100%;
  }
</style>