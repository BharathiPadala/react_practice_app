import React from 'react';

class SecondSection extends React.Component{
    render() {
        return <section class="sub-section">
        <div class="header">
         <figure>
                 <img class="logo" src="src/images/logo.png"/>
         </figure>
         <nav>
                 <a href="">HOME</a>
                 <a href="">SERVICES</a>
                 <a href="">PORTFOLIO</a>
                 <a href="">ABOUT</a>
                 <a href="">CLIENTS</a>
                 <a href="">PRICE</a>
                 <a href="">CONTACT</a>
            </nav>
         </div>
         <div class="title">
             <h1>What We Do?</h1>
             <span>Duis mollis placerat qam,eget laoreet tellus tempor eu.Quisque dapibus in purus in dignissim.</span>
             <hr/>
         </div>
         <div class="services">
             <div class="ser-section">
                 <div class="circle-image">
                     <img src="src/images/Service1.png"/>
                 </div>
                 <h3>Modern Design</h3>
                 <span>We create Modern And Clean Theme For Your Business Company.</span>
             </div>
             <div class="ser-section">
                 <div class="circle-image">
                     <img src="src/images/Service2.png"/>
                 </div>
                 <h3>Modern Design</h3>
                     <span>We create Modern And Powerful Theme With Lots Animation And Features.</span>
                 </div>
             <div class="ser-section">
                 <div class="circle-image">
                     <img src="src/images/Service3.png"/>
                 </div>
                 <h3>Modern Design</h3>
                             <span>We create Modern And Powerful Html5 And CSS3 Codde Easy For Read And Customize.</span>
                         </div>
         </div>
    </section>;
      }
}

export default SecondSection;