
  import React, { useState } from 'react';
  import { Input, Menu } from 'semantic-ui-react';
  import { NavLink } from 'react-router-dom';
  
  import '../../styleScss/coaching/menuHeader.scss';
  const MenuHeader = () => {
    // state = { activeItem: 'home' }
    const [activeItem, setActiveItem] = useState('Accueil');
  
    const handleItemClick = (event, {name}) =>  {
      console.log('On a cliqué',event);
      setActiveItem(name)
    };
  
    
      return (
        <Menu secondary>
            <NavLink
              to="/accueil"
              exact
            >
              <Menu.Item
                className='header-menu-item'
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
                className='header-menu-item'
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
                className='header-menu-item'
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
              className='header-menu-item'
              name='deconnexion'
              active={activeItem === 'deconnexion'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
          <div className="logo-menu"></div>
        </Menu>
      )

    
  };

  export default MenuHeader;
