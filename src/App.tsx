import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

import Menu from './containers/menu/menu';
import About from './containers/about/about';

import packageJson from '../package.json';
import Home from './containers/home/home';

const routes = () => {
  return (
    <Switch> 
      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Redirect to="/" />
    </Switch>
  )
}

const App = () => {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Menu version={packageJson.version} />
        {routes()}        
      </div>
    </BrowserRouter>
  );
}


export default App;
