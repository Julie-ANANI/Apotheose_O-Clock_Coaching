
  import React, { Component } from 'react'
  import { Input, Menu } from 'semantic-ui-react'
  import { NavLink } from 'react-router-dom';
  
  export default class MenuHeader extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu secondary>
            <NavLink
              to="/presentation"
              exact
            >
              <Menu.Item
                name='presentation'
                active={activeItem === 'presentation'}
                onClick={this.handleItemClick}
              />
            </NavLink>
            <NavLink
              to="/parcours-coaching"
              exact
            >
              <Menu.Item
                name='parcours coaching'
                active={activeItem === 'parcours coaching'}
                onClick={this.handleItemClick}
              />
            </NavLink>
            <NavLink
              to="/profil"
              exact
            >
              <Menu.Item
                name='profil'
                active={activeItem === 'profil'}
                onClick={this.handleItemClick}
              />
            </NavLink>

          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              name='deconnexion'
              active={activeItem === 'deconnexion'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      )

    }
  }
  