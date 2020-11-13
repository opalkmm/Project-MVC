import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
 

export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  // TODO 
  // Make this setState call a reroute to load the chosen page
  render() {
    const { activeItem } = this.state;

    return (
    <>
      <Menu className="wrappedMenu">
        <Menu.Item
          name="profile"
          active={activeItem === "profile"}
          onClick={this.handleItemClick}
          position="right"
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
      </>
    );
  }
}
