// 饼图
export const pieOneOption = `const data = [
  {
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
      formatter: '{b}\\n{d}%',
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
    data: data
  }]
}`
// 柱状图
export const barOneOption = `function formatterLabel (params) {
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
        tempStr = params.substring(start, end);
      }
      newParamsName += tempStr + '\\n';
    }
  } else {
    newParamsName = params;
  }
  return newParamsName
}
const Xdata = ['星期一', '周二', '周三', '周四', '周五', '周六', '周日']
const barOneData = [120, 200, 150, 80, 70, 110, {
  value: 120,
  itemStyle: {
    color: 'blue',
    borderRadius: 5
  },
}]
const barTwoData = [120, 200, 150, 80, 70, 110, 120]
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
    data: Xdata,
    axisLabel: {
      formatter: function (params) {
        return formatterLabel(params)
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
      data: barOneData,
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
      data: barTwoData,
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
}`
export const barTwoOption = `function formatterLabel (params) {
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
        tempStr = params.substring(start, end);
      }
      newParamsName += tempStr + '\\n';
    }
  } else {
    newParamsName = params;
  }
  return newParamsName
}
const Xdata = ['星期一', '周二', '周三', '周四', '周五', '周六', '周日']
const barOneData = [120, 200, 150, 80, 70, 110, {
  value: 120,
  itemStyle: {
    color: 'blue',
    borderRadius: 5
  },
}]
const barTwoData = [120, 200, 150, 80, 70, 110, 120]
const option = {
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: Xdata,
    axisLabel: {
      formatter: function (params) {
        return formatterLabel(params)
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
      data: barOneData
    },
    {
      type: 'bar',
      yAxisIndex: 1,
      data: barTwoData
    }
  ]
}`
export const barThreeOption = `const xData = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
const oneDate = [0, 1700, 1400, 1200, 300, 100, 0]
const twoData = [2900, 1200, 300, 200, 900, 200, 100]
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
    data: xData,
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
      data: oneDate,
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
      data: twoData,
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
}`
export const barFourOption = `const Xdata = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
const seriesData = [
  {
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
]
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
    data: Xdata
  },
  series: [{
    type: 'bar',
    data: seriesData,
    label: {
      show: true,
      formatter: '{b}',
    },
    itemStyle: {
      color: 'skyblue'
    }
  }]
}`
// 线图
export const lineOneOption = `const XData = ['1', '2', '3', '4', '5', '6']
const dataOne = [40,80,32,85,50,40]
const dataTwo = [20,50,12,65,30,60]
function formatHtml(params){
  return '<div style="width:80px;height:80px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">'+
    '<div style="width:100%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);padding:0 5px">'+
    '<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;border-radius:5px;">'+
    '</i>'+
    '<span style="margin-left:10px;color:#fff;font-size:16px;">'+params.name+'</span>'+
    '</div>'+
    '<div style="padding:5px">'+
    '<p style="color:#fff;font-size:12px;">'+
    '总数：<span style="color:#11ee7d;">'+params.value+'</span>个</p>'+
    '</div>'+
  '</div>';
}
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
    data: XData
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
  tooltip: {
    show: true
  },
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
    tooltip: {
      show: true,
      padding: 0,
      enterable: true,
      transitionDuration: 1,
      textStyle: {
        color: '#000',
        decoration: 'none',
      },
      formatter: function (params) {
        return formatHtml(params)
      }
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
    data: dataOne
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
    data: dataTwo
  }]
}
let index = 0; //播放所在下标
let showTipTimer = null // 时间戳
showTipTimer = setInterval(() => {
  myChart.dispatchAction({
    type: 'showTip',
    seriesIndex: 0,
    dataIndex: index
  });
  index++;
  if (index >= option.series[0].data.length) {
    index = 0;
  }
}, 2000)
myChart.on('mouseover', (params) => {
  clearInterval(showTipTimer);
  myChart.dispatchAction({
    type: 'showTip',
    seriesIndex: 0,
    dataIndex: params.dataIndex,
  });
});
myChart.on('mouseout', () => {
  clearInterval(showTipTimer);
  showTipTimer = setInterval(() => {
    myChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: index
    });
    index++;
    if (index >= option.series[0].data.length) {
      index = 0;
    }
  }, 2000);
});`
// 地图 点图，飞线图
export const mapOneOption = `function randomData() {
  return Math.round(Math.random() * 100);
}
const mapData = [{
    name: "北京",
    value: randomData()
  },
  {
    name: "天津",
    value: randomData()
  },
  {
    name: "河北",
    value: randomData()
  },
  {
    name: "山西",
    value: randomData()
  },
  {
    name: "内蒙古",
    value: randomData()
  },
  {
    name: "辽宁",
    value: randomData()
  },
  {
    name: "吉林",
    value: randomData()
  },
  {
    name: "黑龙江",
    value: randomData()
  },
  {
    name: "上海",
    value: randomData()
  },
  {
    name: "江苏",
    value: randomData()
  },
  {
    name: "浙江",
    value: randomData()
  },
  {
    name: "安徽",
    value: randomData()
  },
  {
    name: "福建",
    value: randomData()
  },
  {
    name: "江西",
    value: randomData()
  },
  {
    name: "山东",
    value: randomData()
  },
  {
    name: "河南",
    value: randomData()
  },
  {
    name: "湖北",
    value: randomData()
  },
  {
    name: "湖南",
    value: randomData()
  },
  {
    name: "重庆",
    value: randomData()
  },
  {
    name: "四川",
    value: randomData()
  },
  {
    name: "贵州",
    value: randomData()
  },
  {
    name: "云南",
    value: randomData()
  },
  {
    name: "西藏",
    value: randomData()
  },
  {
    name: "陕西",
    value: randomData()
  },
  {
    name: "甘肃",
    value: randomData()
  },
  {
    name: "青海",
    value: randomData()
  },
  {
    name: "宁夏",
    value: randomData()
  },
  {
    name: "新疆",
    value: randomData()
  },
  {
    name: "广东",
    value: randomData()
  },
  {
    name: "广西",
    value: randomData()
  },
  {
    name: "海南",
    value: randomData()
  },
]

const visualMapChinaData = [
  {
    name: '北京',
    value: randomData()
  }, 
  {
    name: '天津',
    value: randomData()
  }, 
  {
    name: '上海',
    value: randomData()
  }, 
  {
    name: '重庆',
    value: randomData()
  },
  {
    name: '河北',
    value: randomData()
  }, 
  {
    name: '河南',
    value: randomData()
  },
  {
    name: '云南',
    value: randomData()
  },
  {
    name: '辽宁',
    value: randomData()
  },
  {
    name: '黑龙江',
    value: randomData()
  }, 
  {
    name: '湖南',
    value: randomData()
  }, 
  {
    name: '安徽',
    value: randomData()
  }, 
  {
    name: '山东',
    value: randomData()
  }, 
  {
    name: '新疆',
    value: randomData()
  }, 
  {
    name: '江苏',
    value: randomData()
  }, 
  {
    name: '浙江',
    value: randomData()
  }, {
    name: '江西',
    value: randomData()
  }, 
  {
    name: '湖北',
    value: randomData()
  }, 
  {
    name: '广西',
    value: randomData()
  }, 
  {
    name: '甘肃',
    value: randomData()
  }, 
  {
    name: '山西',
    value: randomData()
  }, 
  {
    name: '内蒙古',
    value: randomData()
  }, 
  {
    name: '陕西',
    value: randomData()
  }, 
  {
    name: '吉林',
    value: randomData()
  }, {
    name: '福建',
    value: randomData()
  }, {
    name: '贵州',
    value: randomData()
  }, 
  {
    name: '广东',
    value: randomData()
  }, 
  {
    name: '青海',
    value: randomData()
  }, 
  {
    name: '西藏',
    value: randomData()
  }, {
    name: '四川',
    value: randomData()
  }, 
  {
    name: '宁夏',
    value: randomData()
  }, 
  {
    name: '海南',
    value: randomData()
  }, 
  {
    name: '台湾',
    value: randomData()
  }, 
  {
    name: '香港',
    value: randomData()
  }, 
  {
    name: '澳门',
    value: randomData()
  }
]
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
      color: ['#E0DAFF', '#ADBFFF', '#9CB4FF', '#6A9DFF', '#3889FF']
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
}`
export const mapTwoOption = `const geoCoordMap = {
  '台湾': [121.5135, 25.0308],
  '黑龙江': [127.9688, 45.368],
  '内蒙古': [110.3467, 41.4899],
  "吉林": [125.8154, 44.2584],
  '北京': [116.4551, 40.2539],
  "辽宁": [123.1238, 42.1216],
  "河北": [114.4995, 38.1006],
  "天津": [117.4219, 39.4189],
  "山西": [112.3352, 37.9413],
  "陕西": [109.1162, 34.2004],
  "甘肃": [103.5901, 36.3043],
  "宁夏": [106.3586, 38.1775],
  "青海": [101.4038, 36.8207],
  "新疆": [87.9236, 43.5883],
  "西藏": [91.11, 29.97],
  "四川": [103.9526, 30.7617],
  "重庆": [108.384366, 30.439702],
  "山东": [117.1582, 36.8701],
  "河南": [113.4668, 34.6234],
  "江苏": [118.8062, 31.9208],
  "安徽": [117.29, 32.0581],
  "湖北": [114.3896, 30.6628],
  "浙江": [119.5313, 29.8773],
  "福建": [119.4543, 25.9222],
  "江西": [116.0046, 28.6633],
  "湖南": [113.0823, 28.2568],
  "贵州": [106.6992, 26.7682],
  "云南": [102.9199, 25.4663],
  "广东": [113.12244, 23.009505],
  "广西": [108.479, 23.1152],
  "海南": [110.3893, 19.8516],
  '上海': [121.4648, 31.2891],

};
const convertData = (data) => {
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
function randomData() {
  return Math.round(Math.random() * 100);
}
const mapData = [{
    name: "北京",
    value: randomData()
  },
  {
    name: "天津",
    value: randomData()
  },
  {
    name: "河北",
    value: randomData()
  },
  {
    name: "山西",
    value: randomData()
  },
  {
    name: "内蒙古",
    value: randomData()
  },
  {
    name: "辽宁",
    value: randomData()
  },
  {
    name: "吉林",
    value: randomData()
  },
  {
    name: "黑龙江",
    value: randomData()
  },
  {
    name: "上海",
    value: randomData()
  },
  {
    name: "江苏",
    value: randomData()
  },
  {
    name: "浙江",
    value: randomData()
  },
  {
    name: "安徽",
    value: randomData()
  },
  {
    name: "福建",
    value: randomData()
  },
  {
    name: "江西",
    value: randomData()
  },
  {
    name: "山东",
    value: randomData()
  },
  {
    name: "河南",
    value: randomData()
  },
  {
    name: "湖北",
    value: randomData()
  },
  {
    name: "湖南",
    value: randomData()
  },
  {
    name: "重庆",
    value: randomData()
  },
  {
    name: "四川",
    value: randomData()
  },
  {
    name: "贵州",
    value: randomData()
  },
  {
    name: "云南",
    value: randomData()
  },
  {
    name: "西藏",
    value: randomData()
  },
  {
    name: "陕西",
    value: randomData()
  },
  {
    name: "甘肃",
    value: randomData()
  },
  {
    name: "青海",
    value: randomData()
  },
  {
    name: "宁夏",
    value: randomData()
  },
  {
    name: "新疆",
    value: randomData()
  },
  {
    name: "广东",
    value: randomData()
  },
  {
    name: "广西",
    value: randomData()
  },
  {
    name: "海南",
    value: randomData()
  },
]

const visualMapChinaData = [
  {
    name: '北京',
    value: randomData()
  }, 
  {
    name: '天津',
    value: randomData()
  }, 
  {
    name: '上海',
    value: randomData()
  }, 
  {
    name: '重庆',
    value: randomData()
  },
  {
    name: '河北',
    value: randomData()
  }, 
  {
    name: '河南',
    value: randomData()
  },
  {
    name: '云南',
    value: randomData()
  },
  {
    name: '辽宁',
    value: randomData()
  },
  {
    name: '黑龙江',
    value: randomData()
  }, 
  {
    name: '湖南',
    value: randomData()
  }, 
  {
    name: '安徽',
    value: randomData()
  }, 
  {
    name: '山东',
    value: randomData()
  }, 
  {
    name: '新疆',
    value: randomData()
  }, 
  {
    name: '江苏',
    value: randomData()
  }, 
  {
    name: '浙江',
    value: randomData()
  }, {
    name: '江西',
    value: randomData()
  }, 
  {
    name: '湖北',
    value: randomData()
  }, 
  {
    name: '广西',
    value: randomData()
  }, 
  {
    name: '甘肃',
    value: randomData()
  }, 
  {
    name: '山西',
    value: randomData()
  }, 
  {
    name: '内蒙古',
    value: randomData()
  }, 
  {
    name: '陕西',
    value: randomData()
  }, 
  {
    name: '吉林',
    value: randomData()
  }, {
    name: '福建',
    value: randomData()
  }, {
    name: '贵州',
    value: randomData()
  }, 
  {
    name: '广东',
    value: randomData()
  }, 
  {
    name: '青海',
    value: randomData()
  }, 
  {
    name: '西藏',
    value: randomData()
  }, {
    name: '四川',
    value: randomData()
  }, 
  {
    name: '宁夏',
    value: randomData()
  }, 
  {
    name: '海南',
    value: randomData()
  }, 
  {
    name: '台湾',
    value: randomData()
  }, 
  {
    name: '香港',
    value: randomData()
  }, 
  {
    name: '澳门',
    value: randomData()
  }
]

const option = {
  title: {
    text: '中国地图',
    top: 50,
    left: 'center',
    subtext: '点图和涟漪图'
  },
  visualMap: {
    show: true,
    type: 'piecewise',
    left: 'left',
    top: 'bottom',
    splitNum: 5,
    pieces: [{
      max: 50
    }, {
      min: 51,
      max: 70
    }, {
      min: 71,
      max: 80
    }, {
      min: 81,
      max: 90
    }, {
      min: 91,
      max: 100
    }],
    inRange: {
      symbol: 'rect',
      color: ['#E0DAFF', '#ADBFFF', '#9CB4FF', '#6A9DFF', '#3889FF']
    },
    hoverLink: false,
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
      silent: true,
      data: visualMapChinaData
    },
    {
      type: 'scatter',
      coordinateSystem: 'geo',
      symbol: 'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
      data: convertData(mapData.sort(function (a, b) {
        return b.value - a.value;
      }).slice(10, -1))
    },
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: convertData(mapData.sort(function (a, b) {
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
}`
export const mapThreeOption = `const geoCoordMap = {
  '台湾': [121.5135, 25.0308],
  '黑龙江': [127.9688, 45.368],
  '内蒙古': [110.3467, 41.4899],
  "吉林": [125.8154, 44.2584],
  '北京': [116.4551, 40.2539],
  "辽宁": [123.1238, 42.1216],
  "河北": [114.4995, 38.1006],
  "天津": [117.4219, 39.4189],
  "山西": [112.3352, 37.9413],
  "陕西": [109.1162, 34.2004],
  "甘肃": [103.5901, 36.3043],
  "宁夏": [106.3586, 38.1775],
  "青海": [101.4038, 36.8207],
  "新疆": [87.9236, 43.5883],
  "西藏": [91.11, 29.97],
  "四川": [103.9526, 30.7617],
  "重庆": [108.384366, 30.439702],
  "山东": [117.1582, 36.8701],
  "河南": [113.4668, 34.6234],
  "江苏": [118.8062, 31.9208],
  "安徽": [117.29, 32.0581],
  "湖北": [114.3896, 30.6628],
  "浙江": [119.5313, 29.8773],
  "福建": [119.4543, 25.9222],
  "江西": [116.0046, 28.6633],
  "湖南": [113.0823, 28.2568],
  "贵州": [106.6992, 26.7682],
  "云南": [102.9199, 25.4663],
  "广东": [113.12244, 23.009505],
  "广西": [108.479, 23.1152],
  "海南": [110.3893, 19.8516],
  '上海': [121.4648, 31.2891],

};
function randomData() {
  return Math.round(Math.random() * 100);
}
const mapData = [{
    name: "北京",
    value: randomData()
  },
  {
    name: "天津",
    value: randomData()
  },
  {
    name: "河北",
    value: randomData()
  },
  {
    name: "山西",
    value: randomData()
  },
  {
    name: "内蒙古",
    value: randomData()
  },
  {
    name: "辽宁",
    value: randomData()
  },
  {
    name: "吉林",
    value: randomData()
  },
  {
    name: "黑龙江",
    value: randomData()
  },
  {
    name: "上海",
    value: randomData()
  },
  {
    name: "江苏",
    value: randomData()
  },
  {
    name: "浙江",
    value: randomData()
  },
  {
    name: "安徽",
    value: randomData()
  },
  {
    name: "福建",
    value: randomData()
  },
  {
    name: "江西",
    value: randomData()
  },
  {
    name: "山东",
    value: randomData()
  },
  {
    name: "河南",
    value: randomData()
  },
  {
    name: "湖北",
    value: randomData()
  },
  {
    name: "湖南",
    value: randomData()
  },
  {
    name: "重庆",
    value: randomData()
  },
  {
    name: "四川",
    value: randomData()
  },
  {
    name: "贵州",
    value: randomData()
  },
  {
    name: "云南",
    value: randomData()
  },
  {
    name: "西藏",
    value: randomData()
  },
  {
    name: "陕西",
    value: randomData()
  },
  {
    name: "甘肃",
    value: randomData()
  },
  {
    name: "青海",
    value: randomData()
  },
  {
    name: "宁夏",
    value: randomData()
  },
  {
    name: "新疆",
    value: randomData()
  },
  {
    name: "广东",
    value: randomData()
  },
  {
    name: "广西",
    value: randomData()
  },
  {
    name: "海南",
    value: randomData()
  },
]

const visualMapChinaData = [
  {
    name: '北京',
    value: randomData()
  }, 
  {
    name: '天津',
    value: randomData()
  }, 
  {
    name: '上海',
    value: randomData()
  }, 
  {
    name: '重庆',
    value: randomData()
  },
  {
    name: '河北',
    value: randomData()
  }, 
  {
    name: '河南',
    value: randomData()
  },
  {
    name: '云南',
    value: randomData()
  },
  {
    name: '辽宁',
    value: randomData()
  },
  {
    name: '黑龙江',
    value: randomData()
  }, 
  {
    name: '湖南',
    value: randomData()
  }, 
  {
    name: '安徽',
    value: randomData()
  }, 
  {
    name: '山东',
    value: randomData()
  }, 
  {
    name: '新疆',
    value: randomData()
  }, 
  {
    name: '江苏',
    value: randomData()
  }, 
  {
    name: '浙江',
    value: randomData()
  }, {
    name: '江西',
    value: randomData()
  }, 
  {
    name: '湖北',
    value: randomData()
  }, 
  {
    name: '广西',
    value: randomData()
  }, 
  {
    name: '甘肃',
    value: randomData()
  }, 
  {
    name: '山西',
    value: randomData()
  }, 
  {
    name: '内蒙古',
    value: randomData()
  }, 
  {
    name: '陕西',
    value: randomData()
  }, 
  {
    name: '吉林',
    value: randomData()
  }, {
    name: '福建',
    value: randomData()
  }, {
    name: '贵州',
    value: randomData()
  }, 
  {
    name: '广东',
    value: randomData()
  }, 
  {
    name: '青海',
    value: randomData()
  }, 
  {
    name: '西藏',
    value: randomData()
  }, {
    name: '四川',
    value: randomData()
  }, 
  {
    name: '宁夏',
    value: randomData()
  }, 
  {
    name: '海南',
    value: randomData()
  }, 
  {
    name: '台湾',
    value: randomData()
  }, 
  {
    name: '香港',
    value: randomData()
  }, 
  {
    name: '澳门',
    value: randomData()
  }
]
const convertData = (data) => {
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
}
const option = {
  backgroundColor: '#0e1c47',
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
      color: ['#E0DAFF', '#ADBFFF', '#9CB4FF', '#6A9DFF', '#3889FF']
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
      data: convertData([{
        name: "北京",
        value: 100
      }]),
    },
    {
      type: 'scatter',
      coordinateSystem: 'geo',
      symbol: 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z',
      data: convertData(mapData.sort(function (a, b) {
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
          fromName: '北京',
          toName: dataItem.name,
          coords: [
            geoCoordMap['北京'],
            geoCoordMap[dataItem.name]
          ]
        }
      })
    }
  ]
}`
export const mapFourOption = `function randomData() {
  return Math.round(Math.random() * 100);
}
const visualMapChinaData = [
  {
    name: '北京',
    value: randomData()
  }, 
  {
    name: '天津',
    value: randomData()
  }, 
  {
    name: '上海',
    value: randomData()
  }, 
  {
    name: '重庆',
    value: randomData()
  },
  {
    name: '河北',
    value: randomData()
  }, 
  {
    name: '河南',
    value: randomData()
  },
  {
    name: '云南',
    value: randomData()
  },
  {
    name: '辽宁',
    value: randomData()
  },
  {
    name: '黑龙江',
    value: randomData()
  }, 
  {
    name: '湖南',
    value: randomData()
  }, 
  {
    name: '安徽',
    value: randomData()
  }, 
  {
    name: '山东',
    value: randomData()
  }, 
  {
    name: '新疆',
    value: randomData()
  }, 
  {
    name: '江苏',
    value: randomData()
  }, 
  {
    name: '浙江',
    value: randomData()
  }, {
    name: '江西',
    value: randomData()
  }, 
  {
    name: '湖北',
    value: randomData()
  }, 
  {
    name: '广西',
    value: randomData()
  }, 
  {
    name: '甘肃',
    value: randomData()
  }, 
  {
    name: '山西',
    value: randomData()
  }, 
  {
    name: '内蒙古',
    value: randomData()
  }, 
  {
    name: '陕西',
    value: randomData()
  }, 
  {
    name: '吉林',
    value: randomData()
  }, {
    name: '福建',
    value: randomData()
  }, {
    name: '贵州',
    value: randomData()
  }, 
  {
    name: '广东',
    value: randomData()
  }, 
  {
    name: '青海',
    value: randomData()
  }, 
  {
    name: '西藏',
    value: randomData()
  }, {
    name: '四川',
    value: randomData()
  }, 
  {
    name: '宁夏',
    value: randomData()
  }, 
  {
    name: '海南',
    value: randomData()
  }, 
  {
    name: '台湾',
    value: randomData()
  }, 
  {
    name: '香港',
    value: randomData()
  }, 
  {
    name: '澳门',
    value: randomData()
  }
]
const option = {
  title: {
    text: '中国地图',
    top: 50,
    left: 'center',
    subtext: '地图边框线'
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
}`
export const mapFiveOption =  `const option = {
  title: {
    text: '中国地图',
    top: 50,
    left: 'center',
    subtext: '城市地图'
  },
  series: [{
    type: 'map',
    map: 'china-cities',
    itemStyle: {
      borderColor: 'blue'
    }
  }]
}`
export const mapSixOption = `const option = {
  title: {
    text: '世界地图',
    top: 50,
    left: 'center',
  },
  series: [{
    type: 'map',
    map: 'world'
  }]
}`