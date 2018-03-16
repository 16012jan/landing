import React,{ Component, Fragment } from "react"
import { Row, Col, Form, Input, Icon, Button, Layout, Header, Content, Footer, Card, Tabs,  TabPane } from '../modules/antd'

import LandingMenu from '../components/LandingMenu/LandingMenu'
import AskedQuestions from '../components/Landing/AskedQuestions'
import HomeFooter from '../components/HomeFooter/HomeFooter'
import ConvertionCurrenciesInfo from '../components/ConvertionCurrenciesInfo/ConvertionCurrenciesInfo'
import CurrencyBox from '../components/CurrencyBox/CurrencyBox'

import './rates.less'


class Rates extends Component {
  constructor(props) {
    super(props)
    this.state = {isSelectOpen: false}
  }
  toggleCurrencyModal = () => {
    this.setState({isSelectOpen:!this.state.isSelectOpen})
  }

  render() {
    return (
      <Layout className="full-height">
        {
          this.state.isSelectOpen
          ?<div className="overlay" onClick={this.toggleCurrencyModal}>
            <Card className="select-currency-modal">
              <Icon type="close" />
              <h3>Select currency</h3>
              <div className="currency-modal-tabs">
                <div className="tab">Fiat</div>
                <div className="tab">Cryptocurrency</div>
              </div>
              <div>
                <div className="currencies-modal-wrapper">
                  <Icon type="left" className="prev-currencies"/>
                  <div className="currencies-modal-slider">
                      <div className="currency-info ethereum">
                        <div className="currency-name">ETH</div>
                      </div>
                      <div className="currency-info bitcoin">
                        <div className="currency-name">BTC</div>
                      </div>
                  </div>
                  <Icon type="right" className="next-currencies"/>
                </div>
              </div>
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
              <div className="choose-currency" onClick={this.toggleCurrencyModal}>
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
