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
    const course = useSelector(state => state.lessonReducer.lesson);
    useEffect(() => {
        dispatch(getClickedLesson(id));
    }, [id]);
    return (
        <>
            <div className='opened-course'>
                <Header title={course.title} backgroundImage={openedCourseBg}/>
                <div className="container course-container">
                    <Avatar
                        sx={{width: 250, height: 250, margin: "0 auto"}}
                        alt={course.title}
                        src={course.image}/>
                    <div className="opened-course__date">
                        {course.date}
                    </div>
                    <div className="opened-course__divider"></div>
                    <div className="opened-course__info">
                        <p>{course.description}</p>
                        <p>{course.explanation}</p>
                    </div>
                    <div className="opened-course__description">
                        <div className="opened-course__card">
                            <div className="course__card__img">
                                <img
                                    src="https://icons.veryicon.com/png/o/miscellaneous/big-data-regular-monochrome-icon/real-time-2.png"
                                    alt="icon"/>
                            </div>
                            <span>{course.duration}</span>
                        </div>
                        <div className="opened-course__card">
                            <div className="course__card__img">
                                <img src="https://www.svgrepo.com/show/58543/bars-level.svg" alt="icon"/>
                            </div>
                            <span>{course.level}</span>
                        </div>
                        <div className="opened-course__card">
                            <div className="course__card__img">
                                <img
                                    src="https://icons.veryicon.com/png/o/system/university-performance-appraisal-system/teacher-list.png"
                                    alt="icon"/>
                            </div>
                            <span>{course.instructor}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    );
};

export default OpenedCourse;