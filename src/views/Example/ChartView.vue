<template>
  <div id="chartPie" ref="chartPie"></div>
</template>
<script>
  import * as echarts from 'echarts'
  export default {
    props: ['infoSetting', 'updata', 'defaultActive'],
    mounted() {
      this.myChart = echarts.init(this.$refs.chartPie)
      this.myChart.setOption(this.option)
    },
    computed: {
      pieOneOption() {
        const option = {
          title: {
            text: '基础饼图',
            top: 10,
            left: 'center',
          },
          legend: {
            orient: 'vertical',
            top: 30,
            left: 0
          },
          tooltip: {
            show: true,
            trigger: "item"
          },
          series: [{
            name: 'chart-pie',
            type: 'pie',
            top: 50,
            radius: [50, 120],
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 8
            },
            label: {
              formatter: '{b}\n{d}%',
              lineHeight: 16,
              fontSize: 12,
            },
            labelLine: {
              length: 5,
              length2: 6
            },
            tooltip: {
              show: true,
              trigger: "item",
              formatter: '{b}: {c}'
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
            ],
          }]
        }
        return option
      },
      pieTwoOption() {
        const option = {
          backgroundColor: "#0B1837",
          color: ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05"],
          // title: {
          //     text: '网络/安全设备',
          //     left: '60',
          //     top: 0,
          //     textAlign: 'center',
          //     textStyle: {
          //         color: '#fff',
          //         fontSize: 14,
          //         fontWeight: 0
          //     }
          // },
          grid: {
            left: -100,
            top: 50,
            bottom: 10,
            right: 10,
            containLabel: true
          },
          tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
          },
          legend: {
            type: "scroll",
            orient: "vartical",
            // x: "right",
            top: "center",
            right: "15",
            // bottom: "0%",
            itemWidth: 16,
            itemHeight: 8,
            itemGap: 16,
            textStyle: {
              color: '#A3E2F4',
              fontSize: 12,
              fontWeight: 0
            },
            data: ['IDS', 'VPN', '交换机', '防火墙', 'WAF', '堡垒机']
          },
          polar: {},
          angleAxis: {
            interval: 1,
            type: 'category',
            data: [],
            z: 10,
            axisLine: {
              show: false,
              lineStyle: {
                color: "#0B4A6B",
                width: 1,
                type: "solid"
              },
            },
            axisLabel: {
              interval: 0,
              show: true,
              color: "#0B4A6B",
              margin: 8,
              fontSize: 16
            },
          },
          radiusAxis: {
            min: 40,
            max: 120,
            interval: 20,
            axisLine: {
              show: false,
              lineStyle: {
                color: "#0B3E5E",
                width: 1,
                type: "solid"
              },
            },
            axisLabel: {
              formatter: '{value} %',
              show: false,
              padding: [0, 0, 20, 0],
              color: "#0B3E5E",
              fontSize: 16
            },
            splitLine: {
              lineStyle: {
                color: "#0B3E5E",
                width: 2,
                type: "solid"
              }
            }
          },
          calculable: true,
          series: [{
            type: 'pie',
            radius: ["5%", "10%"],
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false,
                length: 30,
                length2: 55
              },
              emphasis: {
                show: false
              }
            },
            data: [{
              name: '',
              value: 0,
              itemStyle: {
                normal: {
                  color: "#0B4A6B"
                }
              }
            }]
          }, {
            type: 'pie',
            radius: ["90%", "95%"],
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false,
                length: 30,
                length2: 55
              },
              emphasis: {
                show: false
              }
            },
            name: "",
            data: [{
              name: '',
              value: 0,
              itemStyle: {
                normal: {
                  color: "#0B4A6B"
                }
              }
            }]
          }, {
            stack: 'a',
            type: 'pie',
            radius: ['20%', '80%'],
            roseType: 'area',
            zlevel: 10,
            label: {
              normal: {
                show: true,
                formatter: "{c}",
                textStyle: {
                  fontSize: 12,
                },
                position: 'outside'
              },
              emphasis: {
                show: true
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 20,
                length2: 55
              },
              emphasis: {
                show: false
              }
            },
            data: [{
                value: 10,
                name: 'IDS'
              },
              {
                value: 5,
                name: 'VPN'
              },
              {
                value: 15,
                name: '交换机'
              },
              {
                value: 25,
                name: '防火墙'
              },
              {
                value: 20,
                name: 'WAF'
              },
              {
                value: 35,
                name: '堡垒机'
              }
            ]
          }, ]
        }
        return option
      },
      option() {
        let defaultOption = null
        switch (this.defaultActive) {
          case 'pie-1':
            defaultOption = this.pieOneOption
            break;
          case 'pie-2':
            defaultOption = this.pieTwoOption
            break;
        }
        this.$emit('setOption', defaultOption, 1)
        return defaultOption
      }
    },
    watch: {
      updata() {
        if (this.updata) {
          try {
            this.myChart.setOption(JSON.parse(this.infoSetting))
            this.$emit('setOption', JSON.parse(this.infoSetting), 2)
          } catch (error) {
            this.$message.error("JSON文件格式错误或者代码配置属性错误");
          }
        }
      },
      defaultActive() {
        this.myChart = echarts.dispose(this.$refs.chartPie)
        try {
          this.myChart = echarts.init(this.$refs.chartPie)
          this.myChart.setOption(this.option)
          this.$emit('setOption', this.option, 1)
        } catch (error) {
          this.$message.error("JSON文件格式错误或者代码配置属性错误");
        }
      }
    },
  }
</script>
<style lang="less" scoped>
  #chartPie {
    width: 100%;
    height: 100%;
  }
</style>