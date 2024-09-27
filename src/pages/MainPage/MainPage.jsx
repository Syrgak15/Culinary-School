import React, {useEffect, useState} from 'react';
import styles from './MainPage.modules.css'
import Description from "../../components/Common Components/Description/Description";
import introVideo from '../../pictures/video/intro__video.mp4'
import SliderComponent from "../../components/MainPageComponents/Slider/Slider";
import Footer from "../../components/Common Components/Footer/Footer";
import Video from "../../components/MainPageComponents/Video/Video";
import Reason from "../../components/MainPageComponents/Reason/Reason";
import {useDispatch, useSelector} from "react-redux";
import {getReasons} from "../../store/MainPageSlice";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import useLocalStorage from "use-local-storage";

const MainPage = () => {
    const reasons = useSelector(state=>state.mainReducer.reasons);

    const dispatch = useDispatch();

    const {t,i18n} = useTranslation()

    const copyReasons = reasons.slice()

    const getReasonsSchool = ()=>{
        dispatch(getReasons())
    }

    useEffect(() => {
        getReasonsSchool();
    }, []);

    return (
        <div>
            <Video
                title={t("mainPage:video-title")}
                info={t("mainPage:video-info")}
            />
            <Description
                title={t("mainPage:title")}
                subtitle={t("mainPage:subtitle")}
                info={t("mainPage:info")}
            />
            <Reason
                title={t("mainPage:reason-title")}
                reasons={reasons}
            />
            <SliderComponent title={t("mainPage:slider-title")}/>
            <Footer/>
        </div>
    )
};

export default MainPage;