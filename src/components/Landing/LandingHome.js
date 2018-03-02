import React,{PureComponent} from "react";
import { Row, Col, Button } from '../../modules/antd';

import ExchangeForm from '../ExchangeForm/ExchangeForm'


class LandingHome extends PureComponent {
  render() {
    return (
      <div id="landing-page">
        <Row className="aside-wrapper">
          <Col span={14} className="col">
            <aside className="aside-banner aside-landing-banner">
              <h1>Buy any Cryptocurrency with ease</h1>
              <ul>
                <li>As a business owner or manager, the decision to opt for offshore software development can be difficult.</li>
                <li>As anyone who has experience knows, there are advantages and disadvantages to outsourcing software development. </li>
              </ul>
              <Button type="primary" className="btn-success btn-get-started">Get Started</Button>
            </aside>
          </Col>
          <Col span={10} className="col landing-exchange">
            <ExchangeForm />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <div className="deals">
              <div>
                <span className="deals-per-day deals-text">Deals per day</span>
                <span className="deals-per-day deals-number">198745</span>
              </div>
              <p className="deals-description">The number of transactions in the last 24 hours.</p>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default LandingHome
