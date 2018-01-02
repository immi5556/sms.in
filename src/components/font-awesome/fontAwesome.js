import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import faStyles from './css/font-awesome.css';  

class fontawesome extends Component {
    render(){
        let fontName = ['fa',this.props.IconName];
        return(
            <FontAwesome className={fontName.join(' ')} name={this.props.IconName} size={this.props.IconSize} tag='i' style={this.props.fontSize}/>
        )
    }
}

export default fontawesome;