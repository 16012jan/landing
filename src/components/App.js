import React,{Component} from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Landing from '../pages/Landing';
import Home from '../pages/Home';
import Help from '../pages/Help';
import Rates from '../pages/Rates';
import Profile from '../pages/Profile';
import TransactionsHistory from './TransactionsHistory/TransactionsHistory';
import MakingPaymentWrapper from './MakingPayment/MakingPaymentWrapper';

import CheckTheAmounts from './MakingPayment/CheckTheAmounts';
import Information from './MakingPayment/Information';
import CreatingOrder from './MakingPayment/CreatingOrder';
import MakingPayment from './MakingPayment/MakingPayment';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/home' component={Home}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/help' component={Help}/>
        <Route path='/rates' component={Rates}/>
        {/*  not main */}
        <Route path='/transactions' component={TransactionsHistory}/>
        <Route path='/my-profile' component={Profile}/>
        <MakingPaymentWrapper  path='/payment' component={MakingPaymentWrapper}>
          <Route exact path="/payment" component={() => <Redirect to="/payment/amount-check"/>}/>
          <Route path='/payment/amount-check' component={CheckTheAmounts}/>
          <Route path='/payment/information' component={Information}/>
          <Route path='/payment/order' component={CreatingOrder}/>
          <Route path='/payment/pay' component={MakingPayment}/>
        </MakingPaymentWrapper>
      </Switch>
    )
  }
}



export default App;
