import React, { Component } from 'react';
import InputElement from './InputElement/InputElement';
import TextAreaElement from './TextAreaElement/TextAreaElement';
import './ContactC.css';
import '../../App.css';
import Button from '../UI/Button/Button';
import FontAwesome from '../font-awesome/fontAwesome';

class ContactC extends Component {
    
    render(){
        let heightE = {
            height:'200px'
        }
        let sZ = {
            fontSize:'17px'
        }
        return(
            <div className={'contactC,clearfix'}>
                <div className="container">
                    <h2 className="heading-h2">Contact Us</h2>
                    <div className="contactAddress">
                        <h3>INDIA</h3>
                        <ul>
                            <li><FontAwesome IconName={'map-marker'} fontSize={sZ}/> Plot #8-1-305/306, IV Floor, Above Passport Seva Kendra, Anand Silicon Chip, Aziz Bagh Colony, 
                                Shaikpet, Hyderabad, Telangana 500008 </li>
                            <li><FontAwesome IconName={'phone'} fontSize={sZ}/>+91-40-23550771 | +91-40-64522055</li>
                            <li><FontAwesome IconName={'envelope'} fontSize={sZ}/>INFO@STREAMLINEDMEDICAL.COM</li>
                        </ul>
                        <h3>USA</h3>
                        <ul>
                            <li><FontAwesome IconName={'map-marker'} fontSize={sZ}/> 2222 W Spring Creek Parkway, # 104 Plano, TX 75023</li>
                            <li><FontAwesome IconName={'phone'} fontSize={sZ}/> 1-855-8-STREAM</li>
                        </ul>
                    </div>
                    <div className="contactForm">
                        <div className="rowF">
                            <div className="colLg4">
                                <InputElement type={'text'} placeholderE={'Name'}/>
                            </div>
                            <div className="colLg4">
                                <InputElement type={'text'} placeholderE={'Email address'}/>
                            </div>
                            <div className="colLg4">
                                <InputElement type={'text'} placeholderE={'Subject'}/>
                            </div>
                        </div>
                        <div className="rowF">
                            <div className={"colLg12 mTmd"}>
                                <TextAreaElement Theight={heightE} placeholderE={'Type your message here...'}/>
                            </div>
                        </div>
                        <div className={"rowF btnCover"}>
                            <Button classE="primary">Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactC;