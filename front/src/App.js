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

// import AccueilAdmin from './pages/AccueilAdmin';


// A mettre dans le .env et utiliser process.env.base_url
var base_url = 'http://localhost:3000/v1/api'

console.log(navlinks);

// == Composant
const App = () => { 

  const [themes, setThemes] = useState([]);
  // const [selectedTheme, setSelectedTheme] = useState({});
  const [activeRole, setActiveRole] = useState('student');
  const [userId, setUserId] = useState(3);
  const [userMissionsCompleted, setUserMissionsCompleted] = useState([]);
  const [allMissions, setAllMissions] = useState([]);

  
  const getMenuRoutes = (role) => {
    const filteredNavlinks = navlinks.filter(navlink => navlink.role === role)
    return filteredNavlinks
  }
  // Import des Thèmes, des missions et des missions cochées par l'utilisateur
  // Bien pensé à gérer l'erreur en renvoyant une 404. voir modèle Oclock

  const loadThemes = () => {
    console.log('Il faut charger les thèmes');

    axios.get(`${base_url}/themes`)
      .then((response)=> {
        setThemes(response.data)
      })
  };

  const loadUserMissions = () => {
    console.log('Il faut charger les missions déjà effectuées par le user');
    // Dans un premier temps on vérifie que le user loggué est bien un étudiant
    if (activeRole === 'student') {
      axios.get(`${base_url}/missions/users/${userId}`)
      .then((response) => {
        setUserMissionsCompleted(response.data)
      })
    } 
  };

  const loadAllMissions = () => {
    console.log('Il faut charger toutes les missions qui existent en BDD');
    // Dans un premier temps on vérifie que le user loggué est bien un étudiant
    if (activeRole === 'student') {
      axios.get(`${base_url}/missions`)
      .then((response) => {
        setAllMissions(response.data)
        console.log(response.data);
      })
  }}


  const filteredNavlinks = getMenuRoutes(activeRole);

  useEffect(() => {
    loadThemes();
    loadUserMissions();
    loadAllMissions();
  }, []);
 
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
          <Header titre={titre.parcoursCoaching.description}  />
          <ParcoursCoaching 
            themes={themes} 
            userMissionsCompleted={userMissionsCompleted.length}
            allMissions={allMissions.length}
          />  
        </Route> 
          

        <Route path= {`/theme/:idTheme`}>
          <Header titre={titre.studentMissions.description} />
          <ThemePage 
            themes={themes} 
            allMissions={allMissions} 
            userMissionsCompleted={userMissionsCompleted} 
            userId={userId} /> 
        </Route>

        <Route path= {`/ajouter-administrateur`}>
          <Header titre={titre.addAdmin.description} />
          <AddAdmin />
        </Route>

      </Switch>

    </div>
  )
}

// == Export
export default App;
