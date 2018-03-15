import React,{Component, Fragment} from 'react'
import { Row, Col, Form, FormItem, Input, Icon, Button, Layout, Header, Content, Card, Dropdown, Menu} from '../../modules/antd';
import Recaptcha from 'react-recaptcha';

import LandingMenu from '../LandingMenu/LandingMenu'
import HomeFooter from '../HomeFooter/HomeFooter'
import './payment.less'

const menu = (
  <Menu>
    <Menu.Item key="1">BTC</Menu.Item>
    <Menu.Item key="2">ETH</Menu.Item>
    <Menu.Item key="3">LTC</Menu.Item>
  </Menu>
);

class CreatingOrder extends Component {
  render() {
    return (
      <Fragment>
        <Card className="making-payment-order">
          <div className="card-header">
            <h1>Creating Order</h1>
            <div className="order-number">Order №123456</div>
          </div>
          <div className="card-section">
            <div className="card-section-row">
              <div className="item-title">You transfer</div>
              <div className="item-value value-green">1 ETH</div>
            </div>
          </div>
          <div className="card-section">
            <div className="card-section-row">
              <div className="item-title">You get</div>
              <div className="item-value value-green">0.94552235 BTC</div>
            </div>
          </div>
          <div className="card-section">
            <div className="card-section-row">
              <div className="item-title">Exchange Rate</div>
              <div className="item-value">1 ETH = 0.0955465 BTC</div>
            </div>
            <div className="card-section-row">
              <div className="item-title">Fee included (0.5%)</div>
              <div className="item-value">0.0004455856 BTC</div>
            </div>
            <div className="card-section-row">
              <div className="item-title">Network transaction fee</div>
              <div className="item-value">0.006545 BTC</div>
            </div>
            <div className="card-section-row">
              <div className="item-title">Estimated arrival</div>
              <div className="item-value">&asymp;5-30 min</div>
            </div>
          </div>
          <div className="card-section">
            <div className="card-section-row">
              <div className="item-title">Recipient Address</div>
              <div className="item-value value-green">4hhh1g54h455h84h5jk5k45j66j4j564</div>
            </div>
          </div>
          <div className="card-section">
            <div className="card-section-row">
              <div className="item-title">Name</div>
              <div className="item-value">Ronnie Guerrero</div>
            </div>
          </div>
          <div className="btns-making-payment">
            <Button className="btn-grey">Back</Button>
            <Button type="primary" className="btn-success">Make Payment</Button>
          </div>
        </Card>
        <div className="payment-available-time">
          This page will be available within 15 minutes
        </div>
      </Fragment>
    )
  }
}

export default CreatingOrder
