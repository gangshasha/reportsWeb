<template>
    <section>
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true">
                <el-form-item label="报表名称">
                    <el-input  placeholder="报表名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button @click="$router.push({ name: 'SetReporter'})">添加</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-table :data="list" highlight-current-row v-loading="listLoading" style="width: 100%" max-height="500">
            <el-table-column fixed type="index" width="50"></el-table-column>
            <el-table-column prop="name" label="报表名称"></el-table-column>
            <el-table-column  label="时间" width="150"></el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
                <template scope="scope">
                    <el-button size="small" @click="$router.push({ name: 'SetReporter', params: { id: scope.row.id }})" >编辑</el-button>
                    <el-button size="small" type="danger" @click="delete(scope.$index,list)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </section>
</template>
<script>
    import api from '../api.js'
    export default {
        data(){
            return {
                listLoading: false,
                list:[
                        {id:"1",name:"aaa",content:""},
                        {id:"2",name:"aaa",content:""},
                        {id:"3",name:"aaa",content:""},
                        {id:"4",name:"aaa",content:""},
                        {id:"5",name:"aaa",content:""},
                        {id:"6",name:"aaa",content:""},
                        {id:"7",name:"aaa",content:""}
                    ]
            }
        },
        methods:{
            async delete(index,rows){
                let res=await api.delReport(rows[index].id);
                if(res){
                    rows.splice(index, 1);
                    that.$notify.success({
                        title: '成功',
                        message: '这是一条成功的提示消息'
                    });
                }else{
                    that.$notify.error({
                        title: '成功',
                        message: '这是一条成功的提示消息'
                    });
                }
            }
        }
    }
</script>