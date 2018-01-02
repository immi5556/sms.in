import React,{Component} from 'react';
import Button from '../../components/UI/Button/Button';
import './within30.css';
import logo from '../../assets/w30Logo.png';
import w30Services from '../../assets/services-view.png';
import appStore from '../../assets/appStore.svg';
import playStore from '../../assets/playStore.svg';
import within30WebView from '../../assets/within30-web-app.png';

export default class Within30App extends Component {
    render(){
        return(
            <div className="w30-section">
                <div className="container">
                    <div className="w-content-section clearfix text-center">
                        <h3>Making multiple calls to book one appointment is now history! 
                            <span className="d-block">A few clicks on Within30, and you’re all set.</span></h3>
                        <p>Within30 makes it easy to navigate through such every day problems by connecting you 
                            with businesses within 30 miles that have available slots within 30 minutes or at a later date/time.</p>
                        <p>You can find a wide range of services – from Physicians to Attorneys – all on the same app!</p>
                    </div>
                    <div className="service-view-section clearfix text-center">
                        <div className="app-logo">
                            <a href="#">
                                <img src={logo} alt="Within30 Logo"/>
                            </a>
                        </div>
                        <div className="services-view-screen">
                            <img src={w30Services} alt="services-view-screen"/>
                        </div>
                        <div className='row app-section-icons'>
                            <a href='#'><img src={appStore} alt="app store"/></a>
                            <a href='#'><img src={playStore} alt="play store"/></a>
                        </div>
                    </div>
                    <div className="w-content-section clearfix text-center">
                        <h3 className="no-bold">The Within30  can be accessed <span className="d-inline-block"> from your desktop computer as well</span> as your smartphone</h3>
                        <p>Within30 makes it easy to navigate through such every day problems by connecting you 
                            with businesses within 30 miles that have available slots within 30 minutes or at a later date/time.</p>
                        <p>You can find a wide range of services – from Physicians to Attorneys – all on the same app!</p>
                    </div>
                    <div className="website-view-section text-right">
                        <Button classE="primary" link={'https://www.within30.com/'}>Visit Website Now</Button>
                        <img src={within30WebView} alt="within30WebView"/>
                    </div>
                </div>
            </div>
        )
    }
}