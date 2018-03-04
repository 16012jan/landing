import React,{Component} from "react";
import { Icon, Button } from '../../modules/antd';

class HomeFooter extends Component {
  render() {
    return (
      <footer className="home-footer">
        <Button className="link-small">
          Legal note
          <Icon type="arrow-right" />
        </Button>
        <img src="assets/pay-pal.png" alt="Pay Pal Logo"/>
        <div className="start-chat">
          <span>Support Chat</span>
          <div>
          <Icon type="down" />
          </div>
        </div>
      </footer>
    )
  }
}

export default HomeFooter;
