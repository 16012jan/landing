import React,{ Component, Fragment } from "react";
import { Row, Col, Form, Input, Icon, Button, Card } from '../../modules/antd';

class CurrencyBox extends Component {
  render() {
    return (
      <Card className="currency-box">
        <h3>QIWI RUB/UAH</h3>
        <div className="rate-info">
          <div className="rate-info-col">
            <div className="currency-box-text">Buy</div>
            <div className="currency-box-rate">26.856</div>
            <div className="buy-rate-changes">+0.6</div>
          </div>
          <div className="rate-info-col">
            <div className="currency-box-text">Sell</div>
            <div className="currency-box-rate">26.856</div>
            <div className="sell-rate-changes">-0.5</div>
          </div>
        </div>
        <div className="currency-box-date">08-14-2018 19:32</div>
      </Card>
    )
  }
}

export default CurrencyBox;
