import React,{Component} from 'react'
import { Row, Col, Form, FormItem, Input, Icon, Button, Layout, Header, Content, Card, Dropdown, Menu} from '../../modules/antd';

import LandingMenu from '../LandingMenu/LandingMenu'
import HomeFooter from '../HomeFooter/HomeFooter'
import MakingPaymentRoutes from '../MakingPayment/MakingPaymentRoutes'

const menu = (
  <Menu>
    <Menu.Item key="1">BTC</Menu.Item>
    <Menu.Item key="2">ETH</Menu.Item>
    <Menu.Item key="3">LTC</Menu.Item>
  </Menu>
);

class MakingPaymentWrapper extends Component {
  render() {
    return (
      <Layout className="full-height">
        <nav className="landing-top-menu">
          <LandingMenu />
        </nav>
        <Content className="making-payment-page">
          <MakingPaymentRoutes />
          {this.props.children}
        </Content>
        <HomeFooter />
      </Layout>
    )
  }
}

export default MakingPaymentWrapper
