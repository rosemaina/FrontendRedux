import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

export class NavigationContainer extends Component {
    render(){
        return(
            <div>
                <Button type="submit" bsStyle="primary">
                    Sign in
                </Button>
                <Button type="submit" bsStyle="primary">
                    Login
                </Button>
            </div>
        )
    }
}