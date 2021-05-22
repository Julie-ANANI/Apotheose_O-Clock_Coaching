import React from 'react';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)

import { Button } from 'semantic-ui-react';


// == Import
import '../../styles/accueilAdmin.css';
import logo from "src/assets/logos/Logo de O\'coaching - white and red svg v2.svg";

//== Import from Semantic UI
import { Card, Image } from 'semantic-ui-react'
import img from 'src/assets/image/images/draxLucas.jpg'

const AccueilAdmin = () => {
  

  return(
    <div className="accueilAdmin">
    <Card>
      <Image src={img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>Lucas</Card.Header>
        <Card.Meta>
          <span className='date'>dit : "le bourin</span>
        </Card.Meta>
        <Card.Description>
          il a péter toute la BDD
        </Card.Description>
      </Card.Content>
    </Card>

    </div>
  );}
  
  // == Export
  export default AccueilAdmin;
