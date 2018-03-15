import React,{Component} from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from "react-router-dom";
import { Form, Input, Icon, Button, FormItem, TextArea } from '../../modules/antd';

import './chat.less'


class SupportChat extends Component {
  constructor(props) {
    super(props)
    this.state = {isChatOpen: false}
  }
  toggleChat = () => {
    this.setState({isChatOpen: !this.state.isChatOpen})
  }
  render() {
    return (
      <div className={classNames({ 'chat-wrapper': true }, { active:  this.state.isChatOpen ? true : false })}>
        <div className="chat">
          <div className="start-chat" onClick={this.toggleChat}>
            <span>Support Chat</span>
            <div>
            <Icon type="down" />
            </div>
          </div>
          <div className="chat-panel">
            <div className="messages">
              <div className="message-box income-messages">
                Welcome to our Chat!
                Please fill out the forms below to get started.
              </div>
              <div className="message-box outcome-messages">
                Welcome to our Chat!
                Please fill out the forms below to get started.
              </div>
            </div>
            <div className="chat-form">
              <FormItem>
                  <Input placeholder="Your Name" />
              </FormItem>
              <FormItem>
                  <Input placeholder="Choose specific topic" />
              </FormItem>
              <FormItem>
                  <TextArea rows={4} placeholder="Type a message..." />
              </FormItem>
              <Button className="btn-chat">Start the chat</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SupportChat;
