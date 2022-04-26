# 数据可视化

## 响应式布局

**两种方案**

1. rem：

   实现原理： 根据屏幕宽度，计算1rem的宽度，配置根元素的font-size,所有的像素单位按照rem计算

   优点：实现响应式，根据设计稿和`VW`的宽度实现界面宽度百分百展示

   缺点： 在非设计稿比例的屏幕下，会出现滚动条

2. scale

   实现原理： 将设计稿按照比例放大或缩小，在不出现滚动条的情况下，放大至最大展示

   优点：响应式缩放，没有滚动条，不需要转化单位，按照设计稿一比一开发

   缺点： 对于部分像素偏小的单位，缩小后模糊

目前开发采用的是scale方案

灵感来自 https://sugar.aipage.com/dashboard/5f81db321ff3e080e9f09168c923854f

**响应式方案（vue)**



**App.vue**

```html
<!-- html部分 -->
<div id="app">
    <div class="container" :style="{transform:`scale(${scale},${scale}) translateX(-50%)`,width: `${width}px`,height: `${height}px`}">
        <div class="main-wrap">
           ... 
        </div>
    </div>
</div>
```

```scss
// css部分
html,body,#app{
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
#app{
    position: relative;
    .container{
        position: absolute;
        left: 50%;
        transform-origin: 0 0;
        overflow: hidden;
        transition: all .3s linear;
        .main-wrap{
            width: 100%;
            height: 100%;
        }
    }
}
```



```javascript
import {getScale,width,height}from './utils/getScale'
export default {
	data(){
        return{
            width,
            height,
            scale: getScale(), // 初始化时候就进行一次获取比例
            timer: null // 防抖
        }
    },
    methods:{
        // 设置缩放比
        setScale(){
            if(this.timer){
                clearTimeOut(this.timer)
                this.timer = setTimeOut(()=>{
                    this.scale = getScale()
                },500)
            }
        }
    },
    mounted(){
        const that = this
        window.addEventListener('resize',()=>{
            that.setScale()
        })
    },
    destoryed(){
        window.removeEventListener('resize',this.setScale())
    }
}
```

**utils/getScale.js**

```javascript
// js部分
const height = 1080 // 设计稿 height
const width = 1920 // 设计稿 width
// 获取宽高比例
const getScale = () =>{
    const ww = window.innerWidth / width
    const hh = window.innerHeight / height
    const scale = ww < wh ? ww : wh
    return scale
}
```