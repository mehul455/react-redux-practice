import { DARK_MODE } from "./Darktype";

export const Darkcreatot =(mode)=> async(dispatch)=>{
    dispatch({
        type:DARK_MODE,
        payload:mode
    })
    
}




















// import {
//     DARK_MODE,LIGHT_THEME
// } from "./Darktype";
// export const ToggleDarkTheme = () => ({
//     type: DARK_MODE,
//     // payload:theme

// });
// export const ToggleLightTheme = () => ({
//     type: LIGHT_THEME,
//     // payload:theme
// });






// export const ToggleTheme = (theme) => {
//     return async  (dispatch) => {
//         if (theme === true) {
//             dispatch(ToggleLightTheme())
//         } else{
//             dispatch(ToggleDarkTheme())
//         }
        

//     }
// }