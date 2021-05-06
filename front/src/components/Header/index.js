import React from 'react';
import { Image, Divider } from 'semantic-ui-react';
import './style.css';

import MenuHeader from 'src/components/MenuHeader';

const Header = () => (
  <div className="header-website">
    {/* <Image src={logo} size='medium' centered /> */}
    {/* <Divider /> */}
    <MenuHeader />
  </div>
)

export default Header
 