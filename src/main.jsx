import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import process from 'node:process';
import Router from '~/routes/router.jsx';
import { makeServer } from './server';
// Sets the environment to development so as to produce accurate latency in mirage
if (process.env.NODE_ENV === 'development') {
    makeServer({ environment: 'development' });
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router></Router>
    </React.StrictMode>
);
