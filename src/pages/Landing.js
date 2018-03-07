import React,{ Component, Fragment } from "react";
import { Row, Col, Form, Input, Icon, Button } from '../modules/antd';

import LandingMenu from '../components/LandingMenu/LandingMenu'
import LandingHome from '../components/Landing/LandingHome'
import HowItWorks from '../components/Landing/HowItWorks'
import AskedQuestions from '../components/Landing/AskedQuestions'
import PaymentSystems from '../components/Landing/PaymentSystems'
import LandingFooter from '../components/Landing/LandingFooter'



class Landing extends Component {
  render() {
    return (
      <Fragment>
        <header className="landing-top-menu">
          <LandingMenu />
        </header>
        <LandingHome />
        <HowItWorks />
        <div className="faq-wrapper">
          <AskedQuestions />
        </div>
        <PaymentSystems />
        <LandingFooter />
      </Fragment>
    )
  }
}

export default Landing;
