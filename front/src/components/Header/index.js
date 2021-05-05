// == Import npm
import React from 'react';



import './styles.css';

// == Composant
const Header = ({title}) => {
  
  return(
  <div className="header">
    
    <h1>{title}</h1>
  </div>
)};

// == Export
export default Header;
