import React from 'react';

import './styles.css';
import logo from 'src/assets/logos/Logo de O_coaching - white and red svg.svg';
import Menu from 'src/components/Menu';

//== Import from Semantic UI
import { Header as HeaderUI, Divider, Image, Segment } from 'semantic-ui-react'


const Header = () => (
  <div>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Image src={logo} size='medium' centered className='logo-inpage'/>
      <HeaderUI className='header-accueil' as='h1' textAlign='center'> Bienvenue sur ton espace personalisé de coaching </HeaderUI>
      <Divider hidden />
      <Divider hidden />
      
  </div>
)

export default Header
 