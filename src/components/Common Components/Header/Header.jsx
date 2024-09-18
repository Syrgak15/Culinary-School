import React from 'react';
import styles from './Header.modules.css'
import lessonBackground from '../../../pictures/lesson-bg.jpg'

const Header = ({title,backgroundImage}) => {
    const headerStyle = {
        width: '100%',
        height: '500px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div>
            <div style={headerStyle}></div>
            <div className="container">
                <div className="header-title">
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;