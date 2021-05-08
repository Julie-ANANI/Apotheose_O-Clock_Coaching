// == Import npm
import React, { useState, useEffect } from 'react';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)
import axios from 'axios';



// == Import
import './styles.css';
import logo from 'src/assets/logos/Logo de O\'coaching - white and red svg v2.svg';
import ThemeInDashboard from './ThemeInDashboard';


//== Import from Semantic UI

import { Header, Progress, Divider, Card, Image } from 'semantic-ui-react'
import { Link} from 'react-router-dom';

// == Composant
const StudentDashboard = ({themes, setSelectedTheme}) => {
 
const handleThemeClick = (e) => {
  console.log('on a bien cliqué');
  console.log('ceci est lid de la carte du thème  cliquée', e.target.closest('a').name);
  const name = parseInt(e.target.closest('a').name)
  setSelectedTheme(name);
};

return(
  <div className="student-dashboard">
      <div className="progress-container">
        <Progress className='general-progress-bar' percent={33} indicating progress />
        {/* importer composant message pour le message ci-dessous */}
        <span className='progressbar-message'>Message qui évolue en fonction de l'état d'avancement</span>
      </div>
    <Divider hidden />
    <Divider hidden />
    <Card.Group centered>
      {themes.map((theme)=> (
        <Link
          key={theme.id}
          name={theme.id}
          onClick={handleThemeClick}
          to={`/theme/${theme.id}`}
        >
          <ThemeInDashboard
            name={theme.id}
            {...theme}
          />
        </Link>
      ))}
      
    </Card.Group>
  
  </div>
);}

// == Export
export default StudentDashboard;
