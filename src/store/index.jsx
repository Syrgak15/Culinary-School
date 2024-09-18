import {configureStore} from '@reduxjs/toolkit'
import mainReducer from './MainPageSlice'
import recipeReducer from './RecipesPageSlice'
import lessonReducer from './LessonPageSlice'
import locationReducer from './LocationPageSlice'

const store = configureStore({
    reducer:{
        mainReducer,
        recipeReducer,
        lessonReducer,
        locationReducer
    }
})

export default store;