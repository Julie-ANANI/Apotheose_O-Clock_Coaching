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
import AccueilAdmin from 'src/pages/AccueilAdmin';
import navlinks from 'src/data/navlinks.js'
import titre from 'src/data/titreHeader.js'
import GestionThemes from './pages/GestionThemes';
import SearchAdmin from './pages/SearchAdmin';
import LoginPage from './pages/LoginPage';

// import AccueilAdmin from './pages/AccueilAdmin';
import students from 'src/data/users.js';
import ScorePage from 'src/pages/ScorePage';
import heros from 'src/data/equipe.js';

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
  

  // RESULTS
  const [studentsList,setStudentsList] = useState(students);
  const [searchedStudents, setSearchedStudents] = useState(studentsList);

  // PAGE SCORE
  const [student, setStudent] = useState({})
  const [studentScore,setStudentScore] = useState(0);

   


  const getMenuRoutes = (role) => {
    const filteredNavlinks = navlinks.filter(navlink => navlink.role === role)
    return filteredNavlinks
  };
  // Import des Thèmes, des missions et des missions cochées par l'utilisateur
  // Bien pensé à gérer l'erreur en renvoyant une 404. voir modèle Oclock

  const loadThemes = () => {
    // console.log('Il faut charger les thèmes');
    console.log('LOAD ALL THEMES');

    axios.get(`${base_url}/v1/api/themes`)
      .then((response)=> {
        console.log('response :',response);
        console.log('on récupère les thèmes', response.data);
        setThemes(response.data);
        // return(response.data)
      }).catch((err => {
        console.log(err)
        console.log("erreur loadthemes dans app")
      }))

  };

  const loadUserMissions = () => {
    console.log('Il faut charger les missions déjà effectuées par le user');
    // Dans un premier temps on vérifie que le user loggué est bien un étudiant
    if (activeRole === 'student') {
      const url = `${base_url}/v1/api/missions/users/${userId}`

      axios({
        url: url,
        withCredentials: true,
        method: 'get',
      })
      .then((response) => {
        setUserMissionsCompleted(response.data)
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
    console.log('LOAD ALL MISSIONS');
      axios.get(`${base_url}/v1/api/missions`)
      .then((response) => {
        console.log('allMissions=',response.data);
        setAllMissions(response.data)
      }).catch((err => {
        console.log(err)
        console.log("erreur loadallMissions dans App")
      }))
  }

  const getSpeName =(student) => {
    const promoName = student.cohortsInfo.find((cohort) => cohort.spe_cohort === true).nickname.split(' ')[1];
    // .nickname.split('')[1];
    console.log(`promoName de ${student.username} `, promoName);
    if (promoName != undefined) {
      return promoName;
    } else {
      return '';
    }
  }




  const filteredNavlinks = getMenuRoutes(activeRole);

  useEffect(() => {
    console.log('on est dans le useEffect de app et on charge les thèmes et les missions');
    loadThemes();
    loadAllMissions();
    // setStudentsList(students);
    // loadUserMissions();
  }, [refresh,activeRole]);

  useEffect(()=> {
    console.log('on est dans le useEffect de app et on charge les missions de l\'utilisateur');
    loadUserMissions();
  },[activeRole, userInteraction, userId]);

 
 
  return(
    <div className="app">
      
      <Switch>

        <Route path='/' exact>
        <Header titre={titre.loginPage.description} />
          <LoginPage
            setActiveRole={setActiveRole}
            setUserId={setUserId}
            base_url={base_url}
            setActiveItem={setActiveItem}
            />
        </Route>

        <Route path='/login' >
        <Header titre={titre.loginPage.description} />
            <LoginPage
            setActiveRole={setActiveRole}
            setUserId={setUserId}
            base_url={base_url}
            setActiveItem={setActiveItem}
            />
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
            studentsList={studentsList}
            searchedThemes={searchedThemes}
            searchedStudents={searchedStudents}
            setSearchedThemes={setSearchedThemes}
            setSearchedStudents={setSearchedStudents}
            activeRole={activeRole}
            getSpeName={getSpeName}
            setActiveRole={setActiveRole}
            setUserId={setUserId}
            base_url={base_url}
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
            studentsList={studentsList}
            searchedThemes={searchedThemes}
            searchedStudents={searchedStudents}
            setSearchedThemes={setSearchedThemes}
            setSearchedStudents={setSearchedStudents}
            activeRole={activeRole}
            getSpeName={getSpeName}
            setActiveRole={setActiveRole}
            setUserId={setUserId}
            base_url={base_url}
          />
          <Header titre={titre.adminAccueil.description} />
          <AccueilAdmin heros={heros}/>
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
            studentsList={studentsList}
            searchedThemes={searchedThemes}
            searchedStudents={searchedStudents}
            setSearchedThemes={setSearchedThemes}
            setSearchedStudents={setSearchedStudents}
            activeRole={activeRole}
            getSpeName={getSpeName}
            setActiveRole={setActiveRole}
            setUserId={setUserId}
            base_url={base_url}
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
            studentsList={studentsList}
            searchedThemes={searchedThemes}
            searchedStudents={searchedStudents}
            setSearchedThemes={setSearchedThemes}
            setSearchedStudents={setSearchedStudents}
            activeRole={activeRole}
            getSpeName={getSpeName}
            setActiveRole={setActiveRole}
            setUserId={setUserId}
            base_url={base_url}
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
            studentsList={studentsList}
            searchedThemes={searchedThemes}
            searchedStudents={searchedStudents}
            setSearchedThemes={setSearchedThemes}
            setSearchedStudents={setSearchedStudents}
            activeRole={activeRole}
            getSpeName={getSpeName}
            setActiveRole={setActiveRole}
            setUserId={setUserId}
            base_url={base_url}
          />
          <Header titre={titre.addAdmin.description} />
          <AddAdmin
            base_url={base_url}
          />
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
            studentsList={studentsList}
            searchedThemes={searchedThemes}
            searchedStudents={searchedStudents}
            setSearchedThemes={setSearchedThemes}
            setSearchedStudents={setSearchedStudents}
            activeRole={activeRole}
            getSpeName={getSpeName}
            setActiveRole={setActiveRole}
            setUserId={setUserId}
            base_url={base_url}
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
            studentsList={studentsList}
            searchedThemes={searchedThemes}
            searchedStudents={searchedStudents}
            setSearchedThemes={setSearchedThemes}
            setSearchedStudents={setSearchedStudents}
            activeRole={activeRole}
            getSpeName={getSpeName}
            setActiveRole={setActiveRole}
            setUserId={setUserId}
            base_url={base_url}
          />
          <Header titre={titre.gestionThemes.description} />
          <SearchAdmin />
        </Route>

        <Route path= {`/results`} exact>
        <Menu 
            navlinks={filteredNavlinks}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            searchedText={searchedText}
            setSearchedText={setSearchedText}
            history={history}
            themes={themes}
            studentsList={studentsList}
            searchedThemes={searchedThemes}
            searchedStudents={searchedStudents}
            setSearchedThemes={setSearchedThemes}
            setSearchedStudents={setSearchedStudents}
            activeRole={activeRole}
            getSpeName={getSpeName}
            setActiveRole={setActiveRole}
            setUserId={setUserId}
            base_url={base_url}
          />
          <Header titre={titre.searchAdmin.description} />
          <SearchAdmin
            searchedStudents={searchedStudents}
            getSpeName={getSpeName}
            searchedText={searchedText}
            base_url={base_url}
          />

        </Route>

        <Route path= {`/results/:studentId/score`}>
        <Menu 
            navlinks={filteredNavlinks}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            searchedText={searchedText}
            setSearchedText={setSearchedText}
            history={history}
            themes={themes}
            studentsList={studentsList}
            searchedThemes={searchedThemes}
            searchedStudents={searchedStudents}
            setSearchedThemes={setSearchedThemes}
            setSearchedStudents={setSearchedStudents}
            activeRole={activeRole}
            getSpeName={getSpeName}
            setActiveRole={setActiveRole}
            setUserId={setUserId}
            base_url={base_url}
          />
          <Header titre={titre.scorePage.description} />
          <ScorePage
            themes={themes}
            student={student}
            setStudent={setStudent}
            studentsList={studentsList}
            base_url={base_url}
            studentScore={studentScore}
            setStudentScore={setStudentScore}
          />
        </Route>


      </Switch>

    </div>
  )
}


// == Export
export default App;
