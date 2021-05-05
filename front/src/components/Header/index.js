import React from 'react';
import { Image, Divider } from 'semantic-ui-react';
import './style.css';
import logo from '/var/www/html/spéReact/challenges/Apotheose/my-app/src/assets/logo.png';
import MenuHeader from 'src/components/MenuHeader';

const Header = () => (
  <div className="header">
    <Image src={logo} size='medium' centered />
    <Divider />
    <MenuHeader />
  </div>
)

export default Header
 