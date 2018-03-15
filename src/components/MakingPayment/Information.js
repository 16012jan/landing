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

class Information extends Component {
  render() {
    return (
      <Card className="making-payment-info">
        <h1>Information</h1>
        <Form className="info-form" layout="vertical">
        <div className="info-row divider">
          <FormItem>
            <div className="form-label required-field">
              <label>Bitcoin wallet address</label>
            </div>
              <Input />
          </FormItem>
          <FormItem>
              <div className="form-label">
                <label>Name</label>
                <span>Optional</span>
              </div>
              <Input />
          </FormItem>
        </div>
        <div className="info-row">
          <FormItem>
              <div className="form-label">
                <label>Name</label>
                <span>Optional</span>
              </div>
              <Input />
          </FormItem>
          <FormItem>
              <div className="form-label">
                <label>Name</label>
                <span>Optional</span>
              </div>
              <Input />
          </FormItem>
        </div>
        <div className="recaptcha-section divider">
          <div className="asterisk-before">Indicates a required field</div>
          <div className="recaptcha">
            <Recaptcha sitekey="6LfDkUwUAAAAAD4vBJvZY-nSCi6ccPWwbeFYYgDE" />
          </div>
        </div>
        </Form>
        <div className="btns-making-payment">
          <Button className="btn-grey">Cancel</Button>
          <Button type="primary" className="btn-success">Next</Button>
        </div>
      </Card>
    )
  }
}

export default Information
