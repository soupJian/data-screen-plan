<template>
  <div class="example">
    <div class="example-left">
      <el-menu :default-active="defaultActive" class="el-menu" background-color="#545c64" text-color="#fff"
        active-text-color="#ffd04b" @select="selectItem">
        <el-submenu index="pie">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>饼图</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="pie-1">基础饼图</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="pie">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>柱状图</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="bar-1">基础柱状图</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="bar-2">双y轴柱状图</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="bar-3">堆叠柱状图</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="bar-4">正负轴柱状图</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="example-right">
      <div class="edit" ref="edit">
        <div class="button-wrap">
          <button @click="updateChart">更新</button>
          <button @click="resetChart">重置</button>
        </div>
      </div>
      <div class="chart-wrap">
        <chart-view @setOption="setOption" :infoSetting="infoSetting" :updata="updata" :defaultActive="defaultActive"
          v-if="defaultKey == 'pie'" />
      </div>
    </div>
  </div>

</template>
<script>
  import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
  import ChartView from './ChartView.vue'
  export default {
    components: {
      ChartView
    },
    data() {
      return {
        defaultKey: 'pie',
        defaultActive: 'pie-1',
        monacoEditor: null,
        infoSetting: '',
        infoSettingDefault: '',
        updata: false,
      }
    },
    methods: {
      selectItem(key, path) {
        this.defaultKey = path[0]
        this.defaultActive = key
      },
      initEdit() {
        this.monacoEditor = monaco.editor.create(this.$refs.edit, {
          value: `${JSON.stringify('')}`,
          language: "javascript",
          theme: "vs-dark",
          tabSize: 2,
          formatOnPaste: true, // 复制粘贴的时候格式化
          automaticLayout: true, // 编辑器自适应布局
          overviewRulerBorder: false,
          scrollBeyondLastLine: false, // 滚动配置，溢出才滚动
        })
        //获取值
        // this.monacoEditor.getValue()
        // 赋值
        // this.monacoEditor.setValue(this.value)
        // 失焦时候监听值变化
        // this.monacoEditor.onDidBlurEditorText(() => {
        //   this.$emit('update', this.monacoEditor.getValue())
        // })
        // 监听值变化
        // this.monacoEditor.onDidChangeModelContent( () => {
        //   this.infoSetting = this.monacoEditor.getValue()
        //   // this.$emit('update', this.monacoEditor.getValue()) //使value和其值保持一致
        // })
      },
      setOption(option, type) {
        this.$nextTick(() => {
          const str = JSON.stringify(option,null, '\t')
          this.monacoEditor.setValue(str)
          if (type == 1) { // 第一次传值，需要备份下来
            this.infoSettingDefault = str
          }
        })
      },
      updateChart() {
        this.infoSetting = this.monacoEditor.getValue()
        this.updata = true
        setTimeout(() => {
          this.updata = false
        }, 500);
      },
      resetChart() {
        this.infoSetting = this.infoSettingDefault
        this.updata = true
        setTimeout(() => {
          this.updata = false
        }, 500);
      }
    },
    mounted() {
      this.initEdit()
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
      width: 150px;
      position: fixed;
      left: 0;
      bottom: 0;
      top: 61px;
      z-index: 10;

      .el-menu {
        height: 100%;
        max-height: none;
      }
    }

    .example-right {
      margin-left: 150px;
      display: flex;
      overflow: auto;

      .edit {
        flex: 5;
        height: calc(100vh - 61px);
        position: relative;

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