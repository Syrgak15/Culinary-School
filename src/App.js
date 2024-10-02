import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LessonPage from "./pages/LessonPage/LessonPage";
import LocationPage from "./pages/LocationPage/LocationPage";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import Navigation from "./components/Common Components/Navigation/Navigation";
import React, { useEffect, useState } from "react";
import OpenedCourse from "./components/LessonPageComponents/OpenedCourse/OpenedCourse";
import OpenedRecipe from "./components/RecipesPageComponents/OpenedRecipe/OpenedRecipe";
import CommonPage from "./pages/CommonPage/CommonPage";
import { useTranslation } from "react-i18next";
import useLocalStorage from "use-local-storage";

function App() {
    const { t } = useTranslation();
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

    return (
        <div className="App" data-theme={theme}>
            <BrowserRouter>
                <Navigation
                    lesson={t("navigation:lessons")}
                    recipes={t("navigation:recipes")}
                    location={t("navigation:location")}
                    button={t("navigation:button")}
                />
                <CommonPage>
                    <Routes>
                        <Route index element={<MainPage/>}/>
                        <Route path="/lessons" element={<LessonPage/>}/>
                        <Route path="/recipes" element={<RecipesPage/>}/>
                        <Route path="/location" element={<LocationPage/>}/>
                        <Route path="/lessons/:id" element={<OpenedCourse/>}/>
                        <Route path="/recipes/:id" element={<OpenedRecipe/>}/>
                    </Routes>
                </CommonPage>
            </BrowserRouter>
        </div>

    );
}

export default App;
