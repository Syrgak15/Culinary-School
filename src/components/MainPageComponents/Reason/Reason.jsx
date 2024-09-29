import React from 'react';
import styles from './Reason.modules.css'
import {useTranslation} from "react-i18next";
import i18next from "../../../i18next";
import useLocalStorage from "use-local-storage";

const Reason = ({reasons,title}) => {

    const {t,i18n} = useTranslation();
    return (
        <div className='reason'>
            <div className="container reason-container">
                <div className="reason-title">
                    <h2>{title}</h2>
                </div>
                <div className="reason-wrapper">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="reason-wrapper__card">
                            <div className="reason__card__img">
                                <img src={reason.image} alt="img"/>
                            </div>
                            <div className="reason__card__title">
                                <h3>{reason.title}</h3>
                            </div>
                            <div className="reason__card__info">
                                <p>{reason.info}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reason;