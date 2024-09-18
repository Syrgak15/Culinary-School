import React, {useEffect} from 'react';
import styles from './Courses.modules.css';
import {useDispatch, useSelector} from "react-redux";
import {getLessons} from "../../../store/LessonPageSlice";
import CourseCard from "../CourseCard/CourseCard";
import {useTranslation} from "react-i18next";

const Courses = ({title}) => {
    const { t, i18n } = useTranslation();
    const lessons = useSelector((state) => state.lessonReducer.lessons);
    const dispatch = useDispatch();
    const getAllLessons = ()=>{
        dispatch(getLessons());
    }
    useEffect(() => {
        getAllLessons()
    }, []);

    const translatedLessons = lessons.map(lesson => ({
        title: t(lesson.title),
        description: t(lesson.description),
        date: t(lesson.date)

    }));
    console.log(translatedLessons);
    return (
        <div className='courses'>
            <div className="container">
                <div className="courses-title">
                    <h2>{title}</h2>
                </div>
                <CourseCard lessons={lessons}/>
            </div>
        </div>
    );
};

export default Courses;