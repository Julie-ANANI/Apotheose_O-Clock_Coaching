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
import { Route, Switch, useParams } from 'react-router-dom';


// == Import
import './styles/App.css';
import 'semantic-ui-css/semantic.min.css';

import Menu from 'src/components/Menu';
import Header from 'src/components/Header'
import Accueil from 'src/pages/Accueil';
import ParcoursCoaching from 'src/pages/ParcoursCoaching';
import ThemePage from 'src/pages/ThemePage';
import AddAdmin from 'src/pages/AddAdmin';

import navlinks from 'src/data/navlinks.js'
import titre from 'src/data/titreHeader.js'
import GestionThemes from './pages/GestionThemes';
import SearchProfil from './pages/SearchProfil';
// import AccueilAdmin from './pages/AccueilAdmin';


// A mettre dans le .env et utiliser process.env.base_url
var base_url = 'http://localhost:3000/v1/api'

console.log(navlinks);

// == Composant
const App = () => { 

  const [themes, setThemes] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState({});
  const [activeRole, setActiveRole] = useState('admin');
  const [refresh, setRefresh] = useState(false);

  
  const getMenuRoutes = (role) => {
    const filteredNavlinks = navlinks.filter(navlink => navlink.role === role)
    return filteredNavlinks
  }

  const loadThemes = () => {
    console.log('Il faut charger les thèmes');

    axios.get(`${base_url}/themes`)
      .then((response)=> {
        console.log(response.data);
        setThemes(response.data)
      })
  };

  const filteredNavlinks = getMenuRoutes(activeRole);

  // useEffect(() => {
  //   loadThemes();
  // }, []);

  useEffect(() => {
    loadThemes();
  }, [refresh]);

  return(
    <div className="app">
      
      <Menu navlinks={filteredNavlinks} />
      
      <Switch>

        <Route path='/' exact >
          <Header titre={titre.studentAccueil.description} />
          <Accueil />
        </Route>

        <Route path='/accueil'>
          <Header titre={titre.studentAccueil.description} />
          <Accueil />
        </Route>

        <Route path='/accueiladmin'>
          <Header titre={titre.adminAccueil.description} />
          <Accueil />
        </Route>

        <Route path='/parcours-coaching'>
          <Header titre={titre.parcoursCoaching.description} />
          <ParcoursCoaching themes={themes} setSelectedTheme={setSelectedTheme}/>  
        </Route> 
          

        <Route path= {`/theme/:idTheme`}>
          <Header titre={titre.studentMissions.description} />
          <ThemePage themes={themes} /> 
        </Route>

        <Route path= {`/ajouter-administrateur`}>
          <Header titre={titre.addAdmin.description} />
          <AddAdmin />
        </Route>

        <Route path= {`/gestion-themes`}>
          <Header titre={titre.gestionThemes.description} />
          <GestionThemes themes={themes} refresh={refresh} setRefresh={setRefresh} />
        </Route>

        <Route path= {`/search-profil`}>
          <Header titre={titre.gestionThemes.description} />
          <SearchProfil />
        </Route>
      </Switch>

    </div>
  )
}

// == Export
export default App;
