import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import MainPage from "../../../pages/MainPage/MainPage";
import LessonPage from "../../../pages/LessonPage/LessonPage";
import LocationPage from "../../../pages/LocationPage/LocationPage";
import RecipesPage from "../../../pages/RecipesPage/RecipesPage";
import styles from './Navigation.modules.css'
import logo from '../../../pictures/icons/logo.svg'
import {Button} from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useTranslation} from "react-i18next";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";
import TextField from "@mui/material/TextField";
import {useDispatch, useSelector} from "react-redux";
import useLocalStorage from "use-local-storage";
import ToogleTheme from "../ToggleTheme/ToggleTheme";

const Navigation = ({lesson,button,location,recipes}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const {t,i18n} = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
    return (
        <div className='navigation'>
            <div className="navigation-container">
                <NavLink className='navLink-logo' to='/' element={<MainPage/>}>
                    Epicurean Arts
                </NavLink>
                <NavLink className='navLink' to='/lesson' element={<LessonPage/>}>{lesson}</NavLink>
                <NavLink className='navLink' to='/recipes' element={<RecipesPage/>}>{recipes}</NavLink>
                <NavLink className='navLink' to='/location' element={<LocationPage/>}>{location}</NavLink>
                <Button onClick={handleOpen} variant="outlined" color='inherit' className='btn'>{button}</Button>
                <ChangeLanguage/>
                <ToogleTheme/>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography sx={{fontStyle: 'oblique'}} className='modal-title' id="modal-modal-title"
                                    variant="h4" component="h2">
                            The History of EACC
                        </Typography>
                        <Typography className='modal-info' component={'p'}>
                            <p>The Epicurean Cooking School was founded in response
                                to the growing desire of people to return to the roots
                                of the culinary art and enjoy the simple joys it brings.
                            </p>
                            <p>The idea was born in the heart of a group of enthusiasts
                                passionate about gastronomy and the philosophy of Epicurus,
                                who taught that true happiness lies in enjoying quality food
                                and communicating with loved ones.Inspired by this teaching,
                                we decided to create a space where everyone could study cooking
                                not only as a craft, but also as an art.
                            </p>
                            <p>
                                Our school opened in a
                                cozy corner of the city, where we began to hold master classes,
                                seminars and gastronomic evenings, uniting people with common interests.
                                Since then, we have grown into a community that values the quality of ingredients,
                                tradition and innovation. We strive to inspire our students to find joy in every
                                preparation, creating not just dishes, but real culinary masterpieces that delight
                                the soul and body.
                            </p>
                        </Typography>
                        <Typography id="modal-modal-description" sx={{mt: 2}}>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
);
};

export default Navigation;