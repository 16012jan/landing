import React,{Component} from "react";
import classNames from 'classnames';
import { Icon, Button } from '../../modules/antd';

import SupportChat from '../SupportChat/SupportChat';

class HomeFooter extends Component {
  render() {
    return (
      <footer className="home-footer">
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
        <img src="/assets/images/pay-pal.png" alt="Pay Pal Logo"/>
          <SupportChat />
      </footer>
    )
  }
}

export default HomeFooter;
