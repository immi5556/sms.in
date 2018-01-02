import React, { Component } from 'react';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import ClientSlide from './ClientsSlide/ClientsSlide';

import '../Bootstrap/css/bootstrap.css';
import '../Bootstrap/css/react-bootstrap-carousel.css';
import './ClientsC.css';

import clientLogo1 from '../../assets/clients-1.png';
import clientLogo2 from '../../assets/clients-2.png';
import clientSlideBg from '../../assets/clients-box.png';


class ClientsC extends Component {
    SliderArr = [
        {
            ImagUrl:clientLogo1,
        },
        {
            ImagUrl:clientLogo2,
        }
    ];
    
    render (){
    var leftStyle = {
        backgroundImage: 'url(' + clientSlideBg + ')',
        backgroundSize: 'cover',
        overflow: 'hidden',
        };
       let Slides= (
            this.SliderArr.map((Item,index) => {
                return <ClientSlide url={Item.ImagUrl} key={index}/>
            })
       )
        return(
            <div className={"clientsC clearfix"}>
                <div className="container">
                    <h2 className="heading-h2">Our Clients</h2>
                    <div className="slideshow" style={leftStyle}>
                    <React_Bootstrap_Carousel
                        animation={true}
                        slideshowSpeed={7000}
                        onSelect={this.onSelect}
                        ref={r=>this.slider=r}
                        className="carousel-fade"
                    >
                        {Slides}
                    </React_Bootstrap_Carousel>
                    </div>
                </div>
            </div>
        )
    }
}
export default ClientsC;