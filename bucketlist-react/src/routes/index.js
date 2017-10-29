import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import * as Auth from '../Auth';
import {App} from '../application';
import {isAuthenticated} from '../utils';


export const makeMainRoutes = () => {
    return(
        <Switch>
            <Route exact path='/'
                render={()=>(isAuthenticated() 
                    ? 
                    (<App/>) 
                    :  
                    <Redirect
                        to={{
                            pathname : '/login'
                        }}
                    
                    />)}
            
            />
            <Route path='/login' component={Auth.components.LoginContainer}/>
            <Route path='/register' component={Auth.components.RegisterContainer}/>
        </Switch>
    )
}