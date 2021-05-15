// == Import npm
import React, { useState, useEffect } from 'react';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)
import axios from 'axios';



// == Import
import '../../styles/ParcoursCoaching.css';
import ThemeInParcoursCoachingPage from '../../components/ThemeInParcoursCoachingPage';


//== Import from Semantic UI

import { Progress, Divider, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

// == Composant
const ParcoursCoaching = ({themes, setSelectedTheme}) => {
 
// const handleThemeClick = (e) => {
//   console.log('on a bien cliqué');
//   console.log('ceci est lid de la carte du thème  cliquée', e.target.closest('a').name);
//   const id = parseInt(e.target.closest('a').name);
//   const theme = themes.find((theme) => theme.id === id);
//   console.log(theme);
//   setSelectedTheme(theme);
// };

return(
  <div className="parcourscoaching__student-dashboard">
      <div className="parcourscoaching__progress-container">
        <Progress className='parcourscoaching__general-progress-bar' percent={33} indicating progress />
        {/* importer composant message pour le message ci-dessous */}
        <span className='parcourscoaching__progressbar-message'>Message qui évolue en fonction de l'état d'avancement</span>
      </div>
    <Divider hidden />
    <Divider hidden />
    <Card.Group centered>
      {themes.map((theme)=> (
        <div  key={theme.id} className= 'parcourscoaching__theme-card-container'>
          <Link
          name={theme.id}
          // onClick={handleThemeClick}
          to={`/theme/${theme.id}`}
        >
          <ThemeInParcoursCoachingPage
            name={theme.id}
            {...theme}
          />
        </Link>
        </div>
      ))}
      
    </Card.Group>
  
  </div>
);}

// == Export
export default ParcoursCoaching;
