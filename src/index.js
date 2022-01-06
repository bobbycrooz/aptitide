import React from 'react';
import ReactDOM from 'react-dom';
import './asset/styles/index.scss';
import App from './app';
import { HashRouter as Router, Routes, Route } from "react-router-dom";


ReactDOM.render(
     <React.StrictMode>
          <Router>
               <Routes>
                    <Route path='/' element={<App/>} />
               </Routes>
          </Router>
     </React.StrictMode>,
     document.getElementById("root")
);
