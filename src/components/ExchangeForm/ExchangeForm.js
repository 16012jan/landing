import React,{PureComponent} from "react";
import { Card, Dropdown, Form, Col, Row, Button, Input, FormItem, Icon, Menu } from "../../modules/antd"
const menu = (
  <Menu>
    <Menu.Item key="1">BTC</Menu.Item>
    <Menu.Item key="2">ETH</Menu.Item>
    <Menu.Item key="3">LTC</Menu.Item>
  </Menu>
);

class ExchangeForm extends PureComponent {
  render () {
    return(
      <Card className="exchange-box">
        <h2>Exchange</h2>
        <Form onSubmit={this.handleSubmit} className="exchange-form" layout="vertical">
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
            <Icon type="arrow-down" className="green-icon" />
            <Icon type="arrow-up" className="green-icon" />
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
          <FormItem className="btn-exchange">
            <Button type="primary" className="btn-success">Exchange</Button>
          </FormItem>
        </Form>
      </Card>
    )
  }
}

export default ExchangeForm
