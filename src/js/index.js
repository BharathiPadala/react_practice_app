import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from '../components/main';
import FirstSection from '../components/firstsection';
import SecondSection from '../components/secondsection';
import css from '../css/style.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
  
const root = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
<React.Fragment>
    <Main/>
    <Route path="/home" component={FirstSection}/>
    <Route path="/services" component={FirstSection}/>
    <FirstSection/>
    <SecondSection/>
    </React.Fragment>
    </BrowserRouter>,
    root
)