import React from "react";
import {
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Image,
} from "semantic-ui-react";
import GridExampleContainer from "./CardContainer.js";
import logo from "../logo.svg";
import Navbar from "./Navbar.js";

const SideBarMenu = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Image
          className="buddleLogoTrigger"
          circular={true}
          size="mini"
          src={logo}
          position="left"
          floated="left"
          hidden={false}
          onClick={() => {
            setVisible(!visible);
          }}
        />
        <Navbar />

        <Sidebar.Pushable as={Segment} className="sidebarWrapper">
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as="a">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as="h3">
                <GridExampleContainer />
              </Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};

export default SideBarMenu;
