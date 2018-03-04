import React,{Component} from "react";
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Landing from '../pages/Landing';
import Home from '../pages/Home';

import './App.less';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/landing' component={Landing}/>
        <Route path='/signin' component={SignIn}/>
      </Switch>
    )
  }
}

export default App;
