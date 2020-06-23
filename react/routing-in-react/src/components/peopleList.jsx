import React, { Component, Fragment } from 'react';
import Card from "./Card"

class peopleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people : []
        }
        this.addPeople = this.addPeople.bind(this);
        this.peoples = []
        this.i =0;
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people/')
            .then(res => res.json())
            .then(peoples => {this.peoples = peoples});
    }

    addPeople(){
        fetch(`https://ghibliapi.herokuapp.com/people/${this.peoples[this.i++].id}`)
        .then(res => res.json())
        .then(people => this.setState({people : [...this.state.people, <Card key = {this.i} title={people.name} desc={people.age} director={people.gender} />]}));
    }

     render() {
        let dic = {display: "inline-block"};
        return (<Fragment>
             {this.state.people}
             <button className="btn btn-outline-secondary" style ={dic}  type="button" onClick={this.addPeople} >Show More People</button>
         </Fragment>);
     }

}

export default peopleList;