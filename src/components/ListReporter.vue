<template>
    <section>
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true">
                <el-form-item label="报表名称">
                    <el-input v-model="searchName" placeholder="报表名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getReports();">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button @click="$router.push({ name: 'SetReporter'})">添加</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-table :data="list" highlight-current-row v-loading="listLoading" style="width: 100%" max-height="500">
            <el-table-column fixed type="index" width="50"></el-table-column>
            <el-table-column prop="REPORT_NAME" label="报表名称"></el-table-column>
            <el-table-column prop="CREATE_TIME" label="时间"></el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
                <template scope="scope">
                    <el-button size="small" @click="$router.push({ name: 'SetReporter', params: { id: scope.row.REPORT_ID }})" >编辑</el-button>
                    <el-button size="small" type="danger" @click="deleteReport(scope.$index,list)">删除</el-button>
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
                list:[],
                searchName:""
            }
        },
        methods:{
            async deleteReport(index,rows){
                let that=this;
                let res=await api.delReport(rows[index].REPORT_ID);
                if(res.data.count){
                    rows.splice(index, 1);
                     that.$notify.success({
                        title: '成功',
                        message: '这是一条成功的提示消息'
                    });
                    that.getReports();
                }else{
                    that.$notify.error({
                        title: '失败',
                        message: '这是一条失败的提示消息'
                    });
                }
            },
            async getReports(){
               let res=await api.getReports(this.searchName);
               this.list=res.data.list;
            }
        },

         mounted(){//自动执行
          this.getReports();
        }
    }
</script>