import React,{PureComponent} from 'react'
import { Button, Icon } from 'antd'

import LandingMenu from '../LandingMenu/LandingMenu'

class LandingFooter extends PureComponent {
  goToTop = () => {
      window.scrollTo(0, 0);
  }
  render() {
    return (
      <footer className="landing-footer">
        <div className="go-to-top" onClick={this.goToTop}>
          <Icon type="to-top"/>
        </div>
        <div className="footer-menu-wrapper">
          <LandingMenu button="getStarted" />
          <div>
            <Button className="link-small">
              Legal note
              <Icon type="arrow-right" />
            </Button>
            <Button className="link-small">
              Privacy policy
              <Icon type="arrow-right" />
            </Button>
          </div>
        </div>
        <p className="copyrights">
          @ 2018 Company Name.
          All rights reserved.
        </p>
      </footer>
    )
  }
}

export default LandingFooter
