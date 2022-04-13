<template>
  <div class="example">
    <div class="example-left">
      <my-menu :defaultKey="defaultKey" :defaultActive="defaultActive" @selectItem="selectItem" />
    </div>
    <div class="example-right">
      <div class="edit" ref="edit">
        <MonacoEditor srcPath="" language="javascript" :code="editorCode" :key="randomkey"
          :editorOptions="editorOptions" @mounted="editMounted">
        </MonacoEditor>
        <div class="button-wrap">
          <button @click="updateChart('update')">更新</button>
          <button @click="updateChart('reset')">重置</button>
        </div>
      </div>
      <div class="chart-wrap">
        <chart-view :option="chartOption" />
      </div>
    </div>
  </div>

</template>
<script>
  import MonacoEditor from 'vue-monaco-editor'
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
        update: false, // 判断是否点击了更新
        editor: null,
        editorCode: '',
        chartOption: pieOneOption, // 地图的option
        chartOptionCopy: pieOneOption, // 备份地图的option
        editorOptions: { // 编辑器option
          folding: true,
          showFoldingControls: 'always',
          tabSize: 2
        },
        randomkey: 0
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
        this.createRamdomKey()
        this.chartOption = defaultOption
        this.chartOptionCopy = defaultOption
        this.updateEditorCode(this.chartOption)
      },
      // 更新
      updateChart(type) {
        // type ==> update/reset
        if (type == 'update') {
          this.chartOption = this.editor.getValue()
        } else {
          this.chartOption = this.chartOptionCopy
          this.updateEditorCode(this.chartOptionCopy)
        }
      },
      // 挂载编辑器
      editMounted(editor) {
        this.editor = editor;
      },
      // createRamdomKey随机生成值，其值类似于id。该方法最为重要，在给code赋值之后，调用这个方法
      createRamdomKey() {
        this.randomkey = this.randomkey + Math.floor(Math.random() * 100);
      },
      updateEditorCode(option) {
        this.editorCode = option
      },
    },
    mounted() {
      this.$nextTick(()=>{
        this.updateEditorCode(this.chartOption)
      })
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
        background: #1E1E1E;

        .button-wrap {
          position: absolute;
          top: 0;
          right: -100px;
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