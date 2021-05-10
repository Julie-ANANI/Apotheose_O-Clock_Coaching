// == Import npm
import React, { useState, useEffect } from 'react';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)
import axios from 'axios';

// - composant Route : permet de faire un affichage conditionnel en fonction de l'URL de
// la barre d'adresse. Comparaison "qui commence par" => si on veut une comparaison
// exacte, il faut ajouter la prop "exact" sur la Route
// - composant Switch : si on englobe nos Route dans un Switch, alors seule la
// première Route qui correspond à l'URL est utilisée => permet d'avoir une Route
// par défaut (sans path) pour la page d'erreur 404
// - composant Redirect : redirige une URL vers une autre (par exemple quand une
// page a été déplacée)
import { Route, Switch} from 'react-router-dom';


// == Import
import './styles/App.css';
import 'semantic-ui-css/semantic.min.css';

import Menu from 'src/components/Menu';
import Header from 'src/components/Header'
import Accueil from 'src/pages/Accueil';
import ParcoursCoaching from 'src/pages/ParcoursCoaching';
import ThemePage from 'src/pages/ThemePage';

import navlinks from 'src/data/navlinks.js'


// A mettre dans le .env et utiliser process.env.base_url
var base_url = 'http://localhost:3000/v1/api'

console.log(navlinks);

// == Composant
const App = () => { 

  const [themes, setThemes] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState({});
  
  const loadThemes = () => {
    console.log('Il faut charger les thèmes');

    axios.get(`${base_url}/themes`)
      .then((response)=> {
        console.log(response.data);
        setThemes(response.data)
      })
  };

  useEffect(() => {
    loadThemes();
  }, []);
 
  return(
    <div className="app">
      <Menu navlinks={navlinks} />
      <Header />
      <Switch>

        <Route path='/' exact component={Accueil}/>

        <Route path='/accueil' component={Accueil}/>

        <Route path='/parcours-coaching'>
          <ParcoursCoaching themes={themes} setSelectedTheme={setSelectedTheme}/>  
        </Route> 
          
        <Route path= {`/theme/:id`}>
          <ThemePage selectedTheme={selectedTheme} /> 
        </Route>

      </Switch>

    </div>
  )
}

// == Export
export default App;
