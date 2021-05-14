// == Import npm
import React, { useState, useEffect } from 'react';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)
import axios, { post } from 'axios';

// - composant Route : permet de faire un affichage conditionnel en fonction de l'URL de
// la barre d'adresse. Comparaison "qui commence par" => si on veut une comparaison
// exacte, il faut ajouter la prop "exact" sur la Route
// - composant Switch : si on englobe nos Route dans un Switch, alors seule la
// première Route qui correspond à l'URL est utilisée => permet d'avoir une Route
// par défaut (sans path) pour la page d'erreur 404
// - composant Redirect : redirige une URL vers une autre (par exemple quand une
// page a été déplacée)
import { Route, Switch, useParams } from 'react-router-dom';

// require('dotenv').config();

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


// console.log(navlinks);

// == Composant
const App = ({base_url}) => { 

  // GENERAL POUR LINSTANT
  const [activeRole, setActiveRole] = useState('student');
  const [userId, setUserId] = useState(3);

  
  // PARCOURS COACHING
  
  const [themes, setThemes] = useState([]);
  

  // THEME PAGE
  const [missionByTheme, setMissionByTheme] = useState([]);
  const [missionByThemeUser, setMissionByThemeUser] = useState([]);
  const [theme, setTheme] = useState({});

  const [allMissions, setAllMissions] = useState([]);
  const [userMissionsCompleted, setUserMissionsCompleted] = useState([]);
  const [userInteraction, setUserInteraction] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState();




  const getMenuRoutes = (role) => {
    const filteredNavlinks = navlinks.filter(navlink => navlink.role === role)
    return filteredNavlinks
  };
  // Import des Thèmes, des missions et des missions cochées par l'utilisateur
  // Bien pensé à gérer l'erreur en renvoyant une 404. voir modèle Oclock

  const loadThemes = () => {
    // console.log('Il faut charger les thèmes');

    axios.get(`${base_url}/themes`)
      .then((response)=> {
        console.log('on récupère les thèmes', response.data);
        setThemes(response.data);
      })
  };

  const loadUserMissions = () => {
    // console.log('Il faut charger les missions déjà effectuées par le user');
    // Dans un premier temps on vérifie que le user loggué est bien un étudiant
    if (activeRole === 'student') {
      axios.get(`${base_url}/missions/users/${userId}`)
      .then((response) => {
        setUserMissionsCompleted(response.data)
      })
      // .then(()=> {
      //   computeGeneralScore();

      // })
      .then(()=>{
        console.log('userMissionsCompleted.length',userMissionsCompleted.length);
        console.log('allMissions.length',allMissions.length);
        // console.log('generalScore',generalScore);
      })
    } 
  };

  const loadAllMissions = () => {
    // console.log('Il faut charger toutes les missions qui existent en BDD');
    // Dans un premier temps on vérifie que le user loggué est bien un étudiant
    if (activeRole === 'student') {
      axios.get(`${base_url}/missions`)
      .then((response) => {
        setAllMissions(response.data)
        console.log('allMissions=',response.data);
      })
  }}


  const filteredNavlinks = getMenuRoutes(activeRole);

  useEffect(() => {
    console.log('on est dans le useEffect de app et on charge les thèmes et les missions');
    loadThemes();
    loadAllMissions();
    // loadUserMissions();
  }, []);

  useEffect(()=> {
    console.log('on est dans le useEffect de app et on charge les missions de l\'utilisateur');
    loadUserMissions();
  },[allMissions,userInteraction]);
 
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
            // generalScore={generalScore}
            userMissionsCompleted={userMissionsCompleted}
            allMissions={allMissions}
            // computeGeneralScore={computeGeneralScore}
            // setGeneralScore={setGeneralScore}  
          />  
        </Route> 
          

        <Route path= {`/theme/:idTheme`}>
          <Header titre={titre.studentMissions.description} />
          <ThemePage 
            themes={themes}
            selectedTheme={selectedTheme}

            missionByTheme={missionByTheme}
            setMissionByTheme={setMissionByTheme}
            missionByThemeUser={missionByThemeUser}
            setMissionByThemeUser={setMissionByThemeUser}
            theme={theme}
            setTheme={setTheme}

            userInteraction={userInteraction}
            setUserInteraction={setUserInteraction}
            setSelectedTheme={setSelectedTheme}
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
