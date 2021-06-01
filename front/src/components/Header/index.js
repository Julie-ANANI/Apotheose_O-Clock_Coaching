import React from 'react';

import '../../styles/Header.css';
import logo from "src/assets/logos/Logo de O'coaching - white and red svg v2.svg";


//== Import from Semantic UI
import { Header as HeaderUI, Divider, Image } from 'semantic-ui-react'


const Header = ({titre}) => (
  <div>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Image src={logo} size='medium' centered className='logo-inpage'/>
      <HeaderUI className='header-accueil' as='h1' textAlign='center'>{titre}</HeaderUI>
      <Divider hidden />
      <Divider hidden />
      
  </div>
)

export default Header
 