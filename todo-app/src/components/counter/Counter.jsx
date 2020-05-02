import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component{

    constructor(){
        super(); //common Error
        this.state={
            counter : 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);

    }

    render() {
        return (
          <div className="Counter">
           <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
           <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
           <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
           <span className="count">{this.state.counter}</span>
           <div>
               <button className="reset" onClick={this.reset}>Reset</button>
           </div>
          </div>
        );
      }

    increment(by) { 
        this.setState(
            (prevState) => {
                return {counter : prevState.counter + by}
            }
        );
    }

    decrement(by){
        this.setState(
            (prevState) => {
                return {counter : prevState.counter - by}
            }
        );
    }
    
    reset(){
        this.setState( {counter : 0});
    }

}

class CounterButton extends Component {

    constructor(){
        super(); 
        this.state={
            counter : 0
        }
    }

    render(){
        return(
            <div className = "CounterButton" >
                <button onClick={() => this.props.incrementMethod(this.props.by)} >+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)} >-{this.props.by}</button>
            </div>
        );
    }
}

export default Counter;