import React,{Component} from 'react';
import NavigationItems from '../Header/NavigationItems/NavigationItems';
import NavigationItem from '../Header/NavigationItems/NavigationItem/NavigationItem';
import {Route,NavLink} from 'react-router-dom';
import Auxx from '../../hoc/Auxx';

import './Footer.css';
import Logo from '../../assets/footerLogo.png';
import FontAwesome from '../font-awesome/fontAwesome';
import Subscribe from '../UI/Subscribe/Subscribe';


class Footer extends Component {
    menuobj = [
        {url:'/within30', name:'Within30'},
        {url:'/medgrotto',name:'Medgrotto'}
    ];
    render(){
        let sZ = {
            fontSize:'22px'
        }
        let navs = null;
        navs = (
            <Auxx>
                {this.menuobj.map((item,index) => {
                    return  <NavigationItem key={index} >
                                <NavLink to={item.url} exact>{item.name}</NavLink>
                            </NavigationItem>
                })}
            </Auxx>
        )
        return(
            <footer className="clearfix">
                <div className="container">
                    <div className="colLg3">
                        <div className="logo">
                            <img src={Logo} alt="Logo"/>
                        </div>
                        <p className="copyright">Copyright 2017.<br/> All Rights Reserved </p>
                        <ul className="socialMedia">
                            <li><a href="#"><FontAwesome IconName={'facebook-square'} fontSize={sZ}/></a></li>
                            <li><a href="#"><FontAwesome IconName={'twitter-square'} fontSize={sZ}/></a></li>
                            <li><a href="#"><FontAwesome IconName={'linkedin-square'} fontSize={sZ}/></a></li>
                            <li><a href="#"><FontAwesome IconName={'google-plus-official'} fontSize={sZ}/></a></li>
                            <li><a href="#"><FontAwesome IconName={'youtube-play'} fontSize={sZ}/></a></li>
                        </ul>
                    </div>
                    <div className="colLg3">
                        <h4>Menu</h4>
                        <div className="footerUl">
                            <NavigationItems/>
                        </div>
                    </div>
                    <div className="colLg3">
                        <h4>Quick Links</h4>
                        <div className="footerUl">
                            <ul>
                                {navs}
                            </ul>
                        </div>
                    </div>
                    <div className="colLg3">
                        <h4>Subscribe</h4>
                        <h5>Subscribe Us Now</h5>
                        <Subscribe/>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;