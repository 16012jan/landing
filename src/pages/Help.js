import React,{ Component, Fragment } from "react";
import { Row, Col, Form, Input, Icon, Button, Layout, Header, Content, Footer } from '../modules/antd';

import LandingMenu from '../components/LandingMenu/LandingMenu'
import AskedQuestions from '../components/Landing/AskedQuestions'
import HomeFooter from '../components/HomeFooter/HomeFooter'


class Help extends Component {
  render() {
    return (
      <Layout className="full-height">
        <header className="landing-top-menu">
          <LandingMenu  menu="homeMenuItems"/>
        </header>
        <Content>
          <Row className="home-row help-page">
            <Col span={20} offset={2}>
              <Input placeholder="Search Question"
                prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
              <AskedQuestions />
            </Col>
          </Row>
        </Content>
        <HomeFooter />
      </Layout>
    )
  }
}

export default Help;
