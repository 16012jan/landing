import React,{ Component, Fragment } from "react";
import { Row, Col, Form, FormItem, Input, Icon, Button, Layout, Header, Content, Footer, Card, Table } from '../modules/antd';

import HomeFooter from '../components/HomeFooter/HomeFooter'
import LandingMenu from '../components/LandingMenu/LandingMenu'
import './profile.less';

const columns = [{
  title: 'Transaction type',
  dataIndex: 'type',
}, {
  title: 'I get',
  dataIndex: 'get',
}, {
  title: 'Date of creation',
  dataIndex: 'date',
},{
  title: 'Transaction status',
  dataIndex: 'status',
}];

const data = [{
  key: '1',
  status: <span className="point-status done">done</span>,
  date: '11/05/2018',
  type: 'ETH to BTC',
  get: '0.365655',
}, {
  key: '2',
  status: <span className="point-status done">done</span>,
  date: '11/05/2018',
  type: 'ETH to BTC',
  get: '0.365655',
}, {
  key: '3',
  status: <span className="point-status in-progress">in progress</span>,
  date: '11/05/2018',
  type: 'ETH to BTC',
  get: '0.365655',
}, {
  key: '4',
  status: <span className="point-status in-progress">in progress</span>,
  date: '11/05/2018',
  type: 'ETH to BTC',
  get: '0.365655',
}, {
  key: '5',
  status: <span className="point-status done">done</span>,
  date: '11/05/2018',
  type: 'ETH to BTC',
  get: '0.365655',
}];

class Profile extends Component {

  render() {
    return (
      <Layout className="full-height">
        <nav className="landing-top-menu">
          <LandingMenu selected="profile" menu="homeMenuItems"/>
        </nav>
        <Content className="profile-page">
          <Row gutter={32} className="page-row">
            <Col span={10} offset={2}>
              <Card className="profile-card">
                <header>
                  <h1 className="page-header">Profile</h1>
                  <Button className="red-link">
                    Logout
                    <Icon type="arrow-right" />
                  </Button>
                </header>
                <div className="current-user-info">
                  <div className="prifile-image">
                    <div className="avatar"></div>
                    <a className="link-default">Change Photo</a>
                  </div>
                  <Form className="profile-form" layout="vertical">
                    <FormItem>
                        <label>Name</label>
                        <Input placeholder="Name" />
                    </FormItem>
                    <FormItem>
                        <label>Telephone number</label>
                        <span className="lable-description">Optional</span>
                        <Input />
                    </FormItem>
                    <FormItem className="with-divider">
                        <Button type="primary" className="btn-success">Save</Button>
                    </FormItem>
                    <FormItem>
                        <label>Email</label>
                        <Input />
                    </FormItem>
                    <FormItem className="with-divider">
                        <Button type="primary" className="btn-success">Change Email</Button>
                    </FormItem>
                    <FormItem>
                        <label>Current Password</label>
                        <Input placeholder="Name" />
                    </FormItem>
                    <FormItem>
                        <label>New Password</label>
                        <Input />
                    </FormItem>
                    <FormItem>
                        <label>Confirm Password</label>
                        <Input />
                    </FormItem>
                    <FormItem className="with-divider">
                        <Button type="primary" className="btn-success">Change Password</Button>
                    </FormItem>
                  </Form>
                </div>
              </Card>
            </Col>
            <Col span={10}>
              <Card className="transactions-card">
                <h1 className="page-header">Transaction history</h1>
                <Table columns={columns} dataSource={data} onChange={this.onChange} pagination={false}/>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

export default Profile;
