import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import logo from "../logo.svg";
 

export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          position="right"
        />
        <Image 
        circular={true}
        size='mini'
        src={logo}
        />
        <Menu.Item />
        <Menu.Item
          name="profile"
          active={activeItem === "profile"}
          onClick={this.handleItemClick}
        >
          Profile
        </Menu.Item>

        <Menu.Item
          name="Preferences"
          active={activeItem === "Preferences"}
          onClick={this.handleItemClick}
        >
          Preferences
        </Menu.Item>
      </Menu>
    );
  }
}
