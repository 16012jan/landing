import React,{Component} from "react";
import { Card, Dropdown, Form, Col, Row, Button, Input, FormItem, Icon } from "../../modules/antd"

// const limits = [
//   {name: 'VISA Mastercard', currency: [{name: 'UAH', max: 84.000, min: 1.000}, {name: 'USD', max: 10.000 , min: 100 }]},
//   {name: 'Cash', currency: [{name: 'UAH', max: 84.000, min: 1.000},{name: 'USD', max: 10.000 , min: 100 }]},
//   {name: 'BTC', range: {max: 5, min: 1}},
//   {name: 'ETH', range: {max: 150, min: 15}},
//   {name: 'LTC', range: {max: 200, min: 20}},
//   {name: 'QIWI', currency: [{name:'RUR', max: 300.000, min: 5.000}]},
// ]

class LimitsTable extends Component {
  render () {
    return(
      <Card className="limits-table card-table">
        <h2>Limits</h2>
        <table className="simple-table">
          <thead>
            <tr>
              <th>VISA Mastercard</th>
              <th>Cash</th>
              <th>BTC</th>
              <th>ETH</th>
              <th>LTC</th>
              <th>QIWI</th>
            </tr>
          </thead>
          <tbody>
            <tr className="max">
              <td className="max-value">84.000 UAH</td>
              <td className="max-value">84.000 UAH</td>
              <td className="max-value">5</td>
              <td className="max-value">150</td>
              <td className="max-value">200</td>
              <td className="max-value">300.000</td>
            </tr>
            <tr className="min">
              <td className="min-value">1.000 UAH</td>
              <td className="min-value">1.000 UAH</td>
              <td className="min-value">1</td>
              <td className="min-value">15</td>
              <td className="min-value">20</td>
              <td className="min-value">5.000</td>
            </tr>
            <tr className="max">
              <td className="max-value">10.000 USD</td>
              <td className="max-value">10.000 USD</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="min">
              <td className="min-value">1.000 USD</td>
              <td className="min-value">1.000 USD</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </Card>
    )
  }
}

export default LimitsTable
