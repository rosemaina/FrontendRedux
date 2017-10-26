import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Col, FormControl, Checkbox, ControlLabel } from 'react-bootstrap';


export class RegisterForm extends Component{
  constructor(props){
    super(props);

    this.state={
      email: '',
      password: '',
      confirm_password: '',
      registration_success: false
    }}

    render(){
      return(
        <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="example@email.com" />
          </Col>
        </FormGroup>
    
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>
    
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Confirm password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>
    
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>
    
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>
    
      );
    }
}


