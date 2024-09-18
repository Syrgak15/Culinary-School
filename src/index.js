import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
import {CssBaseline} from '@mui/material'
import './i18next'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
        <CssBaseline/>
        <App/>
        </Suspense>
    </Provider>

);



