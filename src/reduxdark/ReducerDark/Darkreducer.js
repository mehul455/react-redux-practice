import {DARK_MODE,LIGHT_THEME} from '../Actiondark/Darktype'
const intialState={
    theme: false
}
const Darkreducer =(state=intialState,action)=>{

    switch (action.type) {
        case DARK_MODE:
            return {...state, theme:action.payload };
        // case LIGHT_THEME:
        //     return { ...state,theme: false };
        default:
            return state;
    }

}

export default Darkreducer;