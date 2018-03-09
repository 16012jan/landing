import React,{ Component, Fragment } from "react";
import { Row, Col, Form, Input, Icon, Button, Layout, Header, Content, Footer, Card } from '../modules/antd';

import LandingMenu from '../components/LandingMenu/LandingMenu'
import AskedQuestions from '../components/Landing/AskedQuestions'
import HomeFooter from '../components/HomeFooter/HomeFooter'
import ConvertionCurrenciesInfo from '../components/ConvertionCurrenciesInfo/ConvertionCurrenciesInfo'


class Rates extends Component {
  constructor(props) {
    super(props)
    this.state = {isSelectOpen: false}
  }
  selectCurrency = () => {
    this.setState({isSelectOpen:true})
  }
  render() {
    return (
      <Layout className="full-height">
        {
          this.state.isSelectOpen
          ?<div className="overlay">
            <Card className="select-currency-modal">
              <h3>Select currency</h3>
              
            </Card>
          </div>
          : null
        }
        <header className="landing-top-menu">
          <LandingMenu />
        </header>
        <Content className="rates-content">
          <Row className="home-row help-page">
            <Col span={18} offset={3}>
              <div className="choose-currency" onClick={this.selectCurrency}>
                <h2>Choose the currency</h2>
                <div className="currency-select">
                  <div className="currency-value">
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
          <Row>
            <Col span={18} offset={3}>
              <ConvertionCurrenciesInfo />
            </Col>
          </Row>
          <Row>
            <Card className="currency-rates-chart">
              <div className="no-chart-placeholder">
                Click on the card to display the graph
              </div>
            </Card>
          </Row>
        </Content>
        <HomeFooter />
      </Layout>
    )
  }
}

export default Rates;
