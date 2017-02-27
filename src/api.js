import axios from 'axios'

axios.defaults.baseURL = 'http://10.21.67.51:8080/';

export default {
    async addReport({name='',content=''}){
        const res=await axios.post(`url`,{name,content});
        return res;
    },
    async updateReport({id,name='',content=''}){
        const res=await axios.post(`url`,{name,content});
        return res;
    },
    async delReport({id}){
        const res=await axios.post(`url`,{id});
        return res;
    },
    async getReport({id}){
        const res=await axios.get(`/getCustomReportByParam`,{id});
        return res;
    },
    async getReports(){
        const res=await axios.get(`/customReportController/getCustomReportByParam`);
        return res;
    },
    async operateReport({id,name='',content=''}){
        return id ? await updateReport({id,name,content}) : await addReport({name,content})
    },
    async defineReport({input={},output={},content={}}){
        const res=await axios.post(`url`,{input,output,content});
        return res;
    }
}