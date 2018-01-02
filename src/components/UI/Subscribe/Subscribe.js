import React, { Component } from 'react';
import FontAwesome from '../../font-awesome/fontAwesome';

class Subscribe extends Component{
    render(){
        let sZ = {
            fontSize:'16px'
        }
        return(
            <div className="subscribe">
                <input type="text" className="inputElement"/>
                <button><FontAwesome IconName={'paper-plane'} fontSize={sZ}/></button>
            </div>
        )
    }
}
export default Subscribe;