import React from 'react';
import styles from './Undefined.modules.css'

const Undefined = () => {
    return (
        <div className='undefined-page'>
            <div className="undefined-page__img">
                <img src="https://www.svgrepo.com/show/379925/alert-error.svg" alt="icon"/>
            </div>
            <div className="undefined-page__descr">
                <span>Recipe is not found</span>
            </div>
        </div>
    );
};

export default Undefined;