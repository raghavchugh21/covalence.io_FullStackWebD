import React, { Component, Fragment } from 'react';
import Card from "./Card"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }


    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(films => this.setState({ films }))

    }

    render() {
        return (<Fragment>
            {this.state.films.map((film, index) => {
                return (<Card title={film.title}
                    desc={film.description}
                    director={film.director} />);
            })}
        </Fragment>);
    }

}

export default App;