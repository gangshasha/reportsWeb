<template>
  <section>
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item :label="item.display" v-for="item in input">
          <el-input :placeholder="item.display" v-model="item.value" v-if="item.mode=='text'"></el-input>
          
          <el-select v-model="item.value" :placeholder="item.display" v-if="item.mode=='select'">
            <el-option :label="select.name" :value="select.value" v-for="select in item.selects"></el-option>
          </el-select>

          <el-date-picker type="date" :placeholder="item.display" v-model="item.value" style="width: 100%;" v-if="item.mode=='datetime'"></el-date-picker>
        
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :click="search">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table :data="list" border style="width: 100%" max-height="500">
        <el-table-column fixed type="index" width="50"></el-table-column>
        <el-table-column :prop="item.name" :label="item.display" v-for="item in output"></el-table-column>
    </el-table>
  </section>
</template>

<script>
import api from '../api.js'
export default {
  data () {
    return {
      input:[],
      output:[],
      list:[]
    }
  },
  methods:{
    async search(){
      let res=await api.defineReport(this.input,this.output,this.list);
      this.list=res.data;
    }
  },
  async mounted(){
    // let res=await api.getReport('');
    this.output=[
        {display:"姓名",name:"name",tableName:"tb_user"},
        {display:"性别",name:"sex",tableName:"tb_user"},
        {display:"家庭地址",name:"address",tableName:"tb_user"},
        {display:"学校",name:"school",tableName:"tb_user"},
        {display:"电话",name:"sex",tableName:"tb_user"}
    ];
    this.input=[
        {display:"性别",name:"sex",mode:"select",value:"",tableName:"tb_user",
          selects:[
            {name:"男",value:1},
            {name:"女",value:2}
          ]
        },
        {display:"姓名",name:"name",mode:"text",value:"",tableName:"tb_user"},
        {display:"出生时间",name:"date",mode:"datetime",value:"",tableName:"tb_user"}
    ]
    // this.list=[
    //   {sex:"nan",name:"wei",date:"today"}
    // ];
  }
}
</script>

