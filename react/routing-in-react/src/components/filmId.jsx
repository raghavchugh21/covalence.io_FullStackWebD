import React, { Component } from 'react';
import Card from './Card';

class filmId extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    componentDidMount(){
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(obj => this.setState({obj : obj}))
    }

    render(){
        return <Card title = {this.state.obj?.title} desc={this.state.obj?.description} director={this.state.obj?.director} />;
    }

}

export default filmId;