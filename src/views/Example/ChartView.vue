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
      barOneOption() {
        const option = {
          grid: {
            bottom: 150,
            left: 50,
            right: 10,
            top: 100,
          },
          legend: {
            show: true,
            bottom: 50,
            left: 'center',
            data: ['one', 'two']
          },
          xAxis: {
            type: 'category',
            splitLine: {
              show: false
            },
            data: ['星期一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
              formatter: function (params) {
                var newParamsName = "";
                var paramsNameNumber = params.length;
                var provideNumber = 2;
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                if (paramsNameNumber > provideNumber) {
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";
                    var start = p * provideNumber;
                    var end = start + provideNumber;
                    if (p == rowNumber - 1) {
                      tempStr = params.substring(start, paramsNameNumber);
                    } else {
                      tempStr = params.substring(start, end) + "\n";
                    }
                    newParamsName += tempStr;
                  }
                } else {
                  newParamsName = params;
                }
                return newParamsName
              }
            },
          },
          yAxis: {
            type: 'value',
            name: '金额/元',
            axisLine: {
              show: true
            },
            axisTick: {
              show: true,
            },
            splitLine: {
              show: false
            }
          },
          series: [{
              type: 'bar',
              name: 'one',
              data: [120, 200, 150, 80, 70, 110, {
                value: 120,
                itemStyle: {
                  color: 'blue',
                  borderRadius: 5
                },
              }],
              label: {
                show: true,
                position: 'inside',
                color: 'red',
                formatter: '{b}: {@score}'
              },
              showBackground: true,
              backgroundStyle: {
                color: 'pink'
              },
            },
            {
              type: 'bar',
              name: 'two',
              data: [120, 200, 150, 80, 70, 110, 120],
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: '#3782AD'
                }, {
                  offset: 1,
                  color: '#18D5E9'
                }])
              },
              label: {
                show: true,
                position: 'top',
                formatter: '{b}: {@score}'
              },
            }
          ]
        };
        return option
      },
      barTwoOption() {
        const option = {
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            data: ['星期一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
              formatter: function (params) {
                var newParamsName = "";
                var paramsNameNumber = params.length;
                var provideNumber = 2;
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                if (paramsNameNumber > provideNumber) {
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";
                    var start = p * provideNumber;
                    var end = start + provideNumber;
                    if (p == rowNumber - 1) {
                      tempStr = params.substring(start, paramsNameNumber);
                    } else {
                      tempStr = params.substring(start, end) + "\n";
                    }
                    newParamsName += tempStr;
                  }
                } else {
                  newParamsName = params;
                }
                return newParamsName
              }
            },
            splitLine: {
              show: false
            },
          },
          yAxis: [{
            type: 'value',
            name: '金额/万元',
            splitLine: {
              show: false
            },
            axisLine: {
              show: true
            },
            axisTick: {
              show: true,
            }
          }, {
            type: 'value',
            name: '数量/家',
            splitLine: {
              show: false
            },
            axisLine: {
              show: true
            },
            nameTextStyle: {
              color: 'green'
            }
          }],
          series: [{
              type: 'bar',
              yAxisIndex: 0,
              data: [120, 200, 150, 80, 70, 110, {
                value: 120,
                itemStyle: {
                  color: 'blue',
                  borderRadius: 5
                },
              }],
            },
            {
              type: 'bar',
              yAxisIndex: 1,
              data: [20, 150, 90, 180, 50, 60, 120]
            }
          ]
        };
        return option
      },
      barThreeOption() {
        const option = {
          grid: {
            bottom: 150,
            left: 50,
            right: 10,
            top: 100,
          },
          xAxis: {
            type: 'category',
            splitLine: {
              show: false
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          },
          yAxis: {
            type: 'value',
            name: '金额/元',
            axisLine: {
              show: true
            },
            axisTick: {
              show: true,
            },
            splitLine: {
              show: false
            }
          },
          series: [{
              type: 'bar',
              stack: 'Total',
              data: [0, 1700, 1400, 1200, 300, 100, 0],
              label: {
                show: true,
                position: 'inside',
                formatter: function (params) {
                  if (params.value === 0) {
                    return ''
                  } else {
                    return params.value
                  }
                }
              },
              itemStyle: {
                color: 'skyblue'
              }
            },
            {
              type: 'bar',
              stack: 'Total',
              data: [2900, 1200, 300, 200, 900, 200, 100],
              label: {
                show: true,
                position: 'inside'
              },
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: '#3782AD'
                }, {
                  offset: 1,
                  color: '#18D5E9'
                }])
              },
            }
          ]
        };
        return option
      },
      barFourOption() {
        const option = {
          grid: {
            bottom: 150,
            left: 50,
            right: 10,
            top: 100,
          },
          xAxis: {
            type: 'value',
            position: 'top',
            splitLine: {
              show: false
            },
          },
          yAxis: {
            type: 'category',
            axisLine: {
              show: false
            },
            axisLabel:{
              show: false
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false
            },
            data:['周一','周二','周三','周四','周五','周六','周日']
          },
          series: [{
            type: 'bar',
            data: [{
                value: -200,
                label: {position: 'right'}
              },
              {
                value: 500,
                label: {position: 'left'}
              },
              {
                value: 700,
                label: {position: 'left'}
              },
              {
                value: -200,
                label: {position: 'right'}
              },
              {
                value: 300,
                label: {position: 'left'}
              },
              {
                value: -100,
                label: {position: 'right'}
              },
              {
                value: -90,
                label: {position: 'right'}
              }
            ],
            label: {
              show: true,
              formatter: '{b}',
            },
            itemStyle: {
              color: 'skyblue'
            }
          }]
        };
        return option
      },
      option() {
        let defaultOption = null
        switch (this.defaultActive) {
          case 'pie-1':
            defaultOption = this.pieOneOption
            break;
          case 'bar-1':
            defaultOption = this.barOneOption
            break;
          case 'bar-2':
            defaultOption = this.barTwoOption
            break;
          case 'bar-3':
            defaultOption = this.barThreeOption
            break;
          case 'bar-4':
            defaultOption = this.barFourOption
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