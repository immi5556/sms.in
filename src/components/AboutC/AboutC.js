import React,{Component} from 'react';
import Auxx from '../../hoc/Auxx';
import Button from '../UI/Button/Button';
import '../../App.css';

export class AboutC extends Component {
    render(){
        return(
            <Auxx>
                <div className={"aboutC clearfix"}>
                    <div className="container">
                        <h2 className="heading-h2">About Us</h2>
                        <p>Streamlined Medical Solutions (SMS) is a leading healthcare technology 
                            solution provider with an aim to enhance communication and automate coordination in the industry. The range of solutions by SMS uses the latest technology to streamline 
                            communication efforts between all healthcare stakeholders and ultimately improve the welfare of the patients. </p>
                        <p>Optimus Stream with its suite of applications including, Direct Admit System for Hospitals (DASH), Consult &amp; Referral Management App (CARMA) and Secure Messaging and Alert Response Technology (SMART), 
                            SMS brings forth a hassle-free process of improving patient satisfaction and hospital/clinic throughput.</p>
                            <div className="btnSec">
                                <Button link={'javascript:void(0)'} classE={"primary"}>Read More</Button>
                            </div>
                    </div>
                </div>
                {/* <Button link={'javascript:void(0)'} classE={'primary'}>Read More</Button> */}
            </Auxx>
        )
    }
}