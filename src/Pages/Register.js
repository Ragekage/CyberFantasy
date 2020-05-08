import React, {Component} from 'react';
import {Card, Form, FormGroup, FormFeedback, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import './Login.css';
import {emailUserCheck, createUser} from '../Utilities/ServerEndpoints';
class Register extends Component {

constructor(props){
    super(props)
   
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
            validData: false,
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
  var userData = {
    username: this.state.username,
    email: this.state.email,
    password: this.state.password
  }

  emailUserCheck(userData).then(response => {
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
        this.setState({validData: true}, this.sendUserToWelcome())
      })
    }
  })
 }

 sendUserToWelcome = () => {
   setTimeout(() => {
     this.props.route.history.push('/welcome')
   },3000)
 }


    render(){
      if(this.props.FullMediaQuery.isTabletOrMobileDevice === false)
      {
        return(
        <div className="LoginWindow">
        <Card style={{backgroundColor: "rgba(111, 111, 111, 0)", border: "0px"}}>
            <CardBody>
            <div className="RegisterBody">
                <CardTitle style={{color: "white"}}>Register</CardTitle>
                <Form>
                    <FormGroup >
                        <Input invalid={this.errorClass(this.state.formErrors.username)}  valid={this.state.username.length === 0 ? false : !this.errorClass(this.state.formErrors.username)} onChange={e => this.handleUserInput(e)}  type="username" name="username" id="username" placeholder="Enter Username"></Input>
                        <FormFeedback style={{position: "fixed"}}>invalid Username</FormFeedback>
                    </FormGroup>
                    <FormGroup style={{transform: "translate(0px, 30px)"}}>
                        <Input invalid={this.errorClass(this.state.formErrors.email)} valid={this.state.email.length === 0 ? false : !this.errorClass(this.state.formErrors.email)} onChange={e => this.handleUserInput(e)} type="email" name="email" id="Email" placeholder="Enter Email" ></Input>
                        <FormFeedback style={{position: "fixed"}}>Invalid Email</FormFeedback>
                    </FormGroup>
                    <FormGroup style={{transform: "translate(0px, 60px)"}}>
                        <Input invalid={this.errorClass(this.state.formErrors.password)}  valid={this.state.password.length === 0 ? false : !this.errorClass(this.state.formErrors.password)} onChange={e => this.handleUserInput(e)}  type="password" name="password" id="Password" placeholder="Enter Password"></Input>
                        <FormFeedback style={{position: "fixed"}}>invalid Password</FormFeedback>
                    </FormGroup>
                </Form>
                {this.state.invalidData === true && (<div className="errorMsg" style={{color: "red", position: "fixed"}}>Username, Email already Exists</div>)}
                {this.state.validData === true && (<div className="errorMsg" style={{color: "red", position: "fixed"}}>Check Your Email to Confirm</div>)}

             <div className="RegisterBtn"><button className="btn btn-primary" onClick={this.register}>Register</button></div>
             <div className="RegisterCancelBtn"><Link style={{fontSize: 30}} to="/welcome" className="btn btn-primary">Cancel</Link></div>
            </div>
            </CardBody>
        </Card>
        </div>
        )}
        else
        {
          return(
            <div className="LoginMainM">
                <div className="LoginFormM">
                    <Form>
                        <FormGroup >
                            <Input invalid={this.errorClass(this.state.formErrors.username)}  valid={this.state.username.length === 0 ? false : !this.errorClass(this.state.formErrors.username)} onChange={e => this.handleUserInput(e)}  type="username" name="username" id="username" placeholder="Enter Username"></Input>
                            <FormFeedback style={{position: "fixed"}}>invalid Username</FormFeedback>
                        </FormGroup>
                        <FormGroup style={{paddingTop: 15}}>
                            <Input invalid={this.errorClass(this.state.formErrors.email)} valid={this.state.email.length === 0 ? false : !this.errorClass(this.state.formErrors.email)} onChange={e => this.handleUserInput(e)} type="email" name="email" id="Email" placeholder="Enter Email" ></Input>
                            <FormFeedback style={{position: "fixed"}}>Invalid Email</FormFeedback>
                        </FormGroup>
                        <FormGroup style={{paddingTop: 15}}>
                            <Input invalid={this.errorClass(this.state.formErrors.password)}  valid={this.state.password.length === 0 ? false : !this.errorClass(this.state.formErrors.password)} onChange={e => this.handleUserInput(e)}  type="password" name="password" id="Password" placeholder="Enter Password"></Input>
                            <FormFeedback style={{position: "fixed"}}>invalid Password</FormFeedback>
                        </FormGroup>
                    </Form>
                    {this.state.invalidData === true && (<div style={{color: "red", position: "fixed"}}>Username, Email already Exists</div>)}
                    {this.state.validData === true && (<div  style={{color: "red", position: "fixed"}}>Check Your Email to Confirm</div>)}
                 <div className="LoginButtonsM">   
                 <div className="OkBtnM" ><button style={{fontSize: 30}} className="btn btn-primary" onClick={this.register}>Register</button></div>
                 <div className="CancelBtnM"><Link style={{fontSize: 30}} to="/welcome" className="btn btn-primary">Cancel</Link></div>
                 </div>
                </div>
            </div>
          )
        }}
}

export default Register