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
import SearchProfil from './pages/SearchProfil';
// import AccueilAdmin from './pages/AccueilAdmin';


// A mettre dans le .env et utiliser process.env.base_url


// console.log(navlinks);

// == Composant
const App = ({base_url}) => { 

  const history = useHistory();

  // GENERAL POUR LINSTANT
  const [activeRole, setActiveRole] = useState('admin');
  const [userId, setUserId] = useState(3);

  
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
      })
  }
