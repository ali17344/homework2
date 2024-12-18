import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from 'axios'
const GET_USER = 'GET_USER'
const GET_USER_INFO = 'GET_USER_INFO'


export const get_user = () =>{ 
    let action = createAction(GET_USER)
    return (dispatch) => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(({data}) => dispatch(action(data)))
    }
}
export const get_user_info = (id) =>{ 
    let action = createAction(GET_USER_INFO)
    return (dispatch) => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(({data}) => {dispatch(action(data))
        })
    }
    
}

const initialState = {
     user: [],
     userInfo: {},
     load:false,
}

export default createReducer(initialState, (builder) => {
    builder
    .addCase(GET_USER, (state, action ) => {
        state.user = action.payload
        
    })  
    .addCase(GET_USER_INFO, (state, action ) => {
        state.userInfo = action.payload
    })
})