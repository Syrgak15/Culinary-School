import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getClickedLesson} from "../../../store/LessonPageSlice";
import styles from './OpenedCourse.modules.css'
import Header from "../../Common Components/Header/Header";
import openedCourseBg from '../../../pictures/openedcourse-bg.jpeg'
import {Avatar} from "@mui/material";
import Footer from "../../Common Components/Footer/Footer";

const OpenedCourse = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const lesson = useSelector(state => state.lessonReducer.lesson);
    useEffect(() => {
        dispatch(getClickedLesson(id));
    }, [id, dispatch]);
    return (
        <>
            <div className='opened-course'>
                <Header title={lesson.title} backgroundImage={openedCourseBg}/>
                <div className="container course-container">
                    <Avatar
                        sx={{width: 250, height: 250, margin: "0 auto"}}
                        alt={lesson.title}
                        src={lesson.image}/>
                    <div className="opened-course__date">
                        {lesson.date}
                    </div>
                    <div className="opened-course__divider"></div>
                    <div className="opened-course__info">
                        <p>{lesson.description}</p>
                        <p>{lesson.explanation}</p>
                    </div>
                    <div className="opened-course__description">
                        <div className="opened-course__card">
                            <div className="course__card__img">
                                <img
                                    src="https://icons.veryicon.com/png/o/miscellaneous/big-data-regular-monochrome-icon/real-time-2.png"
                                    alt="icon"/>
                            </div>
                            <span>{lesson.duration}</span>
                        </div>
                        <div className="opened-course__card">
                            <div className="course__card__img">
                                <img src="https://www.svgrepo.com/show/58543/bars-level.svg" alt="icon"/>
                            </div>
                            <span>{lesson.level}</span>
                        </div>
                        <div className="opened-course__card">
                            <div className="course__card__img">
                                <img
                                    src="https://icons.veryicon.com/png/o/system/university-performance-appraisal-system/teacher-list.png"
                                    alt="icon"/>
                            </div>
                            <span>{lesson.instructor}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    );
};

export default OpenedCourse;