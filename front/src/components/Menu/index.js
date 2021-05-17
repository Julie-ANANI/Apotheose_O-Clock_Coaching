
import React, { useEffect, useState } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

import '../../styles/Menu.css'

const MenuHeader = ({
  navlinks,
  searchedText,
  setSearchedText,
  activeItem,
  setActiveItem,
  history,
  themes,
  searchedThemes,
  setSearchedThemes,
  }) => {

  const getSearchedThemes = () => {
    console.log('GET SEARCHED THEME');
    let search = [];
    console.log(themes);

    if (searchedText.length > 0) {
      const loweredSearchedText = searchedText.toLowerCase();
      console.log('ON EST DANS LE IF DE GET SEARCHED THEME');
      setActiveItem('parcours coaching')

      search = themes.filter((theme) => {
        const loweredTitle = theme.title.toLowerCase();
        console.log(loweredTitle);
        return loweredTitle.includes(loweredSearchedText)
       
      });

      setSearchedThemes(search);

    } else {

      setSearchedThemes(themes);
    }
    
    console.log(searchedThemes);
    
  }
  



  const handleItemClick = (event, {name}) =>  {
    // e.preventDefault();
    console.log('On a cliqué',event);
    setActiveItem(name)
  };


  
  const handleSearchBar = (e) => {
    
    console.log('il y a du changement par ici');
    setSearchedText(e.target.value);
    console.log(searchedText);
    // render()
    history.push('/parcours-coaching')
  };

  useEffect(() => {
    getSearchedThemes();
  },[searchedText, themes])


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
        <Input 
          type='text' 
          className='searchbar' 
          icon='search' 
          placeholder='Rechercher un thème...' 
          value={searchedText}
          onChange={handleSearchBar}
          // onFocus={()=>{this.this.placeholder=''}}
          // onBlur={()=>{this.this.placeholder='Rechercher un thème...'}}
        />
      </Menu.Item>
      <Menu.Item
        as ='a'
        className = 'header-menu-item navbar-name' 
      >
        {`Michel M.`}
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
