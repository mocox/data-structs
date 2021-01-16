import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';


import './App.css';

import Menu from './containers/menu/menu';

import packageJson from '../package.json';
import Home from './containers/home/home';
import Intros from './containers/intros/intros';
import Searches from './containers/searches/searches';
import Sorting from './containers/sorting/sorting';
import DataStructures from './containers/data-structures/data-structures';
import Profile from './containers/profile/profile';

import Scroll from './components/scroll/Scroll';

const routes = () => {
  return (
    <Switch> 
      <Route path="/" exact component={Home}/>
      <Route path="/intros/:which" exact component={Intros}/>
      <Route path="/searches/:which" component={Searches} />
      <Route path="/sorting/:which" component={Sorting} />
      <Route path="/data-structures/:which" component={DataStructures}/>
      <Route path="/profile" exact component={Profile} />
      <Redirect to="/" />
    </Switch>
  )
}

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        
        <Menu version={packageJson.version} />

        <Scroll>
        <div className="body-container">
                <div className="left-panel">
                    {routes()}  
                </div>
                <div className="right-panel">
                    {/* change to component */}
                    <h2>Links</h2>
                    <ul>
                      <li>                        
                        <a href="https://github.com/mocox/data-structs" rel="noreferrer" target="_blank">Our github page.</a>
                      </li>
                      <li>
                        <a href="https://visualgo.net/" rel="noreferrer" target="_blank">Visual Examples</a>
                      </li>
                      <li>Link3</li>
                    </ul>
                </div>
            </div>
            </Scroll>
      </div>
    </BrowserRouter>
  );
}


export default App;

