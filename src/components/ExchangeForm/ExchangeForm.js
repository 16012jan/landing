import React,{PureComponent} from "react";
import { Card, Dropdown, Form, Col, Row, Button, Input, FormItem, Icon } from "../../modules/antd"

class ExchangeForm extends PureComponent {
  render () {
    return(
      <Card className="exchange-box">
        <h1>Exchange</h1>
        <Form onSubmit={this.handleSubmit} className="login-form" layout="vertical">
          <FormItem>
            <div className="exchange-lable">
              <label>I transfer</label>
              <span>1 BTC = $8,817.05</span>
            </div>
              <Input placeholder="Phone number" />
          </FormItem>
          <div className="exchange-icons">
            <Icon type="arrow-down" className="green-icon" />
            <Icon type="arrow-up" className="green-icon" />
          </div>
          <FormItem>
              <div className="exchange-lable">
                <label>I get</label>
                <span>1 ETH = $932.42</span>
              </div>
              <Input placeholder="Phone number" />
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
