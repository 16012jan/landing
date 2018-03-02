import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Form, Input, Icon, Button, Menu } from 'antd';
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        mode="horizontal"
        theme="dark"
        className="top-menu"
      >
          <Menu.Item key="home" >
            <NavLink to="home">
              Home
            </NavLink>
          </Menu.Item>
          <Menu.Item key="hit" >
            <NavLink to="how-it-works">
              How It Works
            </NavLink>
          </Menu.Item>
          <Menu.Item key="faq" >
            <NavLink to="faq">
              F.A.Q
            </NavLink>
          </Menu.Item>
          <Menu.Item key="mail" >
            <NavLink to="signup">
              Payment Systems
            </NavLink>
          </Menu.Item>
          <Menu.Item key="app" className="green">
            <NavLink to="signin">
              Sign In
              <Icon type="arrow-right" />
              {/* <Button className="link-small">
                  Sign In
                  <Icon type="arrow-right" />
              </Button> */}
          </NavLink>
          </Menu.Item>
          <Menu.Item key="signup" className="green">
            <NavLink to="signup">
              Sign Up
              <Icon type="arrow-right" />
              {/* <Button className="link-small">
                  Sign Up
                  <Icon type="arrow-right" />
              </Button> */}
          </NavLink>
          </Menu.Item>
      </Menu>
    )
  }
}

export default Header;
