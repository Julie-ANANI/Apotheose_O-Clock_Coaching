// == Import npm
import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)
import axios from 'axios';


// == Import
import './styles.css';
import 'semantic-ui-css/semantic.min.css';

// Import from Semantic UI
 
// import Header from 'src/components/Header';
import StudentDashboard from 'src/components/StudentDashboard';
import  Header from 'src/components/Header';

// == Composant
const App = () => { 

  return(
    <div className="app">
      <Header></Header>
      <StudentDashboard></StudentDashboard>
    </div>
  )
}

// == Export
export default App;
