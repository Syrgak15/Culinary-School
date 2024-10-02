import React from 'react';
import introVideo from "../../../pictures/video/intro__video.mp4";

const Video = ({title,info}) => {
    return (
        <div>
            <div className="video-wrapper">
                <video className="video" autoPlay preload="auto"  playsinline muted loop src={introVideo}></video>
            </div>
            <div className="intro-wrapper">
                <div className="intro-wrapper__box">
                    <div className="intro-wrapper__box__title">
                        <span>{title}</span>
                    </div>
                    <div className="intro-wrapper__box__content">
                        <p>{info}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;