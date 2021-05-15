
import React, { useState } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../../styles/Menu.css'

const MenuHeader = ({navlinks}) => {
  // state = { activeItem: 'home' }
  const [activeItem, setActiveItem] = useState('Accueil');

  const handleItemClick = (event, {name}) =>  {
    console.log('On a cliqué',event);
    setActiveItem(name)
  };


  return (
  <div className="navbar">
    <Menu secondary>
    {navlinks.map((navlink) => (

        <Menu.Item
          onClick={handleItemClick}
          key={navlink.label}
          as= { Link }
          to={navlink.route} 
          className='header-menu-item'
          name={navlink.label}
          active={activeItem === navlink.label}
          />

    ))}


    <Menu.Menu position='right'>
      <Menu.Item>
        <Input className='searchbar' icon='search' placeholder='Rechercher un thème' />
      </Menu.Item>
      <Menu.Item
        className='header-menu-item deconnexion'
        name='deconnexion'
        active={activeItem === 'deconnexion'}
        onClick={handleItemClick}
      />
    </Menu.Menu>
    <div className="logo-menu"></div>
  </Menu>
  </div>
  )


};

export default MenuHeader;
