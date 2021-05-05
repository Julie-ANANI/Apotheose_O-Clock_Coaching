
  import React, { Component } from 'react'
  import { Input, Menu } from 'semantic-ui-react'
  
  export default class MenuHeader extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu secondary>
          <Menu.Item
            name='presentation'
            active={activeItem === 'presentation'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='parcours coaching'
            active={activeItem === 'parcours coaching'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='profil'
            active={activeItem === 'profil'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      )
    }
  }
  