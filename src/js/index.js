import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from '../components/main';
import FirstSection from '../components/firstsection';
import SecondSection from '../components/secondsection';
import css from '../css/style.css';
  
const root = document.getElementById("root");
ReactDOM.render(
<React.Fragment>
    <Main/>
    <FirstSection/>
    <SecondSection/>
    </React.Fragment>,
    root
)