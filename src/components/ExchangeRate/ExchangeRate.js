import React,{Component} from "react";
import {Line} from 'react-chartjs-2';
import { Card, Dropdown, Form, Col, Row, Button, Input, FormItem, Icon } from "../../modules/antd"

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [65, 59, 80, 81, 91, 95, 105]
    }
  ]
};
const options = {
  tooltips: {
         enabled: false
  },
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false
  },
  scales: {
        yAxes: [
            {
                position: 'right',
                ticks: {
                  fontColor: "#CCC",
                    callback: function(label, index, labels) {
                        return label+'k';
                    }
                }
            }
        ],
        xAxes: [
          {
            gridLines : {
                display : false
            },
            ticks: {
              fontColor: "#CCC",
              callback: function(label, index, labels) {
                  return label.substring(0, 3);
              }
            }
          }
        ]
    }
}

class ExchangeRate extends Component {
  constructor(props) {
    super(props)
    this.state = {data:data, options:options}
  }
  componentDidMount() {
    var ctx = document.querySelectorAll('.chartjs-render-monitor');
    var ctx = ctx[0].getContext("2d");
    var gradientStroke = ctx.createLinearGradient(300, 0, 100, 0);
    gradientStroke.addColorStop(0, "#29abe2");
    gradientStroke.addColorStop(1, "#3a3897");
    data.datasets['borderColor'] = gradientStroke
    data.datasets['pointBorderColor'] = gradientStroke
    data.datasets['pointBackgroundColor'] = gradientStroke
    data.datasets['pointHoverBackgroundColor'] = gradientStroke
    data.datasets['pointHoverBorderColor'] = gradientStroke

    this.setState({
      data : {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: gradientStroke,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: gradientStroke,
            pointBackgroundColor: gradientStroke,
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: gradientStroke,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            pointHitRadius: 0,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      }
    })

  }
  render () {
    return(
      <Card className="exchange-rate-table card-table">
        <div className="exchange-info">
          <div className="title-with-button">
            <h2>Exchange Rate</h2>
            <Button className="btn-currency">
              BTC
            </Button>
          </div>
          <div className="rate-info">
            <p>Buy rate  $8,817.05</p>
            <p>Sell rate  $9,152.48</p>
          </div>
        </div>
        <ul className="time-range-filters">
          <li className="active">Year</li>
          <li>Month</li>
          <li>Week</li>
          <li>48 Hours</li>
          <li>24 Hours</li>
        </ul>
        <Row type="flex">
          <Col span={18} id="exchange-rate-chart">
            <Line data={this.state.data} options={this.state.options}  height={205}/>
          </Col>
          <Col span={6} className="curr-list-box">
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
