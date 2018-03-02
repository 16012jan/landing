import React from "react";
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Landing from '../pages/Landing';

import './App.less';


class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/landing' component={Landing}/>
        <Route exact path='/signin' component={SignIn}/>
      </Switch>
    )
  }
}

export default App;
