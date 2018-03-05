import React from "react";
import { Row, Col, Form, Input, Icon, Button } from 'antd';
const FormItem = Form.Item;

import LoginSideBanner from '../components/LoginSideBanner';

class SignIn extends React.Component {
  render() {
    return (
      <Row className="login-page">
        <Col span={12} className="col col-banner">
          <LoginSideBanner />
        </Col>
        <Col span={18} offset={4} lg={{ span: 10, offset: 2 }} className="col login-wrapper">
          <section>
            <h1>Please Login to the system</h1>
            <Form onSubmit={this.handleSubmit} className="login-form" layout="vertical">
              <FormItem>
                  <label>Enter your phone number</label>
                  <span className="lable-description">You will receive a SMS varification code</span>
                  <Input placeholder="Phone number" />
              </FormItem>
              <FormItem>
                  <label>Enter your verification code</label>
                  <span className="lable-description">You can resend SMS after 60 sec</span>
                  <Input placeholder="Verification code" />
              </FormItem>
              <FormItem>
              <Row gutter={32}>
                <Col span={12} className="col">
                  <Button type="primary" className="btn-success">Primary</Button>
                </Col>
                <Col span={12} className="col">
                  <Button className="link">
                    Resend SMS
                     <Icon type="arrow-right" />
                  </Button>
                </Col>
              </Row>
            </FormItem>
            </Form>
          </section>
          <footer className="login-footer">
            <Button className="link-small">
              Legal note
              <Icon type="arrow-right" />
            </Button>
            <Button className="link-small">
              Privacy policy
              <Icon type="arrow-right" />
            </Button>
            <img src="assets/pay-pal.png" alt="Pay Pal Logo"/>
          </footer>
        </Col>
      </Row>
    )
  }
}

export default SignIn;
