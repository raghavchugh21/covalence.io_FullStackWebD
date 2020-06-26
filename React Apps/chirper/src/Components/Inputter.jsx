import React, { Component, Fragment } from 'react';
import Message from "./Message";
class Inputter extends Component 
{   constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        messages : []
    }
    }

    handleChange(e){
        this.setState({
            inText: e.target.value,
            inTime: `${new Date().getHours()}:${new Date().getMinutes()}`
        })
    }

    addMessage = () => {
        this.setState({
            messages: [...this.state.messages, <Message head = {this.state.inTime} msg = {this.state.inText} src = "https://www.dellywood.in/storage/user_male_placeholder.png" />]
        })
    }
    h1style = {color: "brown", textAlign: "center"};
    instyle = {position: "fixed", bottom: "0"};
    render(){
    return (
        <Fragment>
        <h1 style ={this.h1style} >Welcome to Chirper !</h1>
        {this.state.messages}
        <div className="input-group mb-3" style = {this.instyle}>
            <input  type="text" className="form-control" placeholder="Enter your message here" onChange = {this.handleChange} />
                <div className="input-group-append" >
                    <button className="btn btn-outline-secondary" type="button" onClick = {this.addMessage} >Post</button>
                </div>
        </div>
        </Fragment>
    );
    }
}

export default Inputter;