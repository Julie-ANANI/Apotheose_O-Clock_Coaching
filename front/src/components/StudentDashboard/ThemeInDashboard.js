import React from 'react';


import './style.css';

//== Import from Semantic UI

import { Card, Progress } from 'semantic-ui-react'


// == Composant
const ThemeInDashboard = () => {

return(
      <Card className='theme-card'>
        <Card.Content className='theme-card-header' header='Nom du thème' />
        {/* <Card.Content description='Une description du thème' /> */}
        <Card.Content extra>
          <Progress percent={60} indicating />
        </Card.Content>
      </Card>
);}

// == Export
export default ThemeInDashboard;
