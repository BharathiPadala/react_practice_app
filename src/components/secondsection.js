import React, { Component } from 'react';
import Main from './main';
import {ServiceContent,ServicesSections} from './const';

class SecondSection extends React.Component{
    render() {
        return <section className="sub-section">
        <Main/>
         <div className="title">
             <h1>{ServiceContent.title}</h1>
             <span>{ServiceContent.content}</span>
             <hr/>
         </div>
         <div className="services">
             <div className="ser-section">
                 <div className="circle-image">
                     <img src={ServicesSections.FirstService.imageUrl}/>
                 </div>
                 <h3>{ServicesSections.FirstService.title}</h3>
                 <span>{ServicesSections.FirstService.content}</span>
             </div>
             <div className="ser-section">
                 <div className="circle-image">
                    <img src={ServicesSections.SecondService.imageUrl}/>
                 </div>
                 <h3>{ServicesSections.SecondService.title}</h3>
                 <span>{ServicesSections.SecondService.content}</span>
             </div>
             <div className="ser-section">
                 <div className="circle-image">
                    <img src={ServicesSections.ThirdService.imageUrl}/>
                 </div>
                 <h3>{ServicesSections.ThirdService.title}</h3>
                 <span>{ServicesSections.ThirdService.content}</span>
             </div>
         </div>
    </section>;
      }
}

export default SecondSection;