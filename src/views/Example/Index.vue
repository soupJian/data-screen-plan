<template>
  <div class="example">
    <div class="example-left">
      <my-menu :defaultKey="defaultKey" :defaultActive="defaultActive" @selectItem="selectItem" />
    </div>
    <div class="example-right">
      <div class="edit" ref="edit">
        <MonacoEditor  language="javascript" :code="editorCode" @editMounted="editMounted">
        </MonacoEditor>
        <div class="button-wrap">
          <button @click="formatCode()">格式化代码</button>
          <button @click="updateChart('update')">更新</button>
          <button @click="updateChart('reset')">重置</button>
        </div>
      </div>
      <div class="chart-wrap">
        <chart-view :option="chartOption" :defaultKey="defaultKey" :defaultActive="defaultActive" />
      </div>
    </div>
  </div>

</template>
<script>
  import MonacoEditor from '@/components/MonacoEditor'
  import ChartView from './ChartView.vue'
  import MyMenu from './Menu.vue'
  import {
    pieOneOption,
    barOneOption,
    barTwoOption,
    barThreeOption,
    barFourOption,
    lineOneOption,
    mapOneOption,
    mapTwoOption,
    mapThreeOption,
    mapFourOption,
    mapFiveOption,
    mapSixOption
  } from './chartOption'
  export default {
    components: {
      MonacoEditor,
      ChartView,
      MyMenu
    },
    data() {
      return {
        defaultKey: 'pie', // 点击左侧第几个menu-sub-item
        defaultActive: 'pie-1', // 点击左侧menu-item-groups
        editor: null, // 编辑器
        editorCode: '',
        chartOption: pieOneOption, // 地图的option
      }
    },
    methods: {
      selectItem(key, path) {
        this.defaultKey = path[0]
        this.defaultActive = key
        this.changeChartOption()
      },
      // 切换菜单栏，修改option
      changeChartOption() {
        let defaultOption = null
        switch (this.defaultActive) {
          case 'pie-1':
            defaultOption = pieOneOption
            break;
          case 'bar-1':
            defaultOption = barOneOption
            break;
          case 'bar-2':
            defaultOption = barTwoOption
            break;
          case 'bar-3':
            defaultOption = barThreeOption
            break;
          case 'bar-4':
            defaultOption = barFourOption
            break;
          case 'line-1':
            defaultOption = lineOneOption
            break;
          case 'map-1':
            defaultOption = mapOneOption
            break;
          case 'map-2':
            defaultOption = mapTwoOption
            break;
          case 'map-3':
            defaultOption = mapThreeOption
            break;
          case 'map-4':
            defaultOption = mapFourOption
            break;
          case 'map-5':
            defaultOption = mapFiveOption
            break;
          case 'map-6':
            defaultOption = mapSixOption
            break;
        }
        this.chartOption = defaultOption
        this.editorCode = defaultOption
      },
      // 格式化代码
      formatCode(){
        this.editor && this.editor.getAction('editor.action.formatDocument').run()  //格式化
      },
      // 更新
      updateChart(type) {
        // type ==> update/reset
        if (type == 'update') {
          const value = this.editor.getValue()
          this.chartOption = value
          this.editorCode = value
          // 半秒后恢复
          setTimeout(()=>{
            this.update = false
          },500)
        } else {
          // 重置
          this.changeChartOption()
        }
      },
      // 挂载编辑器
      editMounted(editor) {
        this.editor = editor;
        this.loadingInstance.close();
      },
      updateEditorCode(option) {
        this.editorCode = option
      },
    },
    mounted(){
      this.loadingInstance = this.$loading.service({
        target: '.markdown-wrap',
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      this.changeChartOption()
    }
  }
</script>
<style lang="less" scoped>
  /deep/ .el-menu {
    max-height: none;
  }

  .example {
    width: 100%;
    max-width: 100%;
    margin-top: 61px;
    overflow: auto;

    .example-left {
      width: 200px;
      position: fixed;
      left: 0;
      height: calc(100vh - 61px);
      top: 61px;
      z-index: 10;

      .el-menu {
        height: 100%;
        max-height: none;
        overflow-y: auto;

      }
    }

    .example-right {
      margin-left: 200px;
      display: flex;
      height: calc(100vh - 61px);
      overflow: hidden;

      .edit {
        flex: 5;
        height: calc(100vh - 61px);
        position: relative;
        #monaco-editor{
          height: 100%;
        }
        .button-wrap {
          position: absolute;
          top: 0;
          right: -168px;
          z-index: 1;
        }
      }

      .chart-wrap {
        flex: 6;
        overflow: hidden;
        height: calc(100vh - 61px);
      }
    }
  }
</style>