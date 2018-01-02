import React from'react';
import './SideDrawer.css';
import NavigationItems from '../Header/NavigationItems/NavigationItems';
import Aux from '../../hoc/Auxx';
import Backdrop from '../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = ["sideDrawer","close"];
    if(props.open){
        attachedClasses = ["sideDrawer","open"];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <div><span onClick={props.closed} className='menu-close'>X</span></div>
                    <div className='nav-menu'>
                        <NavigationItems clicked={props.closed}/>
                    </div>
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer;