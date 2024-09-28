import React from 'react';
import useLocalStorage from "use-local-storage";
import styles from './ToggleTheme.modules.css'

const ToggleTheme = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }
    return (
        <div className='theme-toggle'>
                <i onClick={switchTheme} className='fas fa-toggle-on'></i>
        </div>
    );
};

export default ToggleTheme;
