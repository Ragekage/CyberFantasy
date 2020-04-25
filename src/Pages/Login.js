import React, {Component} from 'react'
import {Card, Form, FormGroup, FormFeedback, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Input} from 'reactstrap';
import {LoginButton} from '../Utilities/AuthService'

import './Login.css'
class Login extends Component {

constructor(){
    super()
    this.state ={
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false,
            loginFail: false,
            errorMsg: ""
    }
}

handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, () => {this.validateField(name, value)})
}

validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
  
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null;
        console.log(emailValid)
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }
  
  validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? false : true);
 }

 loginFail = (response) =>{
  this.setState({loginFail: true, errorMsg: response})

  setTimeout(() => {
    this.setState({loginFail: false})
  }, 5000)
 }



    render(){
      var userData = {
              username: this.state.email,
              password: this.state.password
            }

            console.log(userData)
        return(
        <div className="LoginWindow">
        <Card>
            <CardBody>
                <CardTitle style={{color: "black"}}>Login</CardTitle>
                <Form>
                    <FormGroup>
                        <Input invalid={this.errorClass(this.state.formErrors.email)} valid={this.state.email.length === 0 ? false : !this.errorClass(this.state.formErrors.email)} onChange={e => this.handleUserInput(e)} type="email" name="email" id="Email" placeholder="Enter Email" ></Input>
                        <FormFeedback>Invalid Email</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Input invalid={this.errorClass(this.state.formErrors.password)}  valid={this.state.password.length === 0 ? false : !this.errorClass(this.state.formErrors.password)} onChange={e => this.handleUserInput(e)}  type="password" name="password" id="Password" placeholder="Enter Password"></Input>
                        <FormFeedback>invalid Password</FormFeedback>
                    </FormGroup>
                      {this.state.loginFail === true && (<div style={{color: "red"}}>{this.state.errorMsg}</div>)}
                </Form>
             <LoginButton isDisabled={!this.state.formValid} loginFail={this.loginFail} userData={userData}/>
            </CardBody>
        </Card>
        </div>
        )}
}

export default Login