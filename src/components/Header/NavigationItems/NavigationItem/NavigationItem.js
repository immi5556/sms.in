import React, { Component } from 'react';
import './NavigationItem.css';


class NavigationItem extends Component {
    render(){
        return(
            <li className="navigationItem">
                {this.props.children}
            </li>
        )
    }
}

export default NavigationItem;