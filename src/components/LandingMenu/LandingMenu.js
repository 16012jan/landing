import React,{Component} from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { Row, Col, Form, Input, Icon, Button, Menu, Avatar } from 'antd';
const MenuItemGroup = Menu.ItemGroup;

const menues = {
  navMenuItems: [
    {path: '/', name: 'Home', key:'home'},
    {path: 'how-it-works', name: 'How It Works', key:'how-it-works'},
    {path: 'faq', name: 'F.A.Q', key:'faq'},
    {path: 'payment-systems', name: 'Payment Systems', key:'payment-systems'},
    {path: 'rates', name: 'Rates', key:'rates'},
    {path: 'get-started', name: 'Get Started', key:'get-started', button:"getStarted"},
    {path: 'signin', name: 'Sign In', key:'signin', icon: "arrow-right"},
    {path: 'signup', name: 'Sign Up', key:'signup', icon: "arrow-right"},
  ],
  homeMenuItems: [
    {path: '/', name: 'Home', key:'home'},
    {path: 'profile', name: 'Profile', key:'profile'},
    {path: 'history', name: 'History', key:'history'},
    {path: 'order', name: 'Order', key:'order'},
    {path: 'help', name: 'Help', key:'help'},
    {path: 'about', name: 'About', key:'about'},
    {path: 'contacts', name: 'Contacts', key:'contacts'},
    {path: 'profile/:id', name: "Wayne Wagner", icon: "arrow-right", profile:"true", key:'current-profile'},
  ]
}

class LandingMenu extends Component {
  render() {
    const menu = this.props.menu || 'navMenuItems'
    return (
      <Menu
        onClick={this.handleClick}
        mode="horizontal"
        className="menu"
      >
      {menues[menu].map((item) => {
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
        const icon = !!item.icon ? <Icon type={item.icon} /> : null;
        const profile = !!item.profile ? <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className="menu-avatar"/> : null
        return (
          <Menu.Item key={item.key} className={icon ? 'green' : null}>
            <NavLink to={item.path}>
              {profile}
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
