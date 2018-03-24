import React, { Component } from 'react';
import {ArticleContent} from './const';

const imgUrl="src/images/Slider02.png";
class FirstSection extends React.Component{
    render() {
        return <section className="main-section">
        <div className="main">
            <div className="content">
              <h2>{ArticleContent.title}</h2>
              <span>{ArticleContent.subtitle}</span>
              <p>{ArticleContent.content}</p>
              <button className="downloadbtn" type="button">Download</button> 
            </div>
        </div>
        <div className="slider-image">
        <img className="logo" src={imgUrl}/>           
    </div> 
   </section>;
      }
}

export default FirstSection;