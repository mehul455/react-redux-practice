import { BUY_BOOk } from "./bookType";



const intialState ={
    numberOfBooks:10
}

const bookReducer=(state=intialState,action)=>{
    switch(action.type){
        case BUY_BOOk:
            return {
                ...state,
                numberOfBooks:state.numberOfBooks- action.payload
            }
        default:
            return state;


    }

}
export default bookReducer