import axios from 'axios';
import querystring from 'querystring';

axios.defaults.baseURL = 'http://10.21.67.51:8080/';

export default {
    async addReport({name='',content=''}){
        const res=await axios.post(`/customReportController/addCustomReport`,querystring.stringify({name,content}));
        return res;
       
    },
    async updateReport({id,name='',content=''}){
        console.log("update",querystring.stringify({id,name,content}));
        const res=await axios.post(`/customReportController/updateCustomReport`,querystring.stringify({id,name,content}));
        return res;
    },
    async delReport(id){
        const res=await axios.post(`/customReportController/deleteCustomReport`,querystring.stringify({id}));
        return res;
    },
    async getReport(id){
        const res=await axios.get(`/customReportController/getCustomReportById?id=${id}`);
        return res;
    },
    async getReports(){
        const res=await axios.get(`/customReportController/getCustomReportByParam`);
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