// == Import npm
import React, { useState, useEffect } from 'react';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)
import axios from 'axios';



// == Import
import './styles.css';
import 'semantic-ui-css/semantic.min.css';

//== Import from Semantic UI

import { Header, Progress, Divider } from 'semantic-ui-react'


// == Composant
const ThemeDashboard = () => {

return(
  <div className="theme-dashboard">
    <Header as='h2'> Bienvenue jeune padawan sur votre plateforme de coaching ! </Header>
    <Divider hidden />
    <Progress percent={33} indicating progress label="Mettre un message qui évolue selon l'état d'avancement" />
    <Divider hidden />
  
  </div>
);}

// == Export
export default ThemeDashboard;
