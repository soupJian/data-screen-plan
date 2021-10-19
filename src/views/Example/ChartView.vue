<template>
  <div id="chartDom" ref="chartDom"></div>
</template>
<script>
  import * as echarts from 'echarts'
  import chinaJson from '@/utils/china.json'
  import chinaContourJson from '@/utils/china-contour.json'
  import chinaCitiesJson from '@/utils/china-cities.json'
  import worldJson from '@/utils/world.json'

  import {
    visualMapChinaData,
    geoCoordMap,
    mapData
  } from '@/utils/chinaData.js'
  export default {
    props: ['infoSetting', 'update', 'defaultKey', 'defaultActive'],
    mounted() {
      this.myChart = echarts.init(this.$refs.chartDom)
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
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          series: [{
            type: 'bar',
            data: [{
                value: -200,
                label: {
                  position: 'right'
                }
              },
              {
                value: 500,
                label: {
                  position: 'left'
                }
              },
              {
                value: 700,
                label: {
                  position: 'left'
                }
              },
              {
                value: -200,
                label: {
                  position: 'right'
                }
              },
              {
                value: 300,
                label: {
                  position: 'left'
                }
              },
              {
                value: -100,
                label: {
                  position: 'right'
                }
              },
              {
                value: -90,
                label: {
                  position: 'right'
                }
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
      lineOneOption() {
        let xLabel = ['1', '2', '3', '4', '5', '6']
        let goToSchool = ["40", "80", "32", "85", "50", "40"]
        let goOutSchool = ["20", "50", "12", "65", "30", "60"]
        const option = {
          backgroundColor: '#0e1c47',
          legend: {
            align: "left",
            right: '5%',
            top: '10%',
            textStyle: {
              color: '#7ec7ff',
              fontSize: 16
            },
            itemGap: 25,
            itemWidth: 18,
            icon: 'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',
            data: ['数据一', '数据二']
          },
          grid: {
            top: '18%',
            left: '15%',
            right: '5%',
            bottom: '25%',
            // containLabel: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#233653'
              },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
              color: '#7ec7ff'
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#192a44'
              },
            },
            axisTick: {
              show: false,
            },
            data: xLabel
          }],
          yAxis: [{
            name: '人数',
            nameTextStyle: {
              color: "#7ec7ff",
              fontSize: 16,
              padding: 10
            },
            min: 0,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#192a44'
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#233653"
              }

            },
            axisLabel: {
              show: true,
              color: '#7ec7ff',
              formatter: function (value) {
                if (value === 0) {
                  return value
                }
                return value
              }
            },
            axisTick: {
              show: false,
            },
          }],
          series: [{
            name: '数据一',
            type: 'line',
            // smooth: true,
            symbol: 'circle',
            symbolSize: 4,
            lineStyle: {
              width: 2,
              color: "rgba(25,163,223,1)", // 线条颜色
              borderColor: 'rgba(0,0,0,.4)',
            },
            itemStyle: {
              color: "rgba(25,163,223,1)",
              borderColor: "#646ace",
              borderWidth: 2
            },
            areaStyle: { //区域填充样式
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "rgba(25,163,223,.3)"
                },
                {
                  offset: 1,
                  color: "rgba(25,163,223, 0)"
                }
              ], false),
              shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
              shadowBlur: 20
            },
            data: goToSchool
          }, {
            name: '数据二',
            type: 'line',
            smooth: true,
            showSymbol: false,
            markPoint: {
              data: [{
                type: 'max',
                name: '最大值'
              }, {
                type: 'min',
                name: '最小值'
              }],
              animationDelay: 1000,
              animationDuration: 1000,
            },
            lineStyle: {
              width: 2,
              color: "rgba(10,219,250,1)", // 线条颜色
              borderColor: 'rgba(0,0,0,.4)',
            },
            itemStyle: {
              color: "rgba(10,219,250,1)",
              borderColor: "#646ace",
              borderWidth: 2
            },
            tooltip: {
              show: true
            },
            areaStyle: { //区域填充样式
              //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "rgba(10,219,250,.3)"
                },
                {
                  offset: 1,
                  color: "rgba(10,219,250, 0)"
                }
              ], false),
              shadowColor: 'rgba(10,219,250, 0.5)', //阴影颜色
              shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            },
            data: goOutSchool
          }]
        };
        return option
      },
      mapOneOption() {
        const option = {
          title: {
            text: '中国地图',
            top: 50,
            left: 'center',
            subtext: '地图轮廓 & 地图热力值'
          },
          visualMap: {
            show: true,
            min: 0,
            max: 100,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],
            calculable: true,
            inRange: {
              color: ['#ffffff', '#E0DAFF', '#ADBFFF', '#9CB4FF', '#6A9DFF', '#3889FF']
            }
          },
          geo: {
            type: 'map',
            map: 'china',
            itemStyle: {
              borderWidth: '2',
              borderColor: 'blue'
            }
          },
          series: [{
            type: 'map',
            map: 'china',
            silent: true,
            itemStyle: {
              borderWidth: .5
            },
            data: visualMapChinaData
          }]
        }
        return option
      },
      mapTwoOption() {
        const option = {
          title: {
            text: '中国地图',
            top: 50,
            left: 'center',
            subtext: '点图和涟漪图'
          },
          tooltip: {
            padding: 0,
            enterable: true,
            transitionDuration: 1,
            textStyle: {
              color: '#000',
              decoration: 'none',
            },
            formatter: function (params) {
              var tipHtml = '';
              tipHtml =
                '<div style="width:80px;height:80px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">' +
                '<div style="width:100%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);padding:0 5px">' +
                '<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;border-radius:5px;">' +
                '</i>' +
                '<span style="margin-left:10px;color:#fff;font-size:16px;">' + params.name + '</span>' + '</div>' +
                '<div style="padding:5px">' +
                '<p style="color:#fff;font-size:12px;">' +
                '总数：' + '<span style="color:#11ee7d;">' + params.value + '</span>' + '个' + '</p>' +
                '</div>' + '</div>';
              return tipHtml;
            }
          },
          visualMap: {
            show: true,
            min: 0,
            max: 100,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],
            calculable: true,
            inRange: {
              color: ['#ffffff', '#E0DAFF', '#ADBFFF', '#9CB4FF', '#6A9DFF', '#3889FF']
            },
            seriesIndex: 0
          },
          geo: {
            type: 'map',
            map: 'china',
            itemStyle: {
              borderWidth: '2',
              borderColor: 'blue'
            },
            silent: true
          },
          series: [{
              type: 'map',
              map: 'china',
              itemStyle: {
                borderWidth: .5
              },
              data: visualMapChinaData
            },
            {
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
              data: this.convertData(mapData.sort(function (a, b) {
                return b.value - a.value;
              }).slice(10, -1)),
            },
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: this.convertData(mapData.sort(function (a, b) {
                return b.value - a.value;
              }).slice(0, 10)),
              label: {
                show: true,
                position: 'top',
                formatter: function (params) {
                  return params.name
                },
                fontSize: 12
              },
              rippleEffect: {
                brushType: 'stroke'
              },
              itemStyle: {
                color: 'yellow',
                shadowBlur: 10,
                shadowColor: 'yellow'
              }
            }
          ]
        }
        return option
      },
      mapThreeOption() {
        const dataFrom = '北京'
        const option = {
          title: {
            text: '中国地图',
            top: 50,
            left: 'center',
            subtext: '飞线图'
          },
          visualMap: {
            show: true,
            min: 0,
            max: 100,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],
            calculable: true,
            inRange: {
              color: ['#ffffff', '#E0DAFF', '#ADBFFF', '#9CB4FF', '#6A9DFF', '#3889FF']
            },
            seriesIndex: 0
          },
          geo: {
            type: 'map',
            map: 'china',
            itemStyle: {
              borderWidth: '2',
              borderColor: 'blue'
            },
            silent: true,
          },
          series: [{
              type: 'map',
              map: 'china',
              silent: true,
              itemStyle: {
                borderWidth: -1
              },
              data: visualMapChinaData
            },
            {
              type: 'scatter',
              coordinateSystem: 'geo',
              label: {
                show: true,
                formatter: function (params) {
                  return params.name
                },
                position: 'top'
              },
              symbol: 'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
              data: this.convertData([{
                name: "北京",
                value: 100
              }]),
            },
            {
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z',
              data: this.convertData(mapData.sort(function (a, b) {
                return b.value - a.value;
              }).slice(0, 10)),
              label: {
                show: true,
                formatter: function (params) {
                  return params.name
                },
                position: 'top'
              }
            },
            {
              type: 'lines',
              zlevel: 2,
              lineStyle: {
                color: 'blue',
                width: 2,
                curveness: -.5,
              },
              effect: {
                show: true,
                symbol: 'triangle',
                symbolSize: 5,
                color: '#fff',
                trailLength: .2,
              },
              data: mapData.sort(function (a, b) {
                return b.value - a.value;
              }).slice(0, 10).map(function (dataItem) {
                return {
                  fromName: dataFrom,
                  toName: dataItem.name,
                  coords: [
                    geoCoordMap[dataFrom],
                    geoCoordMap[dataItem.name]
                  ]
                }
              })
            }
          ]
        }
        return option
      },
      mapFourOption() {
        const option = {
          title: {
            text: '中国地图',
            top: 50,
            left: 'center',
            subtext: '地推边框线'
          },
          series: [{
              type: 'map',
              map: 'china-contour',
              itemStyle: {
                borderWidth: '2',
                borderColor: 'blue'
              },
              silent: true,
            },
            {
              type: 'map',
              map: 'china',
              data: visualMapChinaData
            }
          ]
        }
        return option
      },
      mapFiveOption() {
        const option = {
          title: {
            text: '中国地图',
            top: 50,
            left: 'center',
            subtext: '城市地图'
          },
          series: [{
            type: 'map',
            map: 'china-contour',
            top: 75,
            silent: true,
            itemStyle: {
              borderWidth: 2,
              borderColor: 'red'
            }
          }, {
            type: 'map',
            map: 'china-cities',
            itemStyle: {
              borderColor: 'blue'
            }
          }]
        }
        return option
      },
      mapSixOption() {
        const option = {
          title: {
            text: '世界地图',
            top: 50,
            left: 'center',
          },
          series: [{
            type: 'map',
            map: 'world'
          }]
        }
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
          case 'line-1':
            defaultOption = this.lineOneOption
            break;
          case 'map-1':
            defaultOption = this.mapOneOption
            break;
          case 'map-2':
            defaultOption = this.mapTwoOption
            break;
          case 'map-3':
            defaultOption = this.mapThreeOption
            break;
          case 'map-4':
            defaultOption = this.mapFourOption
            break;
          case 'map-5':
            defaultOption = this.mapFiveOption
            break;
          case 'map-6':
            defaultOption = this.mapSixOption
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
            this.myChart.setOption(JSON.parse(this.infoSetting))
            this.$emit('setOption', JSON.parse(this.infoSetting), 2)
          } catch (error) {
            this.$message.error("JSON文件格式错误或者代码配置属性错误");
          }
        }
      },
      defaultActive() {
        if (this.defaultKey === 'map') {
          echarts.registerMap('china', chinaJson)
          if (this.defaultActive === 'map-4') {
            echarts.registerMap('china-contour', chinaContourJson)
          }
          if (this.defaultActive === 'map-5') {
            echarts.registerMap('china-cities', chinaCitiesJson)
          }
          if (this.defaultActive === 'map-6') {
            echarts.registerMap('world', worldJson)
          }
        }
        this.myChart = echarts.dispose(this.$refs.chartDom)
        try {
          this.myChart = echarts.init(this.$refs.chartDom)
          this.myChart.setOption(this.option)
          this.$emit('setOption', this.option, 1)
        } catch (error) {
          this.$message.error("JSON文件格式错误或者代码配置属性错误");
        }
      },
    },
    methods: {
      convertData(data) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
          let geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
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