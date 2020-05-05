import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService';

class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : 'harsh',
            password : '',
            hasLoginFailed  : false,
            showSuccess : false
        }

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event){
        this.setState(
            {
                [event.target.name] : event.target.value 
            }
        )
    }

    loginClicked(){
        //harsh,harsh
        if(this.state.username==="harsh" && this.state.password==="harsh"){
            this.props.history.push(`/welcome/${this.state.username}`)
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
            console.log("s");
        }
        else{
            console.log("f");
            this.setState({showSuccess:false})
            this.setState({hasLoginFailed:true})
        }
    }

    render(){
        return(
           <div>
               <h1>Login</h1>
               <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
           </div>
        );
    }
}

export default LoginComponent;