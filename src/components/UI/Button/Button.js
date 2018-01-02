import React, { Component } from 'react';
import Auxx from '../../../hoc/Auxx';
import './Button.css';

class Button extends Component {
    render(){
        let classes = ['button',this.props.classE];
        return(
            <Auxx>
                <a href={this.props.link} className={classes.join(' ')}>{this.props.children}</a>
            </Auxx>
        )
    }
}

export default Button;