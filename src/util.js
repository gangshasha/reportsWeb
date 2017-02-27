import _ from 'lodash'

export default {
    completeReportJSON({input=[],output=[],content=[]}){
        input=input.map((item)=>{
            return _.assign({
                                display:"",
                                name:"",
                                mode:"",
                                tableName:"",
                                selects:[],
                                value:""
                            },item);
        });
        return {input,output,content};
    }
}