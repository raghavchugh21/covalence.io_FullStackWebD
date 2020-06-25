import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import PostId from './components/PostId';

ReactDOM.render(
<Router>
    <Switch>
        <Route exact path = "/" component = {App}></Route>
        <Route exact path = "/:id/details" component = {PostId}></Route>
    </Switch>
</Router> , document.getElementById("root"));