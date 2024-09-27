import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

export const getLessons = createAsyncThunk(
    'getLessons',
    async function (info,{dispatch}){
        try{
            const response = await fetch('http://localhost:8000/lessons')
            const data = await response.json()
            dispatch(getLesson(data))
        }
        catch(error){
            console.log(error)
        }
    }
)

export const getClickedLesson = createAsyncThunk(
    'getClickedLesson',
    async function(id,{dispatch}){
        try{
            const response = await fetch(`http://localhost:8000/lessons/${id}`)
            const data = await response.json()
            dispatch(getSingleLesson(data))
        }
        catch(e){
            console.log(e)
        }
    }
)



const LessonPageSlice = createSlice({
    name: 'lessons',
    initialState:{
        lessons:[],
        lesson:{}
    },
    reducers:{
        getLesson:(state,action)=>{
            state.lessons = action.payload
        },
        getSingleLesson:(state,action)=>{
            state.lesson = action.payload
        }

    }
})

export const {getLesson,getSingleLesson}=LessonPageSlice.actions
export default LessonPageSlice.reducer