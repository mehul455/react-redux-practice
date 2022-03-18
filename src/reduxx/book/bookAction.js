import { BUY_BOOk } from "./bookType";

export const buyBook =(num=1)=>{
    return{
        type:BUY_BOOk,
        payload:num
    }
}