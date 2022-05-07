import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import './css/index.css';
import Home from "./screen/Home";
import Questions from './screen/Questions'
import {Route, Routes} from "react-router";
import Over from "./screen/Over";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/Questions" element={<Questions></Questions>}></Route>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/GameOver" element={<Over></Over>}></Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

