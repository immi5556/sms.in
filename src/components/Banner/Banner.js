import React,{Component} from 'react';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import Slide1Content from './Slide1Content';
import Slide2Content from './Slide2Content';
import Slide from './SlideItem/SlideItem';

import '../Bootstrap/css/bootstrap.css';
import '../Bootstrap/css/react-bootstrap-carousel.css';
import './Banner.css';

import slideImg1 from '../../assets/slide1.png';
import slideImg2 from '../../assets/slide2.png';
import appStore from '../../assets/appStore.svg';
import playStore from '../../assets/playStore.svg';

class Banner extends Component {
    SliderArr = [
        {
            ImagUrl:slideImg1,
            content:<Slide1Content/>,
            playStoreIcon:playStore,
            appStoreIcon:appStore
        },
        {
            ImagUrl:slideImg2,
            content:<Slide2Content/>,
            playStoreIcon:playStore,
            appStoreIcon:appStore
        }
    ];
    
    render (){
       let Slides= (
            this.SliderArr.map((Item,index) => {
                return <Slide url={Item.ImagUrl} cont={Item.content} pIcon={Item.playStoreIcon} aIcon={Item.appStoreIcon} key={index}/>
            })
       )

        return(
        <div className="container">
          <div className="row">
            <div className="col-md-12 banner">
              <React_Bootstrap_Carousel
                animation={true}
                slideshowSpeed={7000}
                onSelect={this.onSelect}
                ref={r=>this.slider=r}
                className="carousel-fade"
                indicators={false}
              >
              {Slides}
              </React_Bootstrap_Carousel>
            </div>
          </div>
        </div>
        )

    }
    
}

export default Banner;