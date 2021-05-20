
import React, { useEffect, useState } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
  setSearchedStudents,
  activeRole,
  setActiveRole,
  setUserId,
  studentsList,
  searchedStudents,
  getSpeName,
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
    
  };

  const getSearchedStudents = () => {
    console.log('GET SEARCHED STUDENTS');
    let search = [];
    console.log(studentsList);

    if (searchedText.length > 0) {
      const loweredSearchedText = searchedText.toLowerCase();
      console.log('ON EST DANS LE IF DE GET SEARCHED STUDENTS');
      console.log('LOWERED SEARCHEDTEXT : ', loweredSearchedText);

      search = studentsList.filter((student) => {
        const promoName = student.cohortsInfo[0].nickname ? student.cohortsInfo[0].nickname : '';
        const speName = getSpeName(student);
        const loweredText = (student.firstname + student.lastname + promoName + speName).toLowerCase();
        console.log(loweredText);
        return loweredText.includes(loweredSearchedText)
       
      });
      console.log('SEARCH: ', search);
      setSearchedStudents(search);

    } else {

      setSearchedStudents(studentsList);
    }
    
    console.log('searchedStudents : ', searchedStudents);
    
  };
  



  const handleItemClick = (event, {name}) =>  {
    // e.preventDefault();
    console.log('On a cliqué',event);
    setActiveItem(name)

  };
  const handleItemClickLogout = (event, {name}) =>  {
    // e.preventDefault();
    console.log('On a cliqué',event);
    setActiveItem(name)
    setActiveRole('')
    setUserId(0)
    history.push('/login')
    
  };


  
  const handleSearchBar = (e) => {
    
    console.log('il y a du changement par ici');
    setSearchedText(e.target.value);
    console.log(searchedText);
    if (activeRole == 'student') {
      history.push('/parcours-coaching')
    } else  
    if (activeRole == 'admin') {
      history.push('/results')
    }
  };

  useEffect(() => {
    if (activeRole == 'student') {
      getSearchedThemes(); 
    } else if (activeRole == 'admin') {
      console.log('ON RENVOIE UNE LISTE D\'ETUDIANTS');
      console.log(studentsList);
      getSearchedStudents();
    }
    
    // FAUT-IL GARDER THEMES DANS LES PARAMETRES DU USEE EFECTS ?
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
          placeholder= { (activeRole == 'student') ? 'Rechercher un thème...' : 'Rechercher un étudiant'} 
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
        onClick={handleItemClickLogout}
      />
    </Menu.Menu>
    <div className="logo-menu"></div>
  </Menu>
  </div>
  )


};

export default MenuHeader;
