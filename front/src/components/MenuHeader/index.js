
import React, { useState } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const MenuHeader = ({navlinks}) => {
  // state = { activeItem: 'home' }
  const [activeItem, setActiveItem] = useState('Accueil');

  const handleItemClick = (event, {name}) =>  {
    console.log('On a cliqué',event);
    setActiveItem(name)
  };


  return (
  <Menu secondary>
    {navlinks.map((navlink) => (
      <NavLink
        key={navlink.label}
        to={navlink.route}
        exact>
        <Menu.Item
          className='header-menu-item'
          name={navlink.label}
          active={activeItem === navlink.label}
          onClick={handleItemClick}/>
      </NavLink>
    ))}


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
