import React, {Component} from 'react'
import {Card, Form, FormGroup, FormFeedback, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Input} from 'reactstrap';
import './Login.css'
import {emailUserCheck, createUser} from '../Utilities/ServerEndpoints'
class Register extends Component {

constructor(){
    super()
    this.state ={
            email: '',
            password: '',
            username: '',
            formErrors: {email: '', password: '', username: ''},
            emailValid: false,
            passwordValid: false,
            usernameValid: false,
            formValid: false,
            invalidData: false,
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
    let usernameValid = this.state.usernameValid
  
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
      case 'username':
        usernameValid = value.length >= 6;
        fieldValidationErrors.username = usernameValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    usernameValid: usernameValid
                  }, this.validateForm);
  }
  
  validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.usernameValid});
  }

  errorClass(error) {
    return(error.length === 0 ? false : true);
 }


 register = () =>{
   console.log(this.state.username)
  var userData = {
    username: this.state.username,
    email: this.state.email,
    password: this.state.password
  }

  emailUserCheck(userData).then(response => {
    console.log(response)
    if(response.data === "exists")
    {
      this.setState({invalidData: true})
      setTimeout(() => {
      this.setState({invalidData: false})
      }, 4000)
    }
    else
    {
      createUser(userData).then(response => {
        console.log("User created")
      })
    }
  })
 }


    render(){
      console.log(this.state.username)
        return(
        <div className="LoginWindow">
        <Card>
            <CardBody>
                <CardTitle style={{color: "black"}}>Register</CardTitle>
                <Form>
                    <FormGroup>
                        <Input invalid={this.errorClass(this.state.formErrors.username)}  valid={this.state.username.length === 0 ? false : !this.errorClass(this.state.formErrors.username)} onChange={e => this.handleUserInput(e)}  type="username" name="username" id="username" placeholder="Enter Username"></Input>
                        <FormFeedback>invalid Username</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Input invalid={this.errorClass(this.state.formErrors.email)} valid={this.state.email.length === 0 ? false : !this.errorClass(this.state.formErrors.email)} onChange={e => this.handleUserInput(e)} type="email" name="email" id="Email" placeholder="Enter Email" ></Input>
                        <FormFeedback>Invalid Email</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Input invalid={this.errorClass(this.state.formErrors.password)}  valid={this.state.password.length === 0 ? false : !this.errorClass(this.state.formErrors.password)} onChange={e => this.handleUserInput(e)}  type="password" name="password" id="Password" placeholder="Enter Password"></Input>
                        <FormFeedback>invalid Password</FormFeedback>
                    </FormGroup>
                </Form>
                {this.state.invalidData === true && (<div style={{color: "red"}}>Username, Email already Exists</div>)}
             <Button onClick={this.register}>Register</Button>
            </CardBody>
        </Card>
        </div>
        )}
}

export default Register