// == Import npm
import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)
import axios from 'axios';

// == Import
import './styles.css';

import Header from 'src/components/Header';

// == Composant
const App = () => { 


//   // envoyer une requête à l'API
//   axios.get('http://localhost:3000/v1/madou')
//   .then((response) => {
//     // exécuté quand la réponse arrive, si la réponse est un succès

//     // on stocke dans le state (dans la case pour les articles) les articles récupérés
//     setTitle(response.data);
//   })
//   .catch((error) => {
//     // exécuté quand la réponse arrive, si la réponse est un échec
//     console.log(error);

//     // TODO il faudrait afficher l'information à l'utilisateur
//   })
  


  // useEffect(() => {
  //   loadTitle();
  // }, []);


return(
  <div className="app">
    <Header >

    </Header>
  </div>
)}

// == Export
export default App;
