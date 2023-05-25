import React from 'react';
import ReactDOM from 'react-dom/client';
import {Greets} from './Greets';
import {FirstApp} from './Views/FirstApp';
import './Styles/main.css';
import { CounterApp } from './Views/CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <Greets/> */}
        {/*<FirstApp title='ELTITULO'/>*/}
        <CounterApp value={0}/>
    </React.StrictMode>
);