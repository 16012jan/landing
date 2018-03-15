import React,{Component, Fragment} from 'react'
import { Row, Col, Form, FormItem, Input, Icon, Button, Layout, Header, Content, Card, Dropdown, Menu} from '../../modules/antd';

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

class CheckTheAmounts extends Component {
  render() {
    return (
      <Card className="making-payment-card">
        <h1>Check the amounts</h1>
        <Form className="amounts-form" layout="vertical">
          <FormItem className="input-with-dropdown">
            <div className="exchange-lable">
              <label>I transfer</label>
              <span>1 BTC = $8,817.05</span>
            </div>
              <Input />
              <Dropdown overlay={menu} className="dropdown-menu">
                <Button  className="embeded-dropdown">
                  BTC <Icon type="down" />
                </Button>
              </Dropdown>
          </FormItem>
          <div className="exchange-icons">
            <Icon type="arrow-right" className="green-icon" />
            <Icon type="arrow-left" className="green-icon" />
          </div>
          <FormItem className="input-with-dropdown">
              <div className="exchange-lable">
                <label>I get</label>
                <span>1 ETH = $932.42</span>
              </div>
              <Input />
              <Dropdown overlay={menu} className="dropdown-menu">
                <Button  className="embeded-dropdown">
                  BTC <Icon type="down" />
                </Button>
              </Dropdown>
          </FormItem>
        </Form>
        <div className="payment-info-section">
          <div className="payment-exchange-info">
            <p className="info-title">Exchange rate</p>
            <p className="info-value">1 ETH = 0.0955465 BTC</p>
          </div>
          <div className="payment-exchange-info">
            <p className="info-title">Fee included (0.5%)</p>
            <p className="info-value">0.0004455856 BTC</p>
          </div>
          <div className="payment-exchange-info">
            <p className="info-title">Network transaction fee</p>
            <p className="info-value">0.006545 BTC</p>
          </div>
        </div>
        <div className="arrival">
          <div className="arrival-title">
            Estimated arrival
          </div>
          <div className="arrival-value">
            &asymp;5-30min
          </div>
        </div>
        <div className="btns-making-payment">
          <Button className="btn-grey">Cancel</Button>
          <Button type="primary" className="btn-success">Next</Button>
        </div>
      </Card>
    )
  }
}

export default CheckTheAmounts
