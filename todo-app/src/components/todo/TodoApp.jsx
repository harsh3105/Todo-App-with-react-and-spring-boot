import React, {Component} from 'react';


class TodoApp extends Component{
    render(){
        return (
            <div className="TodoApp">
                <LoginComponent/>
            </div>
        )
    }
}

class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : 'harsh',
            password : ''
        }
        this.handlerUsernameChange = this.handlerUsernameChange.bind(this);
        this.handlerPasswordChange = this.handlerPasswordChange.bind(this);
    }

    handlerUsernameChange(event){
        this.setState(
            {
                username: event.target.value
            }
        )
    }
    handlerPasswordChange(event){
        this.setState(
            {
                password: event.target.value
            }
        )
    }
    render(){
        return(
           <div>
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handlerUsernameChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handlerPasswordChange}/>
                <button>Login</button>
           </div>
        );
    }
}

export default TodoApp;