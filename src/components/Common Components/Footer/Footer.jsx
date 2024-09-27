import React from 'react';
import styles from './Footer.modules.css'
import logo from '../../../pictures/icons/logo.svg'
import {NavLink} from "react-router-dom";
import MainPage from "../../../pages/MainPage/MainPage";
import LessonPage from "../../../pages/LessonPage/LessonPage";
import LocationPage from "../../../pages/LocationPage/LocationPage";
import ProgrammesPage from "../../../pages/RecipesPage/RecipesPage";
import facebook from '../../../pictures/icons/facebook.svg'
import instagram from '../../../pictures/icons/inst.svg'
import youtube from '../../../pictures/icons/youtube.svg'
import RecipesPage from "../../../pages/RecipesPage/RecipesPage";

const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-block__img">
                    <NavLink
                        onClick={handleScrollToTop}
                        className='footer-block__logo' to='/' element={<MainPage/>}>
                        <span>Epicurean Arts</span>
                    </NavLink>
                </div>
                <div className="footer-wrapper">
                    <div className="footer-wrapper__block">
                        <div className="footer__block__info">
                            <ul>
                                <li>Cherkesskaya Street,16</li>
                                <li>Kyrgyzstan,Bishkek city</li>
                                <li>Tel. +996(551)150-108 - Fax. +44-208-1234567</li>
                                <li>Email. delcatessen@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-wrapper__block">
                        <div className="footer__block__info">
                            <ul>
                                <li><NavLink
                                    onClick={handleScrollToTop}
                                    className='footer-navLink' to='/lesson'
                                             element={<LessonPage/>}>Lessons</NavLink></li>
                                <li><NavLink
                                    onClick={handleScrollToTop}
                                    className='footer-navLink' to="/recipes"
                                             element={<RecipesPage/>}>Recipes</NavLink></li>
                                <li><NavLink
                                    onClick={handleScrollToTop}
                                    className='footer-navLink' to='/location'
                                             element={<LocationPage/>}>Location</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-wrapper__block">
                        <div className="footer-wrapper__block__social">
                            <ul>
                                <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100083341717863"><img src={facebook} alt="icon"/></a></li>
                                <li><a target="_blank" href="https://www.instagram.com/mildr3dw/"><img src={instagram} alt="icon"/></a></li>
                                <li><a target="_blank" href="https://www.youtube.com/@syrgaksulaimanov3922"><img src={youtube} alt="icon"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-divider"></div>
                <div className="footer-copyright">
                    <span>©Copyright 2024 / Epicurean Arts Culinary Center - Kyrgyzstan, Bishkek - Tax ID 123456789 - Authorized Capital 1,000,000 KGS</span>
                </div>
            </div>

        </div>
    );
};

export default Footer;