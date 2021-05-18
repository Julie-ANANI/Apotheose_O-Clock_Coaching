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
import { Route, Switch, useParams, useHistory } from 'react-router-dom';

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
import GestionThemes from './pages/GestionThemes';
import SearchAdmin from './pages/SearchAdmin';
import LoginPage from './pages/LoginPage';
// import AccueilAdmin from './pages/AccueilAdmin';


// A mettre dans le .env et utiliser process.env.base_url


// console.log(navlinks);

// == Composant
const App = ({base_url}) => { 

  const history = useHistory();

  // GENERAL POUR LINSTANT
  const [activeRole, setActiveRole] = useState('');
  const [userId, setUserId] = useState(0);
  const [user, setUser] = useState(null);

  
  // PARCOURS COACHING
  const [themes, setThemes] = useState([]);
  const [searchedThemes, setSearchedThemes] = useState(themes);
  const [generalScore, setGeneralScore] = useState(0);

  const [refresh, setRefresh] = useState(false);
  // THEME PAGE
  const [missionByTheme, setMissionByTheme] = useState([]);
  const [missionByThemeUser, setMissionByThemeUser] = useState([]);
  const [theme, setTheme] = useState({});
  
  const [allMissions, setAllMissions] = useState([]);
  const [userMissionsCompleted, setUserMissionsCompleted] = useState([]);
  const [userInteraction, setUserInteraction] = useState(0);

  // SEARCH BAR
  const [searchedText, setSearchedText] = useState('');

  // MENU
  const [activeItem, setActiveItem] = useState('Accueil');
  


   


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
        // return(response.data)
      }).catch((err => {
        console.log(err)
        console.log("erreur loadthemes dans app")
      }))
  };



  const loadUserMissions = () => {
    // console.log('Il faut charger les missions déjà effectuées par le user');
    // Dans un premier temps on vérifie que le user loggué est bien un étudiant
    if (activeRole === 'student') {
      const url = `${base_url}/missions/users/${userId}`

      axios({
        url: url,
        method: 'get',
      })
      .then((response) => {
        setUserMissionsCompleted("loadUserMissions : ", response.data)
      // })
      // .then(()=>{
      //   console.log('userMissionsCompleted',userMissionsCompleted);
      //   console.log('userMissionsCompleted.length',userMissionsCompleted.length);
      //   console.log('allMissions.length',allMissions.length);
      //   // console.log('generalScore',generalScore);
      }).catch((err => {
        console.log(err)
        console.log("erreur loadUserMissions dans App")
      }))
    } 
  };

  const loadAllMissions = () => {
    // console.log('Il faut charger toutes les missions qui existent en BDD');
    // Dans un premier temps on vérifie que le user loggué est bien un étudiant
    //if (activeRole === 'student') {
      axios.get(`${base_url}/missions`)
      .then((response) => {
        console.log('allMissions=',response.data);
        setAllMissions(response.data)
      }).catch((err => {
        console.log(err)
        console.log("erreur loadallMissions dans App")
      }))
  //}
}




  const filteredNavlinks = getMenuRoutes(activeRole);

  useEffect(() => {
    console.log('on est dans le useEffect de app et on charge les thèmes et les missions');
    loadThemes();
    loadAllMissions();

    // loadUserMissions();
  }, [refresh]);

  useEffect(()=> {
    console.log('on est dans le useEffect de app et on charge les missions de l\'utilisateur');
    loadUserMissions();
  },[allMissions,userInteraction]);

 
 
  return(
    <div className="app">
      




      {/* <Route path='/someprivatepath' render={routeProps => {

if (!this.props.isLoggedIn) {
   this.props.redirectToLogin()
   return null
 }
 return <MyComponent {...routeProps} anotherProp={somevalue} />

} /> */}







      <Switch>

        <Route path='/' exact >
        <Menu 
        navlinks={filteredNavlinks}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        searchedText={searchedText}
        setSearchedText={setSearchedText}
        history={history}
        themes={themes}
        searchedThemes={searchedThemes}
        setSearchedThemes={setSearchedThemes}
        activeRole={activeRole}
      />
          <Header titre={titre.studentAccueil.description} />
          <Accueil />
        </Route>

        <Route path='/login' >
        <Header titre={titre.studentAccueil.description} />
          <LoginPage setActiveRole={setActiveRole} setUserId={setUserId} />
        </Route>

        <Route path='/accueil'>
        <Menu 
        navlinks={filteredNavlinks}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        searchedText={searchedText}
        setSearchedText={setSearchedText}
        history={history}
        themes={themes}
        searchedThemes={searchedThemes}
        setSearchedThemes={setSearchedThemes}
        activeRole={activeRole}
      />
          <Header titre={titre.studentAccueil.description} />
          <Accueil />
        </Route>

        <Route path='/accueiladmin'>
        <Menu 
        navlinks={filteredNavlinks}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        searchedText={searchedText}
        setSearchedText={setSearchedText}
        history={history}
        themes={themes}
        searchedThemes={searchedThemes}
        setSearchedThemes={setSearchedThemes}
        activeRole={activeRole}
      />
          <Header titre={titre.adminAccueil.description} />
          <Accueil />
        </Route>

        <Route path='/parcours-coaching'>
        <Menu 
        navlinks={filteredNavlinks}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        searchedText={searchedText}
        setSearchedText={setSearchedText}
        history={history}
        themes={themes}
        searchedThemes={searchedThemes}
        setSearchedThemes={setSearchedThemes}
        activeRole={activeRole}
      />
          <Header titre={titre.parcoursCoaching.description}  />
          <ParcoursCoaching 
            themes={searchedThemes} 
            generalScore={generalScore}
            userMissionsCompleted={userMissionsCompleted}
            allMissions={allMissions}
            // computeGeneralScore={computeGeneralScore}
            setGeneralScore={setGeneralScore}  
            userInteraction={userInteraction}
            base_url={base_url}
            userId={userId}
            searchedText={searchedText}
            base_url={base_url}
          />  
        </Route> 
          

        <Route path= {`/theme/:idTheme`}>
        <Menu 
        navlinks={filteredNavlinks}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        searchedText={searchedText}
        setSearchedText={setSearchedText}
        history={history}
        themes={themes}
        searchedThemes={searchedThemes}
        setSearchedThemes={setSearchedThemes}
        activeRole={activeRole}
      />
          <Header titre={titre.studentMissions.description} />
          <ThemePage 
            themes={themes}
            base_url={base_url}
            missionByTheme={missionByTheme}
            setMissionByTheme={setMissionByTheme}
            missionByThemeUser={missionByThemeUser}
            setMissionByThemeUser={setMissionByThemeUser}
            theme={theme}
            setTheme={setTheme}
            userInteraction={userInteraction}
            setUserInteraction={setUserInteraction}
            allMissions={allMissions} 
            userMissionsCompleted={userMissionsCompleted} 
            userId={userId}
            activeRole={activeRole} /> 
        </Route>

        <Route path= {`/ajouter-administrateur`}>
        <Menu 
        navlinks={filteredNavlinks}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        searchedText={searchedText}
        setSearchedText={setSearchedText}
        history={history}
        themes={themes}
        searchedThemes={searchedThemes}
        setSearchedThemes={setSearchedThemes}
        activeRole={activeRole}
      />
          <Header titre={titre.addAdmin.description} />
          <AddAdmin />
        </Route>

        <Route path= {`/gestion-themes`}>
        <Menu 
        navlinks={filteredNavlinks}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        searchedText={searchedText}
        setSearchedText={setSearchedText}
        history={history}
        themes={themes}
        searchedThemes={searchedThemes}
        setSearchedThemes={setSearchedThemes}
        activeRole={activeRole}
      />
          <Header titre={titre.gestionThemes.description} />
          <GestionThemes 
            themes={themes} 
            refresh={refresh} 
            setRefresh={setRefresh}
            base_url={base_url}
          />
        </Route>

        <Route path= {`/search-profil`}>
        <Menu 
        navlinks={filteredNavlinks}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        searchedText={searchedText}
        setSearchedText={setSearchedText}
        history={history}
        themes={themes}
        searchedThemes={searchedThemes}
        setSearchedThemes={setSearchedThemes}
        activeRole={activeRole}
      />
          <Header titre={titre.gestionThemes.description} />
          <SearchAdmin />
        </Route>
      </Switch>

    </div>
  )
}

// == Export
export default App;
