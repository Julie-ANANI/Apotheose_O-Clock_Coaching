import React from 'react';
import { Image, Divider } from 'semantic-ui-react';
import './style.css';
import logo from 'src/assets/logos/Logo de O_coaching - white and red svg.svg';
import MenuHeader from 'src/components/MenuHeader';

const Header = ({navlinks}) => (
  <div className="header-website">
    <MenuHeader navlinks={navlinks} />
  </div>
)

export default Header
 