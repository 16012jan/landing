import React,{Component} from "react";
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Landing from '../pages/Landing';
import Home from '../pages/Home';
import Help from '../pages/Help';
import Rates from '../pages/Rates';

import './App.less';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/landing' component={Landing}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/help' component={Help}/>
        <Route path='/rates' component={Rates}/>
      </Switch>
    )
  }
}

export default App;
