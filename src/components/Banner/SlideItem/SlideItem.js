import React, { Component } from'react';
import Aux from '../../../hoc/Auxx';

class Slide extends Component {
    render(){
        console.log(this.props.cont)
        return(
            <Aux>
                <div className="slide">
                    <div className="sliderImg">
                        <img src={this.props.url} alt="slide img"/>
                    </div>
                    <div className="slideContent">
                    {this.props.cont} 
                        <div className="appButtons">
                            <a href="/">
                                <img src={this.props.aIcon} alt="appStore"/>
                            </a>
                            <a href="/">
                                <img src={this.props.pIcon} alt="playStore"/>
                            </a>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default Slide;