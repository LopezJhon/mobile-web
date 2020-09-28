import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Navbar from './component/Navbar/navbar';
import Homepage from "./page/homepage/homepage.js";
import Mens from './page/menspage/menspage';
import './App.css';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path='/mens' component={Mens} />
        <Route path='/womans' component={Mens} />
      </Switch>
    </div>
  );
}

export default App;
