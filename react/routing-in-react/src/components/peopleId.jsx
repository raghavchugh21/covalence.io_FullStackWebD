import React, { Component } from 'react';
import Card from './Card';

class peopleId extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    componentDidMount(){
        console.log(this.props.match.params.id);
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(obj => this.setState({obj : obj}))
    }

    render(){
        return <Card title = {this.state.obj?.name} desc={this.state.obj?.age} director={this.state.obj?.gender} />;
    }

}

export default peopleId;