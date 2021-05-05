// == Import npm
import React, { useState, useEffect } from 'react';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)
import axios from 'axios';

// == Import
import './styles.css';

// Import from Semantic UI
 
// import Header from 'src/components/Header';
import ThemeDashboard from 'src/components/ThemeDashboard';

// == Composant
const App = () => { 

return(
  <div className="app">
      <ThemeDashboard></ThemeDashboard>
  </div>
);}

// == Export
export default App;
