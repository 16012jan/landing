import React,{PureComponent} from "react";
import { Row, Col, Form, Input, Icon, Button } from '../../modules/antd';


class HowItWorks extends PureComponent {
  render() {
    return (
      <section id="how-it-works">
        <h2 className="landing-section-header">How It Works</h2>
        <Row className="img-blocks">
          <Col span={8} className="img-blocks-item">
            <img src="assets/orders.svg" alt="Orders image"/>
            <h3 className="block-header">Fast creating orders</h3>
            <p className="block-description">Automatically included information from profile</p>
          </Col>
          <Col span={8} className="img-blocks-item">
            <img src="assets/tracking.svg" alt="Tracking image"/>
            <h3 className="block-header">Tracking cryptocurrency</h3>
            <p className="block-description">Convenient display of graphs</p>
          </Col>
          <Col span={8} className="img-blocks-item">
            <img src="assets/wallet.svg" alt="Wallet image"/>
            <h3 className="block-header">Referal and bonus programs</h3>
            <p className="block-description">Ability to make transactions with lower free</p>
          </Col>
        </Row>
        <Row className="trading">
          <Col span={11} offset={2}>
              <h3>Start trading with the most reliable platform</h3>
              <ul>
                <li>
                  As a business owner or manager, the decision
                  to opt for offshore software development can be difficult.
                </li>
                <li>
                  As anyone who has experience knows, there are advantages and
                  disadvantages to outsourcing software development.
                </li>
                <li>
                  How then, do you balance the risks and rewards and come out on top?
                  Here are five tips to ensure that you receive an excellent return on investment.
                </li>
              </ul>
              <Button type="primary" className="btn-success">Get Exchange Now</Button>
          </Col>
          <Col span={11} className="img-laptop">
            <img src="assets/laptop/laptop@2x.png" alt="Laptop image"/>
          </Col>
        </Row>
      </section>
    )
  }
}

export default HowItWorks
