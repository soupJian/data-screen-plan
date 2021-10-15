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
...主标题和副标题 文字样式
```

## legend

**控制图表中某些数据toggle显示**

```
orient: // 'horizontal' -- 横向   'vertical'-- 垂直
align: // 标签文本对齐方式 auto left right
itemStyle:
lineStyle:
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

