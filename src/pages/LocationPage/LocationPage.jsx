import React from 'react';
import Header from "../../components/Common Components/Header/Header";
import locationBg from "../../pictures/location-bg.jpg";
import Description from "../../components/Common Components/Description/Description";
import Contact from "../../components/LocationPageComponents/Contact/Contact";
import Footer from "../../components/Common Components/Footer/Footer";
import {useTranslation} from "react-i18next";

const LocationPage = () => {

    const {t,i18n} = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div>
            <Header title={t("locationPage:title")} backgroundImage={locationBg}/>
            <Description title={t("locationPage:title")} subtitle={t("locationPage:info")}/>
            <Contact representative={t("locationPage:representative")} title={t("locationPage:title")}/>
            <Footer/>
        </div>
    );
};

export default LocationPage;