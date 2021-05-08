import React from 'react';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)

import { Button } from 'semantic-ui-react';


// == Import
import '../../styleScss/admin/accueilAdmin.scss';
import logo from "src/assets/logos/Logo de O\'coaching - white and red svg v2.svg";

//== Import from Semantic UI
import { Header, Divider, Image } from 'semantic-ui-react'


const AccueilAdmin = () => {
  

  return(
    <div className="accueilAdmin">
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Image src={logo} size='medium' centered />
      <Header className='header-accueil' as='h1' textAlign='center'> Salut!!! Bon Courage pour la journée on Garde la peche! </Header>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <div className="button-container">
      <Button fluid green size='huge' color='teal'>Gestion des thèmes</Button>
      <Button fluid green size='huge' color='teal'>Ajouter un administrateur</Button>
      </div>


    </div>
  );}
  
  // == Export
  export default AccueilAdmin;
