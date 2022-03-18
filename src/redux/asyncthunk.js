// async Action Creator =>
// Redux Thunk => middleware => function(dispatch){aync}
// axios => user to request API rnd point










const React =  require('react')
const  { redux , createStore, combineReducers , applyMiddleware,  }=  require('redux')
const axios = require('axios')
const thunkMidleware = require('redux-thunk').default;

const initialState={
    loading:false,
    users:[],
    error:''
}

// action
const  USER_REQUEST = 'USER_REQUEST';
const USER_SUCCSES = 'USER_SUCCES';
const USER_ERROR = 'USER_ERROR';
// action creator
const userRequest =()=>{
    return {
        type: USER_REQUEST
    }
}

const userSucces =(user)=>{
    return {
        type: USER_SUCCSES,
        payload:user
    }
}

const userError =(error)=>{
    return {
        type: USER_ERROR,
        payload:error
    }
}

const Reducer =(state=initialState,action)=>{
    switch(action.type){
        case 'USER_REQUEST':
            return {
                ...state,
                loading:true
            }
            case 'USER_SUCCES':
            return {
                // ...state,
                loading:false,
                user: action.payload,
                error:''
            }
            case 'USER_ERROR':
            return {
                ...state,
                loading:false,
                user: [],
                error:action.payload
            }
    }

}


const fetchUser =()=>{
    return function(dispatch){
        dispatch(userRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            // response.data
           const users = res.data.map(user=>user.name)
           dispatch(userSucces(users))
        })
        .catch(erro=>{
            dispatch(userError(erro.message))
        })
    }
}

const store = createStore(Reducer,applyMiddleware(thunkMidleware));
store.subscribe(()=>{console.log(store.getState())});

store.dispatch(fetchUser());