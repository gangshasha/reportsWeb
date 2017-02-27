import _ from 'lodash'
export const mModes=["text","select","datetime"];

export function mInput(item){
    return _.assign({
        display:"",
        name:"",
        mode:"",
        tableName:"",
        selects:[],
        value:""
    },item);
};

export function mOutput(item){
    return _.assign({
        display:"",
        name:"",
        tableName:""
    },item);
};

export function mContent(){
    return _.assign({
        name:""
    },item);
}
