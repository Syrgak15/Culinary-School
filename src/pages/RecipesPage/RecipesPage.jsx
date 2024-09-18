import React from 'react';
import Header from "../../components/Common Components/Header/Header";
import recipesBg from '../../pictures/recipes-bg.jpg'
import Description from "../../components/Common Components/Description/Description";
import Recipes from "../../components/RecipesPageComponents/Recipes/Recipes";
import Footer from "../../components/Common Components/Footer/Footer";
import {useTranslation} from "react-i18next";

const RecipesPage = () => {
    const {t,i18n} = useTranslation();
    return (
        <div>
            <Header title={t("recipesPage:title")} backgroundImage={recipesBg}/>
            <Description
                title={t("recipesPage:title")}
                subtitle={t("recipesPage:subtitle")}
                info={t("recipesPage:info")}
            />
            <Recipes title={t("recipesPage:recipe-title")}/>
            <Footer/>
        </div>
    );
};

export default RecipesPage;