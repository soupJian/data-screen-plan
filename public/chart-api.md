# echarts api

## echarts 

### init

```javascript
const mychart = echarts.init(dom) // echartsInstance

// init接收三个参数
dom: HTMLDivElement|HTMLCanvasElement,
theme: // 主题
opts: { // 实例初始化配置参数
    devicePixelRatio?: number,
    renderer?: string,
    useDirtyRect?: boolean, // 从 `v5.0.0` 开始支持
    width?: number|string,
    height?: number|string,
    locale?: string
}
```

创建一个实例，不能在容器上初始化多个Echarts实例

**dom必须具备宽高**，否则会导致获取不到宽高导致失败，也可以在init的第三个参数里配置宽高

### registerMap

**注册地图**

```javascript
echatrs.registerMap('chain',chainJson)
// 第一个参数地图名，第二个地图的json文件
```

### use

**按需导入的关键**，在Init之前调用

```javascript
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import {
    BarChart
} from 'echarts/charts';
// 引入直角坐标系组件，组件后缀都为 Component
import {
    GridComponent
} from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {
    CanvasRenderer
} from 'echarts/renderers';

// 注册必须的组件
echarts.use(
    [GridComponent, BarChart, CanvasRenderer]
);
```

### connect

**实现多表联动**

```javascript
// 分别设置每个实例的 group id
chart1.group = 'group1';
chart2.group = 'group1';
echarts.connect('group1');
// 或者可以直接传入需要联动的实例数组
echarts.connect([chart1, chart2]);
```

### disconnect

**取消联动**

如果只取消某个表的联动，只需要将其 group 设置为空

```javascript
echarts.disconnect();
chart2.group = '';
```

### on事件

**地图事件**

```javascript
this.myChart.on('finished',()=>{
	// 地图渲染完成事件
})
```

**以及相应的鼠标事件 click dblclick...**

### dispatchAction事件

```javascript
dispatchAction({
    type: '', // 类型 highlight tooltip...
    // 可选，系列 index，可以是一个数组指定多个系列
    seriesIndex?: number|Array,
    // 可选，系列名称，可以是一个数组指定多个系列
    seriesName?: string|Array,
    // 可选，数据的 index
    dataIndex?: number,
    // 可选，数据的 名称
    name?: string
})
```

