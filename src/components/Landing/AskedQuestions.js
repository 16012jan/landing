import React,{PureComponent} from "react";
import { Icon } from '../../modules/antd';

class AskedQuestions extends PureComponent {
  render() {
    return (
      <section id="faq">
        <h2 className="landing-section-header">F.A.Q</h2>
        <ul className="questions-list">
          <li>
            <Icon type="arrow-down" />
            Can I buy Bitcoin with my debit/credit card?
          </li>
          <li>
            <Icon type="arrow-down" />
            Are there any limits to buy Bitcoin with a banking card?
          </li>
          <li>
            <Icon type="arrow-down" />
            What other payment systems I use to buy Bitcoins?
          </li>
          <li>
            <Icon type="arrow-down" />
            Do I need to enter verifications codes every time I use my card?
          </li>
          <li>
            <Icon type="arrow-down" />
            What cryptocurrency I can buy on Crypto Trading?
          </li>
          <li>
            <Icon type="arrow-down" />
            How long will it take to get Bitcoin?
          </li>
          <li>
            <Icon type="arrow-down" />
            What should I do to verify my card?
          </li>
        </ul>
      </section>
    )
  }
}

export default AskedQuestions
