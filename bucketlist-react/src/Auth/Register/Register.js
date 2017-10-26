import React, { Component } from 'react';
import {RegisterForm} from './RegisterForm';
// import { Redirect } from 'react-router-dom';

/**
 * Make register a container component meaning call it RegisterContainer
 * Any expected Prop in the registerForm is going to be defined where Registerform is called.
 */
export class RegisterContainer extends Component{
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
      <RegisterForm/>
      );
    }
}


