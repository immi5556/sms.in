import React, { Component } from 'react';
import './NavigationItems.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import {Route,NavLink} from 'react-router-dom';
import Auxx from '../../../hoc/Auxx';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default class NavigationItems extends Component {
    constructor (props){
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }
  
    componentDidMount() {
  
      Events.scrollEvent.register('begin', function() {
        console.log("begin", arguments);
      });
  
      Events.scrollEvent.register('end', function() {
        console.log("end", arguments);
      });
  
    }
    scrollToTop() {
      scroll.scrollToTop();
    }
    scrollTo() {
      scroller.scrollTo('scroll-to-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      })
    }
    scrollToWithContainer() {
  
      let goToContainer = new Promise((resolve, reject) => {
  
        Events.scrollEvent.register('end', () => {
          resolve();
          Events.scrollEvent.remove('end');
        });
  
        scroller.scrollTo('scroll-container', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
  
      });
  
      goToContainer.then(() =>  
          scroller.scrollTo('scroll-container-second-element', {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart',
              containerId: 'scroll-container'
          }));
    }
    componentWillUnmount() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    }
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
                {navs}
            </ul>
        )
    }
}

