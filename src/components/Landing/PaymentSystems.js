import React, {PureComponent} from "react";
import { Row, Col } from'../../modules/antd';
// import image from '../../assets/images/avex.svg'

const paymentsLogos = [
  {path: "assets/images/avex.svg", name: "AmericanExpress"},
  {path: "assets/images/dscvr.svg", name: "DiscoverNetwork"},
  {path: "assets/images/mstrd.svg", name: "MasterCard"},
  {path: "assets/images/paypal.svg", name: "PayPall"},
  {path: "assets/images/visa.svg", name: "Visa"},
]



class PaymentSystems extends PureComponent {
  render() {
    return (

      <section id="payment-systems">
        <h2 className="landing-section-header">Payment systems</h2>
        <div className="ps-logos-container">
          {paymentsLogos.map((logo) => (
            <div className="payment-logo" key={logo.name}>
              <img src={logo.path} alt={logo.name} />
            </div>
          ) )}
          </div>
      </section>
    )
  }
}

export default PaymentSystems;
