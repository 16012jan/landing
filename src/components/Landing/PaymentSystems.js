import React, {PureComponent} from "react";
import { Row, Col } from'../../modules/antd';

const paymentsLogos = [
  {path: "assets/payment_systems/avex.svg", name: "AmericanExpress"},
  {path: "assets/payment_systems/dscvr.svg", name: "DiscoverNetwork"},
  {path: "assets/payment_systems/mstrd.svg", name: "MasterCard"},
  {path: "assets/payment_systems/paypal.svg", name: "PayPall"},
  {path: "assets/payment_systems/visa.svg", name: "Visa"},
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
