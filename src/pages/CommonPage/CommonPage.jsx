import React from 'react';
import styles from './CommonPage.modules.css'
import useLocalStorage from "use-local-storage";

const CommonPage = ({children}) => {
    return (
        <div className='common-page'>
            {children}
        </div>

    );
};

export default CommonPage;