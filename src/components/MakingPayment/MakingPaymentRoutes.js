import React,{PureComponent} from 'react';
import classNames from 'classnames'
import { Link } from 'react-router-dom';


class MakingPaymentRoutes extends PureComponent {
  render () {
    return(
      <ul className="payment-steps">
        <li className="step complete"><Link to="/payment/amount-check">Check the amount</Link></li>
        <li className="separator"></li>
        <li className="step"><Link to="/payment/information">Information</Link></li>
        <li className="separator"></li>
        <li className="step"><Link to="/payment/order">Creating order</Link></li>
        <li className="separator"></li>
        <li className="step"><Link to="/payment/pay">Making payment</Link></li>
      </ul>
    )
  }
}

export default MakingPaymentRoutes
