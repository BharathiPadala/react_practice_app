import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from '../components/main';
import FirstSection from '../components/firstsection';
import SecondSection from '../components/secondsection';
import css from '../css/style.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
  
const root = document.getElementById("root");

function Body() {
    return (
    <React.Fragment>
     <FirstSection/>
     <SecondSection/>
    </React.Fragment>
    )
}
ReactDOM.render(
    <BrowserRouter>
     <React.Fragment>
       <Main/>
       <Route path="/" component={Body} exact/>
       <Route path="/services" component={SecondSection}/>
     </React.Fragment>
    </BrowserRouter>,
    root
)