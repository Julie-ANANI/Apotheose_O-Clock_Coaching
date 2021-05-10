import React from 'react';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)

import { Button } from 'semantic-ui-react';


// == Import
import '../../styles/accueilAdmin.css';
import logo from "src/assets/logos/Logo de O\'coaching - white and red svg v2.svg";

//== Import from Semantic UI
import { Header, Divider, Image } from 'semantic-ui-react'


const AccueilAdmin = () => {
  

  return(
    <div className="accueilAdmin">

      <div className="button-container">
      <Button fluid green size='huge' color='teal'>Gestion des thèmes</Button>
      <Button fluid green size='huge' color='teal'>Ajouter un administrateur</Button>
      </div>


    </div>
  );}
  
  // == Export
  export default AccueilAdmin;
