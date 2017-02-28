<template>
  <section>
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form ref="form" v-model="input" label-width="80px">
         <el-form-item label="字段详细">
            <el-col :span="24">
                 <el-table :data="input" border style="width: 100%">
                    <el-table-column fixed type="index" width="80" label="条件名">
                      <template scope="scope">
                            <span>x{{scope.$index}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="表名">
                        <template scope="scope">
                            <el-input v-model="scope.row.tableName" placeholder="表名"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="表名">
                        <template scope="scope">
                            <el-input v-model="scope.row.name" placeholder="字段"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="表名">
                        <template scope="scope">
                          <el-select v-model="scope.row.symbol" placeholder="运算符">
                              <el-option :label="symbol" :value="symbol" v-for="symbol in symbols"></el-option>
                          </el-select>
                        </template>
                    </el-table-column>
                    <el-table-column label="字段值">
                        <template scope="scope">
                            <el-input v-model="scope.row.value" placeholder="字段值"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="100">
                        <template scope="scope">
                            <a v-show="(input.length-1)==scope.$index" @click="addPut(input,'1')"><i class="el-icon-plus"></i></a>
                            <a v-show="input.length>1" @click="delPut(scope.$index,input)"><i class="el-icon-minus"></i></a>
                        </template>
                    </el-table-column>
                  </el-table>
              </el-col>
         </el-form-item>
          <el-form-item label="字段关系">
             <el-col :span="24">
                 <el-input type="textarea" placeholder="关系描述"></el-input>
              </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">导出</el-button>
          </el-form-item>
       </el-form>
    </el-col>
    <!--<el-table :data="list" border style="width: 100%" max-height="500">
        <el-table-column fixed type="index" width="50"></el-table-column>
        <el-table-column :prop="item.name" :label="item.display" v-for="item in output"></el-table-column>
    </el-table>-->
  </section>
</template>

<script>
import api from '../api.js'
import {mInput,mOutput,mContent,mModes,mSymbols} from '../enum.js'
export default {
  data () {
    return {
      input:[],
      output:[],
      list:[],
      symbols:mSymbols
    }
  },
  methods:{
    async exportExcel(){
      let res=await api.defineReport(this.input,this.output,this.list);
      this.list=res.data;
    },
    addPut(row,i){
      let m=i=='1'?mInput:mOutput;
      row.push(m())
    },
    delPut(i,row){
      row.splice(i,1)
    }
  },
  async mounted(){
    
    this.input=[
        {display:"性别",name:"sex",value:"",tableName:"tb_user",symbol:"="},
        {display:"姓名",name:"name",value:"",tableName:"tb_user",symbol:">"},
        {display:"出生时间",name:"date",value:"",tableName:"tb_user",symbol:">="}
    ]
    // this.list=[
    //   {sex:"nan",name:"wei",date:"today"}
    // ];
  }
}
</script>

