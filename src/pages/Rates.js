import React,{ Component, Fragment } from "react";
import { Row, Col, Form, Input, Icon, Button, Layout, Header, Content, Footer } from '../modules/antd';

import LandingMenu from '../components/LandingMenu/LandingMenu'
import AskedQuestions from '../components/Landing/AskedQuestions'
import HomeFooter from '../components/HomeFooter/HomeFooter'
import ConvertionCurrenciesInfo from '../components/ConvertionCurrenciesInfo/ConvertionCurrenciesInfo'


class Rates extends Component {
  render() {
    return (
      <Layout className="full-height">
        <header className="landing-top-menu">
          <LandingMenu />
        </header>
        <Content className="rates-content">
          <Row className="home-row help-page">
            <Col span={18} offset={4}>
              <div className="choose-currency">
                <h2>Choose the currency</h2>
                <div className="currency-select">
                  <div className="currency-value">
                    <img src="assets/ukr.svg"/>
                    <span>UAH</span>
                  </div>
                  <div className="caret-icons">
                    <Icon type="caret-up" />
                    <Icon type="caret-down" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <ConvertionCurrenciesInfo />
        </Content>
        <HomeFooter />
      </Layout>
    )
  }
}

export default Rates;
