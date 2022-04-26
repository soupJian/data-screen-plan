# chart-option

## title

**配置图表标题 主标题和副标题**

```
text: 标题文字
link 标题超链接
target: 指定窗口超链接
textStyle: 主标题样式 {}
subtext: 副标题文字
subTextStyle: 副标题样式 {}
itemGap： 祝福标题间距 number
...主标题和副标题 文字样式 以及文字位置
```

## legend

**控制图表中某些数据toggle显示**

```
orient: // 'horizontal' -- 横向   'vertical'-- 垂直
align: // 标签文本对齐方式 auto left right
itemStyle:
lineStyle:
```

## tooltip

**鼠标进入图层，展示某个区域数据介绍**

注意点：如果要在series中设置 tooltip，必须先在series的同级设置tooltip的show为true

```javascript
const option = {
    ...
    tooltip:{
        show: true
    },
    series:[{
        ...
        tooltip:{
            ...
		}
    }]
}
```

**tooltip也可以是dom元素**

```javascript
tooltip:{
    formatter:function(parama){
        const tipHtml ='<div style="width:80px;height:80px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">' +
                  '<div style="width:100%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);padding:0 5px">' +
                  '<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;border-radius:5px;">' +
                  '</i>' +
                  '<span style="margin-left:10px;color:#fff;font-size:16px;">' + params.name + '</span>' +
                  '</div>' +
                  '<div style="padding:5px">' +
                  '<p style="color:#fff;font-size:12px;">' +
                  '总数：' + '<span style="color:#11ee7d;">' + params.value + '</span>' + '个' + '</p>' +
                  '</div>' + '</div>';
                return tipHtml;
    }
}
```

**tooltip轮播**

```javascript
this.myChart = echarts.init(this.$refs.chartDom)
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
```

## visualMap

**图表数据值颜色区别展示,以及点击 toggle 地图显示颜色**

```javascript
visualMap:{
	type:  // piecewise 分段形 continuous 连续形(默认)
    hoverLink: false, // 鼠标放上去联动地图
    inRange: { // 颜色取值范围
              color: ['#E0DAFF', '#ADBFFF', '#9CB4FF', '#6A9DFF', '#3889FF']
            },
}
visualMap:{
	type: 'piecewise' // piecewise 分段形
    splitNum: 5, // 划分几段
        pieces: [{ max: 50 },{ min: 51, max: 70 },{ min: 71, max: 80 },{ min: 81,max:90 },{ min: 91,max:100 }],
    seriesIndex: 0 // 作用于第几个地图
}
```

## grid

**控制 折线图，柱状图，散点图（气泡图）在dom中的位置样式**

```javascript
grid:{
    show: true,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    containlabel: true // 定位区域是否包含坐标轴刻度 防止标签溢出
}
```

## xAxis

**设置x轴坐标样式**

```javascript
type: 'category' // category 分类轴 value 数值轴
name: '金额/元', // 如果type是value，坐标轴单位
nameTextStyle: '' // name的文字样式设置
splitLine: // 是否展示网格线
axisLabel: // x轴数值标签 formatter
axisTick: // 坐标轴到标签之间的小段竖线
```

**格式化标签展示**（如果不知道标签文字，如果知道直接 '\n' 即可

```javascript
formatter: function (params) {
                var newParamsName = "";
                var paramsNameNumber = params.length;
                var provideNumber = 2; // 几个字换行
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
```



## yAxis

**设置y轴样式同 xAxis** 

双坐标轴

```javascript
yAxis:[
    {
        // 坐标轴一
    },
    {
        // 坐标轴二
    }
],series:[{
    yAxisIndex: 0,
},
{
    yAxisIndex: 1,
}]
```

## toolbox

**工具 导出图片，数据视图，动态类型切换，重置**

## geo

**地理坐标地图组件**（可用来展示地图边框线）

```
roam: 是否开启鼠标放大缩放移动地图
zoom: 地图放大缩小
scaleLimit： {min: .5,max:2} 最大最小缩放
```

## series

```
type: 
	'line' // 折线图
	'bar' // 柱状图
	'pie' // 饼图
	'scatter' // 点图
	'effectScatter' // 带有涟漪特效动画的散点（气泡）
	'map' // 地图
	'lines' // 飞线图
```