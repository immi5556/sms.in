import React, { Component } from 'react';
import './NavigationItems.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import {Route,NavLink} from 'react-router-dom';
import Auxx from '../../../hoc/Auxx';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default class NavigationItems extends Component {

    menuobj = [
        {url:'/', name:'Home',scroll:false},
        {url:'/about',name:'About Us',scroll:true},
        {url:'products',name:'Our Products',scroll:true},
        {url:'/clients',name:'clients',scroll:false},
        {url:'/contact',name:'Contact Us',scroll:false}
    ];
    render(){
        let navs = null;
        navs = (
            <Auxx>
                {this.menuobj.map((item,index) => {
                    return  <NavigationItem key={index} >
                                <NavLink onClick={this.props.clicked} to={item.url} exact>{item.name}</NavLink>
                            </NavigationItem>
                })}
            </Auxx>
        )
        return(
            <ul className="navigationItems">
                {/* {navs} */}
                <li><NavLink to={'/'} exact onClick={this.props.clicked} activeClassName="custom-active-classname">Home</NavLink></li>
                <li><Link to="aboutC" spy={true} smooth={true} duration={500} onClick={this.props.clicked}>About Us</Link></li>
                <li><Link to="productsC" spy={true} smooth={true} duration={500} onClick={this.props.clicked}>Our Products</Link></li>
                <li><Link to="clientsC" spy={true} smooth={true} duration={500} onClick={this.props.clicked}>Clients</Link></li>
                <li><Link to="contactC" spy={true} smooth={true} duration={500} onClick={this.props.clicked}>Contact Us</Link></li>
            </ul>
        )
    }
}

