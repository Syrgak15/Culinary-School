import React, {useEffect} from 'react';
import {Button} from "@mui/material";
import styles from './CourseCard.modules.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getClickedLesson} from "../../../store/LessonPageSlice";
import {useTranslation} from "react-i18next";


const CourseCard = ({lessons}) => {
    const { t } = useTranslation();
    const singleLesson = useSelector(state => state.lessonReducer.lesson)
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className="courses-wrapper">
            {lessons.map(((lesson,key) => (
                <div
                    key={key}
                    className="courses-wrapper__card">
                    <NavLink
                        onClick={handleScrollToTop}
                        className='course-wrapper__card__img'
                        to={`/lessons/${lesson.id}`}>
                            <img
                                src={lesson.image}
                                alt="img"/>
                    </NavLink>
                    <NavLink
                        onClick={handleScrollToTop}
                        className="course-wrapper__card__title"
                        to={`/lessons/${lesson.id}`}>
                        <span>{lesson.title}</span>
                    </NavLink>
                    <div className="course-wrapper__card__info">
                        <span>{lesson.date}</span>
                        <p>{lesson.description}</p>
                    </div>
                    <NavLink
                        onClick={handleScrollToTop}
                        to={`/lessons/${lesson.id}`}>
                        <Button variant="outlined" color='inherit' className='btn'>Find out more</Button>
                    </NavLink>
                </div>
            )))}
        </div>
    );
};

export default CourseCard;