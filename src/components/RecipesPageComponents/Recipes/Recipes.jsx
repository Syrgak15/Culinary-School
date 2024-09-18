import React, { useEffect, useState } from 'react';
import styles from './Recipes.modules.css';
import searchIcon from '../../../pictures/icons/search-input.svg';
import { useDispatch, useSelector } from "react-redux";
import { getRecipeList } from "../../../store/RecipesPageSlice";
import RecipeItem from "../RecipeItem/RecipeItem";
import Undefined from "../../Common Components/Undefined/Undefined";
import {Button} from "@mui/material";

const Recipes = ({title}) => {
    const [limit, setLimit] = useState(4);
    const [value, setValue] = useState('');
    const recipes = useSelector(state => state.recipeReducer.list);
    const dispatch = useDispatch();

    const getRecipes = () => {
        dispatch(getRecipeList());
    };

    const filteredRecipes = recipes.filter(recipe => {
        return recipe.title.toLowerCase().includes(value.toLowerCase());
    });

    const loadMore = () => {
        setLimit(limit + 4);
    };

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <div className='recipes-page'>
            <div className="container">
                <div className="recipes-page__title">
                    <h2>{title}</h2>
                </div>
                <form className='recipes-page__form'>
                    <input
                        type="text"
                        placeholder='Search in the recipes...'
                        className='recipe-search__input'
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <img className='recipe-search__icon' src={searchIcon} alt="icon"/>
                </form>
                <div className="recipes-page__cards">
                    {filteredRecipes && filteredRecipes.length > 0 ? (
                        filteredRecipes.slice(0, limit).map(recipe => (
                            <RecipeItem
                                recipeInfo={recipe}
                            />
                        ))
                    ) : (
                        <Undefined/>
                    )}
                </div>
                <div className='recipes-page__btn'>
                    {filteredRecipes.length > limit && (
                        <Button variant="outlined" color='inherit' onClick={loadMore}>Load more</Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Recipes;
