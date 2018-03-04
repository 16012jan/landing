import React,{Component} from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { Row, Col, Form, Input, Icon, Button, Menu } from 'antd';
const MenuItemGroup = Menu.ItemGroup;

const navMenuItems = [
  {path: '/', name: 'Home', key:'home'},
  {path: 'how-it-works', name: 'How It Works', key:'how-it-works'},
  {path: 'faq', name: 'F.A.Q', key:'faq'},
  {path: 'payment-systems', name: 'Payment Systems', key:'payment-systems'},
  {path: 'get-started', name: 'Get Started', key:'get-started', button:"getStarted"},
  {path: 'signin', name: 'Sign In', key:'signin', icon: "arrow-right"},
  {path: 'signup', name: 'Sign Up', key:'signup', icon: "arrow-right"},

]

class LandingMenu extends Component {
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        mode="horizontal"
        className="menu"
      >
      {navMenuItems.map((item) => {
        if(item.button && this.props.button !== item.button) {
          return
        }else if(item.button && this.props.button === item.button){
          return (
              <Menu.Item key={item.key} className="btn-menu">
                <NavLink to={item.path}>
                  <Button type="primary" className="btn-success">{item.name}</Button>
                </NavLink>
              </Menu.Item>
            )
        }
        const icon = !!item.icon ? <Icon type="arrow-right" /> : null;
        return (
          <Menu.Item key={item.key} className={icon ? 'green' : null}>
            <NavLink to={item.path}>
              {item.name}
              { icon }
            </NavLink>
          </Menu.Item>
        )
      })
      }
      </Menu>
    )
  }
}

LandingMenu.propTypes = {
  button: PropTypes.string
}

export default LandingMenu;
