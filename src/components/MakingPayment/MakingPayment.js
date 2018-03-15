import React,{Component, Fragment} from 'react'
import { Row, Col, Form, FormItem, Input, Icon, Button, Layout, Header, Content, Card, Dropdown, Menu} from '../../modules/antd';
import QRCode from 'qrcode-react'

import LandingMenu from '../LandingMenu/LandingMenu'
import HomeFooter from '../HomeFooter/HomeFooter'
import './payment.less';

const menu = (
  <Menu>
    <Menu.Item key="1">BTC</Menu.Item>
    <Menu.Item key="2">ETH</Menu.Item>
    <Menu.Item key="3">LTC</Menu.Item>
  </Menu>
);

class MakingPayment extends Component {
  render() {
    return (
      <Fragment>
        <Card className="making-payment-pay">
          <div className="card-header">
            <h1>Making Payment</h1>
            <div className="order-number">Order №123456</div>
          </div>
          <div className="card-section">
              <div className="send">
                Send
                <span className="green"> 1 ETH </span>
                to the address below
              </div>
          </div>
          <div className="card-section">
              <div className="send-description">The whole amount should be sent as one transaction</div>
          </div>
          <div className="card-section">
            <div className="wallet">025h52j41j5j56j454jh5h65g5g6j554j6j4g8h8</div>
            <div className="wallet-description">Copy Address or scan QR Code</div>
            <QRCode value="http://facebook.github.io/react/" />
          </div>
          <div className="btns-making-payment">
            <Button className="btn-grey">Back</Button>
            <Button type="primary" className="btn-success">Make Payment</Button>
          </div>
        </Card>
        <div className="payment-available-time">
          You must make a payment within 12 hours
        </div>
      </Fragment>
    )
  }
}

export default MakingPayment
