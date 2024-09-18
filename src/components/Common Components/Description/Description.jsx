import React from 'react';
import styles from './Description.modules.css'

const Description = ({title,subtitle,info}) => {
    return (
        <div className='description'>
            <div className="container">
                <div className="description-wrapper">
                    <div className="description-wrapper__block">
                        <div className="description-wrapper__block__title">
                            {title}
                        </div>
                    </div>
                    <div className="description-wrapper__block__info">
                        <span>{subtitle}</span>
                        <p>{info}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;