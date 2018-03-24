import React, { Component } from 'react';
import {logoUrl,ListItems} from './const';
import {NavLink } from 'react-router-dom';

class Main extends React.Component{
    render() {
        return <header className="header">       
            <img className="logo" src={logoUrl}/>        
        <nav>
        <NavLink to="/" className="link" activeClassName="active">{ListItems.home}</NavLink>
        <NavLink to="/services" className="link" activeClassName="active">{ListItems.services}</NavLink>
        <NavLink to="/portfolio" className="link" activeClassName="active">{ListItems.portfolio}</NavLink>
        <NavLink to="/services" className="link" activeClassName="active">{ListItems.about}</NavLink>
        <NavLink to="/services" className="link" activeClassName="active">{ListItems.clients}</NavLink>
        <NavLink to="/services" className="link" activeClassName="active">{ListItems.price}</NavLink>
        <NavLink to="/services" className="link" activeClassName="active">{ListItems.contact}</NavLink>
     </nav>
        </header>;
      }
}

export default Main;