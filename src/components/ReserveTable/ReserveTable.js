import React,{Component} from "react";
import { Card, Dropdown, Form, Col, Row, Button, Input, FormItem, Icon, Table } from "../../modules/antd"

const reserve = [
  {name: 'QIWI RUR', value: 900.000},
  {name: 'Cash USD', value: 500.000},
  {name: 'Cash UAH', value: 900.000},
  {name: 'VISA Mastercard USD', value: 1500.000},
  {name: 'VISA Mastercard UAH', value: 900.000}
]

class ReserveTable extends Component {
  render () {
    return(
      <Card className="reserve-table card-table">
        <h2>Reserve</h2>
        <table className="simple-table">
          <tbody>
          {reserve.map(row => {
            const key = row.name.toLowerCase().split(' ').join('_');
            return (
              <tr key={key}>
              <td>{row.name}</td>
              <td>{row.value}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </Card>
    )
  }
}

export default ReserveTable
