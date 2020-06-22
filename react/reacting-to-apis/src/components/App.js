import React, { Component, Fragment } from 'react';
import Card from "./Card"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films : [],
            i : 0,
            film : []
        }
        this.addFilm = this.addFilm.bind(this);
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then(res => res.json())
            .then(films => this.setState({films}));
    }

    addFilm(){
        fetch(`https://ghibliapi.herokuapp.com/films/${this.state.films[this.state.i++].id}`)
        .then(res => res.json())
        .then(film => this.setState({film : [...this.state.film, <Card title={film.title} desc={film.description} director={film.director} />]}));

    }

     render() {
 
        return (<Fragment>
             {this.state.film}
             <button className="btn btn-outline-secondary" type="button" onClick={this.addFilm} >Post</button>
         </Fragment>);
     }

}

export default App;