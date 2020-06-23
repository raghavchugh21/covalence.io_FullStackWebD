import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import filmList from './filmList';
import filmId from './filmId';
import peopleList from './peopleList';
import peopleId from './peopleId';

class App extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <Fragment>
                <Router>
                    <Link to = "">Go Home </Link>
                    <Link to = "/films">View Films </Link>
                    <Link to = "/people">View People </Link>
                <Switch>
                    <Route exact path = "/films" component = {filmList}/>
                    <Route exact path = "/films/:id" component = {filmId}/>
                    <Route exact path = "/people" component = {peopleList}/>
                    <Route exact path = "/people/:id" component = {peopleId}/>
                </Switch>
                </Router>
            </Fragment>
        );
    }
}
export default App;