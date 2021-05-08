// == Import npm
import React, { useState, useEffect } from 'react';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)
import axios from 'axios';



// == Import
import '../../styleScss/coaching/studentDashboard.scss';
import logo from 'src/assets/logos/Logo de O\'coaching - white and red svg v2.svg';
import ThemeInDashboard from './ThemeInDashboard';


//== Import from Semantic UI

import { Header, Progress, Divider, Card, Image } from 'semantic-ui-react'


// == Composant
const StudentDashboard = ({themes}) => {
  

return(
  <div className="student-dashboard">
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Image src={logo} size='medium' centered />
    <Header className='header-dashboard' as='h1' textAlign='center'> Clique sur un thème et commence à remplir tes missions jeune padawan ! </Header>
    <Divider hidden />
    <Divider hidden />
      <div className="progress-container">
        <Progress className='general-progress-bar' percent={33} indicating progress />
        {/* importer composant message pour le message ci-dessous */}
        <span className='progressbar-message'>Message qui évolue en fonction de l'état d'avancement</span>
      </div>
    <Divider hidden />
    <Divider hidden />
    <Card.Group centered>
      {themes.map((theme)=> (
        <ThemeInDashboard
        key={theme.id}
        {...theme}
        />
      ))}
      
    </Card.Group>
  
  </div>
);}

// == Export
export default StudentDashboard;
