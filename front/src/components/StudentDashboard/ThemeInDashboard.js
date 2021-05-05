import React from 'react';

//== Import from Semantic UI

import { Card, Progress } from 'semantic-ui-react'


// == Composant
const ThemeInDashboard = () => {

return(
      <Card>
        <Card.Content header='Nom du thème' />
        <Card.Content description='Une description du thème' />
        <Card.Content extra>
          <Progress percent={60} indicating />
        </Card.Content>
      </Card>
);}

// == Export
export default ThemeInDashboard;
