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



## grid

**控制 折线图，柱状图，散点图（气泡图）在dom中的位置样式**

## xAxis

**设置x轴坐标样式**

## yAxis

**设置y轴样式**

## visualMap

**图表数据值颜色区别展示**

## tooltio

**提示框**

## toolbox

**工具 导出图片，数据视图，动态类型切换，重置**

## geo

**地理坐标地图组件**

```
roam: 是否开启鼠标放大缩放移动地图
zoom: 地图放大缩小
scaleLimit： {min: .5,max:2}
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

