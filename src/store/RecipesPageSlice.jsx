import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

export const getRecipeList = createAsyncThunk(
    'getRecipesList',
    async function (info,{dispatch}){
        try{
            const response = await fetch('http://localhost:8001/recipes')
            const data = await response.json();
            dispatch(getRecipes(data))
        }
        catch(error){
            console.log(error)
        }
    }
)
export const getClickedRecipe = createAsyncThunk(
    'getClickedRecipe',
    async function(id,{dispatch}){
        try{
            const response = await fetch(`http://localhost:8001/recipes/${id}`)
            const data = await response.json();
            dispatch(getOneRecipe(data))
        }
        catch(error){
            console.log(error)
        }
    }
)

const RecipePageSlice = createSlice({
    name: 'recipes',
    initialState:{
        list:[],
        selectedRecipe:[]
    },
    reducers:{
        getRecipes:(state,action)=>{
            state.list = action.payload
        },
        getOneRecipe:(state,action)=>{
            state.selectedRecipe = action.payload
        }
    }
})

export const {getRecipes,getOneRecipe} = RecipePageSlice.actions
export default RecipePageSlice.reducer