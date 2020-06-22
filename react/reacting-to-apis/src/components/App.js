import React, { Component, Fragment } from 'react';
import Card from "./Card"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            filmList: [],
            i: 0,
            created: true
        }
        this.addFilm = this.addFilm.bind(this);
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(films => this.setState({ films }));
    }

    addFilm() {
        this.setState({created:false})
        this.setState({ filmList: [...this.state.filmList, this.state.films[this.state.i++]] });
        console.log(this.state.films[0]);
    }

    render() {
        if(this.state.created){
        this.state.films = this.state.films.map((film) => {
            return (
                <Card title={film.title}
                    desc={film.description}
                    director={film.director} />
            );
        })}
        return (<Fragment>
            {this.state.filmList}
            <button className="btn btn-outline-secondary" type="button" onClick={this.addFilm} >Post</button>
        </Fragment>);
    }

}

export default App;