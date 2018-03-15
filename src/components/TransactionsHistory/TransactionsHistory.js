import React,{ Component, Fragment } from "react";
import { Row, Col, Form, Input, Icon, Button, Layout, Header, Content, Footer, Card, Table } from '../../modules/antd';

import HomeFooter from '../HomeFooter/HomeFooter'
import LandingMenu from '../LandingMenu/LandingMenu'
import './transaction.less'

const columns = [{
  title: 'Status',
  dataIndex: 'status',
}, {
  title: 'Date of creation',
  dataIndex: 'date',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.age - b.age,
}, {
  title: 'Order №',
  dataIndex: 'order',
},{
  title: 'I Transfer',
  dataIndex: 'transfer',
},{
  title: 'I Get',
  dataIndex: 'get',
},{
  title: 'Rate',
  dataIndex: 'rate',
},{
  title: 'View',
  dataIndex: 'view',
}];

const data = [{
  key: '1',
  status: <Button className="btn-status btn-done">done</Button>,
  date: '11/05/2018',
  order: 123456,
  transfer: '1 ETH',
  get: '0.365655 BTC',
  rate:'1 ETH = 0.395454 BTC',
  view: <Icon className="table-info-icon" type="exclamation-circle-o" />
}, {
  key: '2',
  status: <Button className="btn-status btn-done">done</Button>,
  date: '11/05/2018',
  order: 123456,
  transfer: '1 ETH',
  get: '0.365655 BTC',
  rate:'1 ETH = 0.395454 BTC',
  view: <Icon className="table-info-icon" type="exclamation-circle-o" />
}, {
  key: '3',
  status: <Button className="btn-status btn-in-progress">in progress</Button>,
  date: '11/05/2018',
  order: 123456,
  transfer: '1 ETH',
  get: '0.365655 BTC',
  rate:'1 ETH = 0.395454 BTC',
  view: <Icon className="table-info-icon" type="exclamation-circle-o" />
}, {
  key: '4',
  status: <Button className="btn-status btn-in-progress">in progress</Button>,
  date: '11/05/2018',
  order: 123456,
  transfer: '1 ETH',
  get: '0.365655 BTC',
  rate:'1 ETH = 0.395454 BTC',
  view: <Icon className="table-info-icon" type="exclamation-circle-o" />
}, {
  key: '5',
  status: <Button className="btn-status btn-done">done</Button>,
  date: '11/05/2018',
  order: 123456,
  transfer: '1 ETH',
  get: '0.365655 BTC',
  rate:'1 ETH = 0.395454 BTC',
  view: <Icon className="table-info-icon" type="exclamation-circle-o" />
}];

class TransactionsHistory extends Component {
  onChange = (pagination, filters, sorter) => {
    console.log('params', pagination, filters, sorter);
  }
  render() {
    return (
      <Layout className="full-height">
        <header className="landing-top-menu">
          <LandingMenu />
        </header>
        <Content className="transactions-content">
          <Row>
            <Col span={20} offset={2}>
              <Card className="transactions-card">
                <h1 className="page-header">Transaction history</h1>
                <Table columns={columns} dataSource={data} onChange={this.onChange} pagination={false}/>
              </Card>
            </Col>
          </Row>
        </Content>
        <HomeFooter />
      </Layout>
    )
  }
}

export default TransactionsHistory;
