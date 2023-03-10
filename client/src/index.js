import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import AdminPage from './components/adminPage/AdminPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route exact path='/' element={ <App /> }  />
            <Route exact path='/admin' element={ <AdminPage /> }  />
        </Routes>
    </Router>
);
