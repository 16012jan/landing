import React,{ Component, Fragment } from "react";
import { Row, Col, Form, Input, Icon, Button } from '../../modules/antd';

class ConvertionCurrenciesInfo extends Component {
  render() {
    return (
      <Fragment>
        <div className="currencies-box">
          <h2>Fiat</h2>

        </div>
        <div className="currencies-box">
          <h2>Cryptocurrency</h2>

        </div>
      </Fragment>
    )
  }
}

export default ConvertionCurrenciesInfo;
