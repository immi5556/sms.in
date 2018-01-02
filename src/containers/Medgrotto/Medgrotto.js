import React,{Component} from 'react';
import Button from '../../components/UI/Button/Button';

import Medlogo from '../../assets/medgrottoLogo.png';
import MedAppScreens from '../../assets/medgrotto-app.jpg';
import appStore from '../../assets/appStore.svg';
import playStore from '../../assets/playStore.svg';
import MedgrottoWebView from '../../assets/medgrotto-web-app.png';

import './Medgrotto.css';


export default class Medgrotto extends Component {
    render(){
        return(
            <div className="medgrottoSection">
                <div className="container">
                    <div className="med-content-section">
                        <div className="col-lg-10 col-lg-offset-1">
                        <h3>Take Control of Your Health Info</h3>
                        <p>Access your health data wherever it is stored.<br/> Share via MedGrotto with whomever you choose.</p>
                        </div>
                    </div>
                    <div className="med-app-section clearfix">
                        <div className="med-logo">
                            <a href="#">
                                <img src={Medlogo} alt="Medgrotto Logo"/>
                            </a>
                        </div>
                        <div className="app-screen-view">
                            <img src={MedAppScreens} alt="app screens"/>
                        </div>
                        <div className='row app-section-icons'>
                            <a href='#'><img src={appStore} alt="app store"/></a>
                            <a href='#'><img src={playStore} alt="play store"/></a>
                        </div>
                    </div>
                    <div className="hospital-records clearfix">
                        <h4 className="text-center">Your Hospital Records</h4>
                        <p>Your health is handled by different healthcare entities during your lifetime. 
                            Each time you get treated by a Provider or get admitted to a healthcare facility, 
                            the diagnoses and clinical interactions are documented and stored. 
                            These records can be invaluable in positively affecting healthcare outcomes.</p>
                        <p>For example, your medical history could be a critical factor when you are being treated in an emergent situation.
                             By making your lab records available, hundreds of dollars can be saved in redundant testing. 
                            MedGrotto gives you the ability to choose when and with whom you choose to share your health related information.</p>
                        <div className="website-view-section text-right">
                            <Button classE="primary" link={'/'}>Visit Website Now</Button>
                            <img src={MedgrottoWebView} alt="MedgrottoWebView"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}