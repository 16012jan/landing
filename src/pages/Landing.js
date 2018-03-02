import React,{ Component, Fragment } from "react";
import { Row, Col, Form, Input, Icon, Button } from '../modules/antd';

import Header from '../components/Header/Header'
import ExchangeForm from '../components/ExchangeForm/ExchangeForm'
import LandingHome from '../components/Landing/LandingHome'
import HowItWorks from '../components/Landing/HowItWorks'
import AskedQuestions from '../components/Landing/AskedQuestions'



class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <LandingHome />
        <HowItWorks />
        <AskedQuestions />
      </Fragment>
    )
  }
}

export default Landing;
