import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import locationPage_en from '../../my-app/src/locales/LocationPageTranslation/En/translation.json';
import locationPage_ru from '../../my-app/src/locales/LocationPageTranslation/Ru/translation.json';
import navigation_en from '../../my-app/src/locales/NavigationTranslation/En/translation.json';
import navigation_ru from '../../my-app/src/locales/NavigationTranslation/Ru/translation.json';
import mainPage_en from '../../my-app/src/locales/MainPageTranslation/En/translation.json';
import mainPage_ru from '../../my-app/src/locales/MainPageTranslation/Ru/translation.json';
import lessonPage_en from '../../my-app/src/locales/LessonPageTranslation/En/translation.json';
import lessonPage_ru from '../../my-app/src/locales/LessonPageTranslation/Ru/translation.json';
import recipesPage_en from '../../my-app/src/locales/RecipePageTranslation/En/translation.json';
import recipesPage_ru from '../../my-app/src/locales/RecipePageTranslation/Ru/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                mainPage:mainPage_en,
                lessonPage:lessonPage_en,
                locationPage: locationPage_en,
                recipesPage:recipesPage_en,
                navigation: navigation_en,
            },
            ru: {
                mainPage:mainPage_ru,
                lessonPage:lessonPage_ru,
                locationPage: locationPage_ru,
                recipesPage:recipesPage_ru,
                navigation: navigation_ru,
            },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
