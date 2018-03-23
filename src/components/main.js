import React, { Component } from 'react';

class Main extends React.Component{
    render() {
        return <header class="header">
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
    </header>;
      }
}

export default Main;