import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
//import reducer provider
import {Provider} from 'react-redux';
//import the store you made with the reducers combined (store.js)
import store from './store';
import App from './App';
import Other from './Components/Other';
import ThisComponent from './Components/ThisComponent';

export default (
    //Provider wraps switch must contain store component
    <Provider store={store}> 

    <Switch>
    <Route exact path="/" component={App}/>
    <Route exact path="/other" component={Other} />
    <Route exact path="/thisComponent" component={ThisComponent} />
    </Switch>
    
    </Provider>
)