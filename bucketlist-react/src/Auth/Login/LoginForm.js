import React from 'react';
import { Button, Form, FormGroup, Col, FormControl, Checkbox, ControlLabel } from 'react-bootstrap';


export const LoginForm = ({email, password, onSubmit, onChange}) => {
    return(
        <Form horizontal onSubmit={onSubmit}>
        <FormGroup onChange={onChange} controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            {email}
          </Col>
          <Col sm={7}>
            <FormControl name="email" type="email" placeholder="example@email.com" />
          </Col>
        </FormGroup>
    
        <FormGroup onChange={onChange} controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            {password}
          </Col>
          <Col sm={7}>
            <FormControl name="password" type="password" placeholder="Password" />
          </Col>
        </FormGroup>
    
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>
        <Button bsStyle="link">Don't have an account already?Sign Up here</Button><br/>
        <Button bsStyle="link">Forgot password?</Button>
    
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Login
            </Button>
          </Col>
        </FormGroup>
      </Form>
    
      );
}