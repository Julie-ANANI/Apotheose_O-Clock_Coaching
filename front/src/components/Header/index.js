import React from 'react';
import { Image, Divider } from 'semantic-ui-react';
import './style.css';
import logo from 'src/assets/logos/Logo de O_coaching - white and red svg.svg';
import MenuHeader from 'src/components/MenuHeader';

const Header = () => (
  <div className="header-website">
    {/* <Image src={logo} size='medium' centered /> */}
    {/* <Divider /> */}
    <MenuHeader />
  </div>
)

export default Header
 