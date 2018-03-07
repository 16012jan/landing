import React,{ Component, Fragment } from "react";
import { Row, Col, Form, Input, Icon, Button } from '../modules/antd';

import LandingMenu from '../components/LandingMenu/LandingMenu'
import ExchangeForm from '../components/ExchangeForm/ExchangeForm'
import ExchangeRate from '../components/ExchangeRate/ExchangeRate'
import LimitsTable from '../components/LimitsTable/LimitsTable'
import ReserveTable from '../components/ReserveTable/ReserveTable'
import HomeFooter from '../components/HomeFooter/HomeFooter'


class Home extends Component {
  render() {
    return (
      <Fragment>
        <header className="landing-top-menu">
          <LandingMenu  menu="homeMenuItems"/>
        </header>
        <Row className="home-row">
          <Col span={24} lg={{span:8, offset:2}}>
            <ExchangeForm />
          </Col>
          <Col span={24} lg={{span:12}} >
            <ExchangeRate />
          </Col>
        </Row>
        <Row className="home-row">
          <Col span={24} lg={{span:8, offset:2}}>
            <ReserveTable />
          </Col>
          <Col span={24} lg={{span:12}} >
            <LimitsTable />
          </Col>
        </Row>
        <HomeFooter />
      </Fragment>
    )
  }
}

export default Home;
