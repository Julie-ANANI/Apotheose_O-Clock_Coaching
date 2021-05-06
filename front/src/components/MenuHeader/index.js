
  import React, { useState } from 'react';
  import { Input, Menu } from 'semantic-ui-react';
  import { NavLink } from 'react-router-dom';
  
  const MenuHeader = () => {
    // state = { activeItem: 'home' }
    const [activeItem, setActiveItem] = useState('');
  
    const handleItemClick = (e, {name}) =>  {
      console.log(e);
      setActiveItem(name)
    };
  
    
      return (
        <Menu secondary>
            <NavLink
              to="/accueil"
              exact
            >
              <Menu.Item
                name='Accueil'
                active={activeItem === 'Accueil'}
                onClick={handleItemClick}
              />
            </NavLink>
            <NavLink
              to="/parcours-coaching"
              exact
            >
              <Menu.Item
                name='parcours coaching'
                active={activeItem === 'parcours coaching'}
                onClick={handleItemClick}
              />
            </NavLink>
            <NavLink
              to="/profil"
              exact
            >
              <Menu.Item
                name='profil'
                active={activeItem === 'profil'}
                onClick={handleItemClick}
              />
            </NavLink>

          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              name='deconnexion'
              active={activeItem === 'deconnexion'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      )

    
  };

  export default MenuHeader;
  