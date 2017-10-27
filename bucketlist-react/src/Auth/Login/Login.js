import React, { Component } from 'react';
import {LoginForm} from './LoginForm';
import axios from 'axios';


export class LoginContainer extends Component{
  constructor(props){
    super(props);

    this.state={
      email: '',
      password: '',
      login_success: false
    }}

    handleChange = (event) => {
      const name = event.target.name
      this.setState({[name]: event.target.value})
  }

  login = (event) => {
      event.preventDefault()
        axios.post('https://bucketlist-api1.herokuapp.com/auth/login/', {
          email: this.state.email,
          password: this.state.password
        })
        .then(resp => {
          localStorage.setItem('token', resp.data['token'])
        })
        .then(() => {
          this.setState({login_success: true })
        })
        .catch((error) => {
          console.log(error)
        })
      }

    render(){
      return(
      <LoginForm
      onSubmit={this.login}
      onChange={this.handleChange}
      email="Email"
      password="Password"
      />
      );
    }
}


