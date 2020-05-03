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

        // this.handlerUsernameChange = this.handlerUsernameChange.bind(this);
        // this.handlerPasswordChange = this.handlerPasswordChange.bind(this);
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

    // handlerUsernameChange(event){
    //     this.setState(
    //         {
    //             username: event.target.value
    //         }
    //     )
    // }
    // handlerPasswordChange(event){
    //     this.setState(
    //         {
    //             password: event.target.value
    //         }
    //     )
    // }

    loginClicked(){
        //harsh,harsh
        if(this.state.username==="harsh" && this.state.password==="harsh"){
            console.log("s");
        }
        else{
            console.log("f");
        }
        //console.log(this.state);
    }

    render(){
        return(
           <div>
               <div>Invalid Credentials</div>
               <div>Login Successfully</div>
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
           </div>
        );
    }
}

export default TodoApp;