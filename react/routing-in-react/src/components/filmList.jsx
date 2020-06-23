import React, { Component, Fragment } from 'react';
import Card from "./Card"

class filmList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film : []
        }
        this.addFilm = this.addFilm.bind(this);
        this.films = []
        this.i =0;
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then(res => res.json())
            .then(films => {this.films = films});
    }

    addFilm(){
        fetch(`https://ghibliapi.herokuapp.com/films/${this.films[this.i++].id}`)
        .then(res => res.json())
        .then(film => this.setState({film : [...this.state.film, <Card key = {this.i} title={film.title} desc={film.description} director={film.director} />]}));
    }

     render() {
        let dic = {display: "inline-block"};
        return (<Fragment>
             {this.state.film}
             <button className="btn btn-outline-secondary" style ={dic}  type="button" onClick={this.addFilm} >Show More Films</button>
         </Fragment>);
     }

}

export default filmList;