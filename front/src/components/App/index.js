// == Import npm
import React, { useState, useEffect } from 'react';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)
import axios from 'axios';


// == Import
import '../../styleScss/coaching/app.scss';
import 'semantic-ui-css/semantic.min.css';

import  Header from 'src/components/Header';
import Accueil from 'src/components/Accueil';
import StudentDashboard from 'src/components/StudentDashboard';

// Import from Semantic UI
 





// A mettre dans le .env et utiliser process.env.base_url
var base_url = 'http://localhost:3000/v1/api'

// getThemes();
// import Header from 'src/components/Header';
import AccueilAdmin from 'src/components/AccueilAdmin';



// == Composant
const App = () => { 

  const [themes, setThemes] = useState([])

  const loadThemes = () => {
    console.log('Il faut charger les thèmes');

    axios.get(`${base_url}/themes`)
      .then((response)=> {
        console.log(response.data);
        setThemes(response.data)
      })
  }

  useEffect(() => {
    loadThemes();
  }, []);

  return(
    <div className="app">
      <Header />

      <AccueilAdmin />


    </div>
  )
}

// == Export
export default App;
