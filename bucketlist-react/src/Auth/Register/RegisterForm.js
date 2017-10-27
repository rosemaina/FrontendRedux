import React from 'react';
import { Button, Form, FormGroup, Col, FormControl, Checkbox, ControlLabel } from 'react-bootstrap';

/**
 * Expect a prop here.
 */
export const RegisterForm = ({email, password, confirm_password, onSubmit, onChange}) => {
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
    
        <FormGroup onChange={onChange} controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            {confirm_password}
          </Col>
          <Col sm={7}>
            <FormControl name="confirm_password" type="password" placeholder="Password" />
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