import React from 'react';
import styles from './RecipeItem.modules.css'
import {useDispatch} from "react-redux";
import {getClickedRecipe} from "../../../store/RecipesPageSlice";
import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";

const RecipeItem = ({recipeInfo}) => {
    const dispatch = useDispatch();
    const getOneRecipe = (id)=>{
        dispatch(getClickedRecipe(recipeInfo.id));
        console.log(recipeInfo.id)
    }
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div
            className='recipe-item'>
            <NavLink
                onClick={handleScrollToTop}
                to={`/recipes/${recipeInfo.id}`}>
                <div className="recipe-img">
                    <img src={recipeInfo.image} alt="img"/>
                </div>
            </NavLink>

            <NavLink
                onClick={handleScrollToTop}
                className='recipe-link'
                to={`/recipes/${recipeInfo.id}`}>
                <h2
                    onClick={getOneRecipe}>
                    {recipeInfo.title}
                </h2>
            </NavLink>
            <p><strong>Instruction :</strong> {recipeInfo.instructions}</p>
            <div className="ingredients">
                <strong>Ingredients : </strong>
                {recipeInfo.ingredients.map(ingredient => (
                    <span> {ingredient},</span>
                ))}
            </div>
            <NavLink
                onClick={handleScrollToTop}
                to={`/recipes/${recipeInfo.id}`}>
                <Button variant="outlined" color='inherit' className='btn' >View Recipe</Button>
            </NavLink>
        </div>
    );
};

export default RecipeItem;