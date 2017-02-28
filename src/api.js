import axios from 'axios';
import querystring from 'querystring';

axios.defaults.baseURL = 'http://10.21.67.51:8080/';

export default {
    async addReport({name='',content=''}){//新增
        const res=await axios.post(`/customReportController/addCustomReport`,querystring.stringify({name,content}));
        return res;
       
    },
    async updateReport({id,name='',content=''}){//修改
        const res=await axios.post(`/customReportController/updateCustomReport`,querystring.stringify({id,name,content}));
        return res;
    },
    async delReport(id){//删除
        const res=await axios.post(`/customReportController/deleteCustomReport`,querystring.stringify({id}));
        return res;
    },
    async getReport(id){//获取详细信息
        const res=await axios.get(`/customReportController/getCustomReportById?id=${id}`);
        return res;
    },
    async getReports(searchName){//获取列表
        const res=await axios.get(`/customReportController/getCustomReportByParam?searchName=${searchName}`);
        return res;
    },
    async operateReport(id,name='',content=''){//新增||修改
        return id ? await this.updateReport({id,name,content}) : await this.addReport({name,content})
    },
    async defineReport({input={},output={},content={}}){
        const res=await axios.post(`url`,{input,output,content});
        return res;
    }
}