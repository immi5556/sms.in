import React, { Component } from 'react';
import InputElement from './InputElement/InputElement';
import TextAreaElement from './TextAreaElement/TextAreaElement';
import './ContactC.css';
import '../../App.css';
import Button from '../UI/Button/Button';
import FontAwesome from '../font-awesome/fontAwesome';

class ContactC extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          usermail: '',
          subject: '',
          comment:''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      handleChange(e) {
        e.target.classList.add('active');
        
        this.setState({
          [e.target.name]: e.target.value
        });
        
        this.showInputError(e.target.name);
      }
      
      handleSubmit(e) {    
        e.preventDefault();
        
        console.log('component state', JSON.stringify(this.state));
        
        if (!this.showFormErrors()) {
          console.log('form is invalid: do not submit');
        } else {
          console.log('form is valid: submit');
        }
      }
      
      showFormErrors() {
        const inputs = document.querySelectorAll('.inputE');
        let isFormValid = true;
        
        inputs.forEach(input => {
          input.classList.add('active');
          
          const isInputValid = this.showInputError(input.name);
          
          if (!isInputValid) {
            isFormValid = false;
          }
        });
        
        return isFormValid;
      }
      
      showInputError(refName) {
        if(refName==''){
          return null
        }
        const validity = this.refs[refName].validity;
        // const label = document.getElementById(`${refName}Label`).textContent;
        const label = refName;
        const error = document.getElementById(`${refName}Error`);
        const issubject = refName.indexOf('subject') !== -1;
        const isUsername = refName.indexOf('username') !== -1;
        const isComment = refName.indexOf('comment') !== -1;

        if (!validity.valid) {
          if (validity.valueMissing) {
            error.textContent = `${label} is a required field`; 
          } else if (validity.typeMismatch) {
            error.textContent = `${label} should be a valid email address`; 
          }else if (isUsername && validity.patternMismatch) {
              error.textContent = `${label} should be longer than 4 chars`; 
          } else if (issubject && validity.patternMismatch) {
            error.textContent = `${label} should be longer than 4 chars`; 
          }else if (isComment && validity.patternMismatch) {
            error.textContent = `${label} should be longer than 4 chars`; 
          }
          return false;
        }
        
        error.textContent = '';
        return true;
      }
    render(){
        let heightE = {
            height:'200px'
        }
        let sZ = {
            fontSize:'17px'
        }
        return(
            <div className={'contactC clearfix'} name="contactC">
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
                                <input className="form-control inputE"
                                type="text"
                                name="username"
                                ref="username"
                                value={ this.state.username } 
                                onChange={ this.handleChange }
                                placeholder="Name"
                                pattern=".{5,}"
                                required />
                                <div className="error" id="usernameError" />
                            </div>
                            <div className="colLg4">
                                <input className="form-control inputE"
                                type="email" 
                                name="usermail"
                                ref="usermail"
                                value={ this.state.usermail } 
                                onChange={ this.handleChange }
                                placeholder="Email address"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                                required />
                                <div className="error" id="usermailError" />
                            </div>
                            <div className="colLg4">
                                <input className="form-control inputE"
                                type="text" 
                                name="subject"
                                ref="subject"
                                value={ this.state.subject } 
                                onChange={ this.handleChange }
                                placeholder="Subject"
                                pattern=".{5,}"
                                required />
                                <div className="error" id="subjectError" />
                            </div>
                        </div>
                        <div className="rowF">
                            <div className={"colLg12 mTmd"}>
                                <textarea className="form-control textAreaElement inputE"
                                style={heightE}
                                name="comment"
                                ref="comment"
                                value={ this.state.comment } 
                                onChange={ this.handleChange }
                                required >Type your message here...</textarea>
                                <div className="error" id="commentError" />
                            </div>
                        </div>
                        <div className={"rowF btnCover"}>
                            <button className="button primary"
            onClick={ this.handleSubmit }>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactC;