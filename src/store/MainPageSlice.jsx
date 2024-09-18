import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

export const getUsersList = createAsyncThunk(
    'getUserAll',
    async function(info,{dispatch}){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            dispatch(getList(data))
        }
        catch(e){
            console.log(e)
        }
    }
)

export const getReasons = createAsyncThunk(
    'getReasons',
    async function(info,{dispatch}){
        try{
            const response = await fetch('http://localhost:8001/reasons')
            const data = await response.json()
            dispatch(getReason(data))
        }
        catch(error){
            console.log(error)
        }
    }
)

const MainPageSlice = createSlice({
    name:'mainSlice',
    initialState:{
        users:[],
        reasons:[]
    },
    reducers:{
        getList:(state,action)=>{
            state.users = action.payload
        },
        getReason:(state,action)=>{
            state.reasons = action.payload
        }

    }
})

export const {getList,getReason} = MainPageSlice.actions
export default MainPageSlice.reducer;