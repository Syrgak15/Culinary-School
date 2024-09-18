import React from 'react';
import styles from './ChangeLanguage.modules.css'
import {useTranslation} from "react-i18next";

const ChangeLanguage = () => {
    const {t,i18n} = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (
        <div className='change-language'>
            <button className='button-english' onClick={() => changeLanguage("en")}>
                <img src="https://icons.iconarchive.com/icons/wikipedia/flags/512/GB-United-Kingdom-Flag-icon.png" alt="icon"/>
            </button>
            <button className='button-russian' onClick={() => changeLanguage("ru")}>
                <img src="https://icons.iconarchive.com/icons/custom-icon-design/flat-europe-flag/512/Russia-icon.png" alt="icon"/>
            </button>
        </div>
    );
};

export default ChangeLanguage;