const React =  require('react')
const {Redux , createStore, combineReducers , applyMiddleware}=  require('redux')
// const createStore = Redux.createStore;
// const combineReducer = Redux.combineReducers





const buy_book='Buy_Book'

const intialStatesBooks = {
    numberOfBooks:10,

}
const intialStatesPens = {
    numberOfPens:15

}


// const action={
//     type:buy_book,
//     info:"My first Redu Code"
// }

// const  buyBook=()=>{
//     return action
// }
// action creator
const  buyBook=()=>{
    return {
        // actions
        type:buy_book,
        payload:"My first Redu Code"
    }
}

const  buyPen=()=>{
    return {
        // actions
        type:'buy_Pen',
        payload:"My first Redu Code"
    }
}

// reducer
const ReducerBook =(state=intialStatesBooks,action)=>{

    switch(action.type){
        case 'Buy_Book':
            return{
                ...state,
                numberOfBooks:state.numberOfBooks - 1
            }
        default : return state;
    }

}
const ReducerPen =(state=intialStatesPens,action)=>{

    switch(action.type){

            case 'buy_Pen':
            return{
                ...state,
                numberOfPens:state.numberOfPens - 2
            }
        default : return state;
    }

}

// const store= createStore(combineReducers({ReducerPen,ReducerBook}))
const reducer = combineReducers({
    book: ReducerBook,
    pen:ReducerPen
})

const logger = store =>{
    return next=>{
        return action =>{
            const result=next(action)
            console.log("middleware log",result);
            return result
        }
    }
}
const store= createStore(reducer,applyMiddleware(logger))

console.log('Intital State', store.getState());
const unsubscribe = store.subscribe(()=>{console.log('update state value',store.getState())});
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());
unsubscribe();




// const index = () => {
//   return (
//     <div>index</div>
//   )
// }

// export default index

