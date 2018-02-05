import React from 'react';
import Aux from '../../../hoc/Auxx';
import './Toolbar.css';
import Logo from '../../../assets/logo.png';
import DrawerToggle from '../../SideDrawer/DrawerToggle/DrawerToggle';


const toolbar = (props) => (
    <Aux>
        <header>
            <div className="container Toolbar">
                <div className="logo">
                    <a href='/'><img src={Logo} alt="Logo"/></a>
                </div>
                <DrawerToggle clicked={props.closed}/>
            </div>
        </header>
    </Aux>  
);

export default toolbar;