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
        <el-submenu index="bar">
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
        <el-submenu index="line">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>折线图</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="line-1">基础折线图</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="map">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>地图</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="map-1">中国地图</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="map-2">地图点图</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="map-3">地图飞线</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="map-4">地图边框线</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="map-5">城市地图</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="map-6">世界地图</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="example-right">
      <div class="edit" ref="edit">
        <MonacoEditor srcPath="" language="json" :code="code" :key="randomkey" :editorOptions="options" @mounted="onMounted">
        </MonacoEditor>
        <div class="button-wrap">
          <button @click="updateChart">更新</button>
          <button @click="resetChart">重置</button>
        </div>
      </div>
      <div class="chart-wrap">
        <chart-view @setOption="setOption" :code="code" :update="update" :defaultKey="defaultKey"
          :defaultActive="defaultActive" />
      </div>
    </div>
  </div>

</template>
<script>
  import MonacoEditor from 'vue-monaco-editor'
  import ChartView from './ChartView.vue'
  export default {
    components: {
      MonacoEditor,
      ChartView
    },
    data() {
      return {
        defaultKey: 'pie', // 点击左侧第几个menu-sub-item
        defaultActive: 'pie-1', // 点击左侧menu-item-grouo
        update: false, // 判断是否点击了更新
        editor: null,
        code: '',
        codeCopy: '',
        options: {
          folding: true,
          showFoldingControls: 'always',
          tabSize: 2,
          // selectOnLineNumbers: false
        },
        randomkey: 0
      }
    },
    methods: {
      selectItem(key, path) {
        this.defaultKey = path[0]
        this.defaultActive = key
      },
      setOption(option, type) {
        this.$nextTick(() => {
          const str = JSON.stringify(option, null, ' ')
          this.code = str
          this.createRamdomKey()
          if (type == 1) { // 第一次传值，需要备份下来
            this.codeCopy = str
          }
        })
      },
      updateChart() {
        this.code = this.editor.getValue()
        this.update = true
        setTimeout(() => {
          this.update = false
        }, 500);
      },
      resetChart() {
        this.code = this.codeCopy
        this.update = true
        this.createRamdomKey()
        setTimeout(() => {
          this.update = false
        }, 500);
      },
      onMounted(editor) {
        this.editor = editor;
      },
      // createRamdomKey随机生成值，其值类似于id。该方法最为重要，在给code赋值之后，调用这个方法
      createRamdomKey() {
        this.randomkey = this.randomkey + Math.floor(Math.random() * 100);
      }
    },
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
      overflow: auto;

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