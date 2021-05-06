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

// const getThemes = () => {
//   axios.get(DATABASE_URL)
//     .then((response)=> {
//       console.log(response);
//     })
// };

var base_url = 'http://localhost:3000/v1/api'

getThemes();

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
