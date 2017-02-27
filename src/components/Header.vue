<template>
    <div class="header">
      <el-menu theme="dark" default-active="0" class="el-menu-vertical-demo" unique-opened router >
        <template v-for="(item,index) in $router.options.routes">
            <el-submenu :index="index+''" v-if="item.children&&item.children.length" v-show="!item.hidden">
                <template slot="title">{{item.name}}</template>
                <el-menu-item v-for="child in item.children" :index="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-if="!item.children||!item.children.length" v-show="!item.hidden" :index="item.path">{{item.name}}</el-menu-item>
        </template>
      </el-menu>
    </div>
</template>

<script>
    import api from '../api.js'
    export default {
         async mounted(){
             let res=await api.getReports();
             console.log(res);
         }
    }
</script>