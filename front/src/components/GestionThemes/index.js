import React from 'react';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)



// == Import
import '../../styleScss/admin/themeCard.scss';
import logo from "src/assets/logos/Logo de O\'coaching - white and red svg v2.svg";
import ThemeCard from 'src/components/GestionThemes/ThemeCard';
//== Import from Semantic UI
import { Header, Divider, Image, Card } from 'semantic-ui-react'


const GestionThemes = () => {
  

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
      <Card.Group>
      <ThemeCard />
      <ThemeCard />
      <ThemeCard />
      <ThemeCard />
      <ThemeCard />
      <ThemeCard />
      </Card.Group>


    </div>
  );}
  
  // == Export
  export default GestionThemes;
