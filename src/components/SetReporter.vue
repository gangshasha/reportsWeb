<template>
    <section>
         <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form ref="form" :model="form" label-width="120px">
                {{$route.params.id}}
                <el-form-item label="报表名称">
                    <el-col :span="12">
                        <el-input v-model="form.content.name"></el-input>
                    </el-col>
                    <el-col :span="10">
                        &nbsp;
                    </el-col>
                    <el-col :span="2">
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                    </el-col>
                </el-form-item>
                <el-form-item label="输入">
                    <div class="group-warp">
                        <el-form-item v-for="(item,i) in form.input">
                            <el-col :span="4">
                                <el-input v-model="item.tableName" placeholder="表名"></el-input>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="4">
                                <el-input v-model="item.display" placeholder="字段描述"></el-input>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="4">
                                <el-input v-model="item.name" placeholder="字段值"></el-input>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="4">
                                <el-select v-model="item.mode" placeholder="展示方式">
                                    <el-option label="文本" value="text"></el-option>
                                    <el-option label="时间" value="time"></el-option>
                                    <el-option label="下拉" value="datetime"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="2">
                                <a v-show="(form.input.length-1)==i" @click="addPut(form.input,'1')"><i class="el-icon-plus"></i></a>
                                <a v-show="form.input.length>1" @click="delPut(i,form.input)"><i class="el-icon-minus"></i></a>
                            </el-col>
                        </el-form-item>
                    </div>
                </el-form-item>
                <el-form-item label="输出">
                    <el-table :data="form.output" border style="width: 100%">
                        <el-table-column label="表名">
                            <template scope="scope">
                                <el-input v-model="scope.row.tableName" placeholder="表名"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="字段描述">
                            <template scope="scope">
                                <el-input v-model="scope.row.display" placeholder="字段描述"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="字段名">
                                <template scope="scope">
                                    <el-input v-model="scope.row.name" placeholder="字段名"></el-input>
                                </template>
                        </el-table-column>
                        <el-table-column fixed="right" label="操作" width="100">
                            <template scope="scope">
                                <a v-show="(form.output.length-1)==scope.$index" @click="addPut(form.output,'2')"><i class="el-icon-plus"></i></a>
                                <a v-show="form.output.length>1" @click="delPut(scope.$index,form.output)"><i class="el-icon-minus"></i></a>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-form-item>
            </el-form>
         </el-col>
    </section>
</template>
<script>
import api from '../api.js'
import {mInput,mOutput,mContent,mModes} from '../enum.js'
  export default {
    data() {
      return {
        form: {
          input: [
              {display:"性别",name:"sex",mode:"select",tableName:"tb_user"},
              {display:"姓名",name:"name",mode:"text",tableName:"tb_user"},
              {display:"出生时间",name:"date",mode:"datetime",tableName:"tb_user"}
          ],
          output:[
              {display:"姓名",name:"name",tableName:"tb_user"},
              {display:"性别",name:"sex",tableName:"tb_user"},
              {display:"家庭地址",name:"address",tableName:"tb_user"},
              {display:"学校",name:"school",tableName:"tb_user"},
              {display:"电话",name:"sex",tableName:"tb_user"}
          ],
          content:{
              name:""
          }
        }
      }
    },
    methods: {
      async onSubmit() {
        let res=await api.operateReport(this.$route.params.id,this.form.content.name,this.form);
        this.$notify.success({
          title: $route.params.id?'添加':'修改',
          message: '这是一条成功的提示消息'
        });
      },
      addPut(row,i){
        let m=i=='1'?mInput:mOutput;
        row.push(m())
      },
      delPut(i,row){
        row.splice(i,1)
      }
    }
  }
</script>