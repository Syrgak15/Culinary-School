import React from 'react';
import Header from "../../components/Common Components/Header/Header";
import Footer from "../../components/Common Components/Footer/Footer";
import Courses from "../../components/LessonPageComponents/Courses/Courses";
import lessonBg from '../../pictures/lesson-bg.jpg'
import Description from "../../components/Common Components/Description/Description";
import {useTranslation} from "react-i18next";


const LessonPage = () => {
    const {t, i18n} = useTranslation();
    return (
        <div>
            <Header title={t("lessonPage:title")} backgroundImage={lessonBg}/>
            <Description
                title={t("lessonPage:title")}
                subtitle={t("lessonPage:subtitle")}
                info={t("lessonPage:info")}
            />
            <Courses title={t("lessonPage:courses-title")}/>
            <Footer/>
        </div>
    );
};

export default LessonPage;