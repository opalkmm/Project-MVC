import React, { Component } from 'react'
import { Comment } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'

export default class CommentSection extends Component {
  state = { collapsed: true,
            activeItem: 'more' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name, collapsed: !this.state.collapsed })
//   handleCheckbox = (e, { checked }) => this.setState({ collapsed: checked })

  render() {
    const { collapsed } = this.state
    const { activeItem } = this.state

    return (
      <div>
        
        <Menu text>
        <Menu.Item
          name={collapsed ? 'more' : 'less'}
          active={(activeItem === this.state.name)}
          onClick={this.handleItemClick}
        />
        </Menu>


        <Comment.Group>
          <Comment>
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>Christian Rocha</Comment.Author>
              <Comment.Metadata>
                <span>2 days ago</span>
              </Comment.Metadata>
              <Comment.Text>
                I'm very interested in this motherboard. Do you know if it'd
                work in a Intel LGA775 CPU socket?
              </Comment.Text>
              <Comment.Actions>
                <a>Reply</a>
              </Comment.Actions>
            </Comment.Content>

            <Comment.Group collapsed={collapsed}>
              <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Elliot Fu</Comment.Author>
                  <Comment.Metadata>
                    <span>1 day ago</span>
                  </Comment.Metadata>
                  <Comment.Text>No, it wont</Comment.Text>
                  <Comment.Actions>
                    <a>Reply</a>
                  </Comment.Actions>
                </Comment.Content>

                <Comment.Group>
                  <Comment>
                    <Comment.Avatar
                      as='a'
                      src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg'
                    />
                    <Comment.Content>
                      <Comment.Author as='a'>Jenny Hess</Comment.Author>
                      <Comment.Metadata>
                        <span>20 minutes ago</span>
                      </Comment.Metadata>
                      <Comment.Text>Maybe it would.</Comment.Text>
                      <Comment.Actions>
                        <a>Reply</a>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Comment>
            </Comment.Group>
          </Comment>
        </Comment.Group>
      </div>
    )
  }
}