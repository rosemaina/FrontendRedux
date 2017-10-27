import React, { Component } from 'react';
import {RegisterForm} from './RegisterForm';
// import { Redirect } from 'react-router-dom';
import axios from 'axios';

/**
 * Make register a container component meaning call it RegisterContainer
 * Any expected Prop in the registerForm is going to be defined where Registerform is called.
 */
// const axios = require ('axios')


export class RegisterContainer extends Component{
  constructor(props){
    super(props);

    this.state={
      email: '',
      password: '',
      confirm_password: '',
      registration_success: false
    }}

    handleChange = (event) => {
      const name = event.target.name
      this.setState({[name]: event.target.value})
  }

  register = (event) => {
      event.preventDefault()
      console.log('#####', this.state.email, this.state.password, this.state.confirm_password)
      if (this.state.password === this.state.confirm_password){
        axios.post('https://bucketlist-api1.herokuapp.com/auth/register/', {
          email: this.state.email,
          password: this.state.password
        })
        .then(() => this.setState({registration_success: true }))
        .catch((error) => {console.log(error)})
      }
      else{
        console.log("Passwords do not match")
      }
  }

    render(){
      return(
      <RegisterForm
      onSubmit={this.register}
      onChange={this.handleChange}
      email="Email"
      password="Password"
      confirm_password="confirm_password"
      />
      );
    }
}


