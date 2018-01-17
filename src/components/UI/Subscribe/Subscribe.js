import React, { Component } from 'react';
import FontAwesome from '../../font-awesome/fontAwesome';
import './subscribe.css';

class Subscribe extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
          subscribe: ''
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
        const inputs = document.querySelectorAll('.inputsubscribe');
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
        const label = refName;
        const error = document.getElementById(`${refName}Error`);
        const issubject = refName.indexOf('subscribe') !== -1;

        if (!validity.valid) {
          if (validity.valueMissing) {
            error.textContent = `${label} is a required field`; 
          } else if (validity.typeMismatch) {
            error.textContent = `${label} should be a valid email address`; 
          }
          return false;
        }
        
        error.textContent = '';
        return true;
      }
    render(){
        let sZ = {
            fontSize:'16px'
        }
        return(
            <div className="subscribe">
                <input className="form-control inputElement inputsubscribe"
                type="email" 
                name="subscribe"
                ref="subscribe"
                value={ this.state.subscribe } 
                onChange={ this.handleChange }
                placeholder="subscribe"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                required />
                <div className="error" id="subscribeError" />
                <button type="submit" onClick={ this.handleSubmit }><FontAwesome IconName={'paper-plane'} fontSize={sZ}/></button>
            </div>
        )
    }
}
export default Subscribe;