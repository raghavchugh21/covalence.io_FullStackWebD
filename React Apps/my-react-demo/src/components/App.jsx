import React, { Component, Fragment } from 'react';

// const App = (props) => {

//     let element = <h1>Hey! This is {props.name}. Aur Mai Phodunga!</h1>;
//     return element;
// }

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "aur Mai Phodunga!",
            placeholder: "How's the Josh?"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

 componentDidMount(){
     this.setState({
          hasLoaded : true
     })
   }

    handleChange(e) {
        this.setState({
            inpText: e.target.value
        });
    }
    handleClick(e) {
        this.setState(function (currentState, currentProps) {
            return {
                hasLoaded: !currentState.hasLoaded
            }
        })
    }

    render() {
        if (this.state.hasLoaded) {
            return (
                <Fragment>
                    <input placeholder={this.state.placeholder} onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Yo</button>
                    <h1>Hey! This is {this.props.name}, {this.state.text}</h1>
                </Fragment>);
        }
        else {
            return (
                <Fragment>
                    <h1>Loading...</h1>
                    <button onClick={this.handleClick}>Yo</button>
                </Fragment>);
        }

    }

}

export default App;