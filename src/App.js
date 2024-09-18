import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import LessonPage from "./pages/LessonPage/LessonPage";
import LocationPage from "./pages/LocationPage/LocationPage";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import Navigation from "./components/Common Components/Navigation/Navigation";
import React, {useEffect} from "react";
import OpenedCourse from "./components/LessonPageComponents/OpenedCourse/OpenedCourse";
import OpenedRecipe from "./components/RecipesPageComponents/OpenedRecipe/OpenedRecipe";
import CommonPage from "./pages/CommonPage/CommonPage";
import {useTranslation} from "react-i18next";

function App() {
    const {t} = useTranslation();
    return (
    <BrowserRouter>
      <div className="App">
          <Navigation
              lesson={t("navigation:lessons")}
              recipes={t("navigation:recipes")}
              location={t("navigation:location")}
              button={t("navigation:button")}
          />
      </div>
        <CommonPage>
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path="/lesson" element={<LessonPage/>}/>
                <Route path="/recipes" element={<RecipesPage/>}/>
                <Route path="/location" element={<LocationPage/>}/>
                <Route path="/lessons/:id" element={<OpenedCourse/>}/>
                <Route path="/recipes/:id" element={<OpenedRecipe/>}/>
            </Routes>
        </CommonPage>
    </BrowserRouter>
  );
}

export default App;
