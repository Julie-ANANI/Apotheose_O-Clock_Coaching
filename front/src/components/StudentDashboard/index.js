// == Import npm
import React, { useState, useEffect } from 'react';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)
import axios from 'axios';



// == Import
import './styles.css';

import ThemeInDashboard from './ThemeInDashboard';


//== Import from Semantic UI

import { Header, Progress, Divider, Card } from 'semantic-ui-react'


// == Composant
const StudentDashboard = () => {

return(
  <div className="student-dashboard">
    <Header as='h2'> Bienvenue jeune padawan sur votre plateforme de coaching ! </Header>
    <Divider hidden />
    <Progress percent={33} indicating progress label="Mettre un message qui évolue selon l'état d'avancement" />
    <Divider hidden />
    <Card.Group centered>
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
    </Card.Group>
  
  </div>
);}

// == Export
export default StudentDashboard;
