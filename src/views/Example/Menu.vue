<template>
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
</template>
<script>
export default{
  props:['defaultKey','defaultActive'],
  methods:{
    selectItem(key, path){
      this.$emit('selectItem',key,path)
    }
  }
}
</script>