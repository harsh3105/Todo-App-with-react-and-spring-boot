import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class TodoApp extends Component{
    render(){
        return (
            <div className="TodoApp">
                <Router>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>   
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/welcome/:name" component={WelcomeComponent}/>
                        <Route path="" component={ErrorComponent}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

class WelcomeComponent extends Component{
    render(){
        return <div>Welcome {this.props.match.params.name}</div>
    }
}

function ErrorComponent(){
    return <div>An Error Ocuured. Page Not found!</div>
}

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
            console.log("s");
            //this.setState({showSuccess:true})
            //this.setState({hasLoginFailed:false})
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
               {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
               {this.state.showSuccess && <div>Login Successfully</div>}
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
           </div>
        );
    }
}
export default TodoApp;