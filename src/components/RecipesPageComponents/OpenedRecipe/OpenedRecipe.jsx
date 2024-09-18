import React, {useEffect} from 'react';
import styles from './OpenedRecipe.modules.css'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getClickedRecipe} from "../../../store/RecipesPageSlice";
import Header from "../../Common Components/Header/Header";
const OpenedRecipe = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const clickedRecipe = useSelector(state => state.recipeReducer.selectedRecipe)
    useEffect(() => {
        dispatch(getClickedRecipe(id));
    }, []);
    return (
        <>
            <Header title={clickedRecipe.title} backgroundImage={clickedRecipe.image}/>
            <div className='opened-recipe'>
                <div className="container">
                    <div className="opened-recipe__title">
                        <span>How to cook {clickedRecipe.title}</span>
                    </div>
                    <div className="opened-recipe__content">
                        <div className="opened-recipe__ingredients">
                            <span>Ingredients : </span>
                        </div>
                        <div className="opened-recipe__ingredients__list">
                            {clickedRecipe.ingredients && clickedRecipe.ingredients.map(ingredient => (
                                <ul>
                                    <li>{ingredient}</li>
                                </ul>
                            ))}
                        </div>
                        <div className="opened-recipe__content__info">
                            <div>Direction :</div>
                            <p>{clickedRecipe.instructions}</p>
                        </div>
                        <div className="opened-recipe__content__extra">
                            <div>Tips :</div>
                            <p>{clickedRecipe.tips}</p>
                        </div>
                        <div className="opened-recipe__content__visual">
                            <div className="content__visual__card">
                                <div className="content__visual__img">
                                    <img
                                        src="https://www.svgrepo.com/show/170466/serving.svg"
                                        alt="icon"/>
                                </div>
                                <span>{clickedRecipe.serving_size}</span>
                            </div>
                            <div className="content__visual__card">
                                <div className="content__visual__img">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoBgjYLFEzhSglMScuSl0Sa3mxk2U3onjpA&s"
                                        alt="icon"/>
                                </div>
                                <span>{clickedRecipe.prep_time}</span>
                            </div>
                            <div className="content__visual__card">
                                <div className="content__visual__img">
                                    <img
                                        src="https://cdn2.iconfinder.com/data/icons/cooking-9/48/a-03-512.png"
                                        alt="icon"/>
                                </div>
                                <span>{clickedRecipe.cook_time}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OpenedRecipe;