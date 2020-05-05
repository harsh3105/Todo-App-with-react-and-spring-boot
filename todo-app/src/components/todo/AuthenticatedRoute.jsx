import React, {Component} from 'react';
import AuthenticatedService from './AuthenticationService';
import { Redirect } from 'react-router-dom';
import {Route} from 'react-router-dom';

class AuthenticatedRoute extends Component{
    render(){
        if(AuthenticatedService.isUserLoggedIn()){
            return <Route{...this.props}/>
        } else{
            return <Redirect to='/login/'/>
        }
    }
}

export default AuthenticatedRoute;