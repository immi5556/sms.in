import React from 'react';
import '../../Header/Toolbar/Toolbar.css';

const drawerToggle = (props) => (
    <div className="menu" onClick={props.clicked}>
        Menu
        <span></span>
    </div>
)

export default drawerToggle;