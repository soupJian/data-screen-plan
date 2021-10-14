# echats在vue中使用

## 安装echarts

```js
npm install echats@4.9.0 --save

// 5.0版本没有 中国地图的json文件
// 如果使用 5.x版本的，可以拷贝5.x以下的中国地图json文件
```

## 在vue中使用

**不使用 vue-echarts**

​	vue_echarts相对来说数据类型都是定制好的，很难在此基础上做更改

**导入echarts**

```javascript
// 4.x 
import echarts from 'echarts'
// 5.x 
import * as echarts from 'echarts'
```

**按需导入echarts**

```javascript
// 4.x
const echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')			//柱状图
require('echarts/lib/chart/pie')			//饼图
//下面的是需要的提示框
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')

// 5.x

// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  DatasetComponentOption,
  TransformComponent
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);
```

**-------渲染-------**

**第一步 存放图表的dom**

**第二步 调用echarts的init初始化图标**

**第三步 给图表设置属性和数据**

**第四步 图表渲染完成**

```html
<div ref="mycharts" width="200px" height="200px"></div>
<!-- 这里的宽高需要写完整的，继承的有时无法识别到，渲染失败 -->
```

```javascript
methosd:{
  // 设置图表属性和数据
  initChart(){
      const option = {}
      this.myChart.setOption(option)
      // 图表渲染完成事件
      this.myChart.on('finished',()=>{
          ...
      })
  }
},
mounted(){
    // 在dom挂在完成后，开始渲染图表
    // 一次初始化即可
    this.myChart = echarts.init(this.$refs.mycharts)
    this.initChart()
},
watch:{
    id(){
        // 当数据发生该表时候，重新渲染图表数据
        this.initChart()
    }
}
```

