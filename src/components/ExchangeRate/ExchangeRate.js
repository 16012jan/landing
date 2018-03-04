import React,{Component} from "react";
import {Line} from 'react-chartjs-2';
import { Card, Dropdown, Form, Col, Row, Button, Input, FormItem, Icon } from "../../modules/antd"

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class ExchangeRate extends Component {
  render () {
    return(
      <Card className="exchange-rate-table card-table">
      <div className="exchange-info">
        <h2>Exchange Rate</h2>
        <Button className="btn-currency">
          BTC
        </Button>
        <p>Buy rate  $8,817.05</p>
        <p>Sell rate  $9,152.48</p>
      </div>
        <ul className="time-range-filters">
          <li className="active">Year</li>
          <li>Month</li>
          <li>Week</li>
          <li>48 Hours</li>
          <li>24 Hours</li>
        </ul>
        <Row>
          <Col span={18}>
            <Line data={data} />
          </Col>
          <Col span={6}>
          <ul className="curr-charts-list">
            <li className="active">USD to BTC</li>
            <li>UAH to BTC</li>
            <li>RUR to BTC</li>
            <li>EUR to BTC</li>
          </ul>
          <Button className="link-small">
              View all rates
              <Icon type="arrow-right" />
            </Button>
          </Col>
        </Row>
      </Card>
    )
  }
}

export default ExchangeRate
