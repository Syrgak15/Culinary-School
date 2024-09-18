import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

export const postUserInfo = createAsyncThunk(
    "postUserInfo",
    async function (post,{dispatch}){
        try{
            const response = await fetch(`http://localhost:8001/posts`,{
                method: "POST",
                body:JSON.stringify(post),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            dispatch(postUser(data))
        }
        catch(error){
            console.log(error)
        }
    }

)


const LocationPageSlice = createSlice({
    name: 'LocationPage',
    initialState: {
        user: [],
    },
    reducers:{
        postUser:(state,action)=>{
            state.user.push(action.payload)
        }
    }

})

export const {postUser} = LocationPageSlice.actions
export default LocationPageSlice.reducer