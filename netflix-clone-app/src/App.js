import React from 'react';
import './App.css';

import { Switch, Route, } from "react-router-dom";
import { Landingpage, Signin, Whoiswatching, Browse } from './components'

const App = () => {
  return (
    <>
    <Switch>
        <Route exact path='/' component={Landingpage}/>
        <Route exact path='/signin' component={Signin}/>
        <Route exact path='/whoiswatching' component={Whoiswatching}/>
        <Route exact path='/browse' component={Browse}/>
    </Switch>
  


    </>
  )
}

export default App;
