import React,{ Component, Fragment } from "react";
import { Row, Col, Form, Input, Icon, Button } from '../../modules/antd';

import CurrencyBox from '../CurrencyBox/CurrencyBox';
import {fiatCurrencisInfoMockData, cryptoCurrencisInfoMockData} from '../../config';

class ConvertionCurrenciesInfo extends Component {
  render() {
    return (
      <Fragment>
        <div className="currencies-wrapper">
          <h2>Fiat</h2>
          <Icon type="left" className="prev-currencies"/>
          <div className="currencies-slider">
            {fiatCurrencisInfoMockData.map((currency, index) => (
              <CurrencyBox key={index} currency={currency}/>
            ))}
          </div>
          <Icon type="right" className="next-currencies"/>
        </div>
        <div className="currencies-wrapper">
          <h2>cryptocurrency</h2>
          <Icon type="left" className="prev-currencies"/>
          <div className="currencies-slider">
            {cryptoCurrencisInfoMockData.map((currency, index) => (
              <CurrencyBox key={index} currency={currency}/>
            ))}
          </div>
          <Icon type="right" className="next-currencies"/>
        </div>
      </Fragment>
    )
  }
}

export default ConvertionCurrenciesInfo;
