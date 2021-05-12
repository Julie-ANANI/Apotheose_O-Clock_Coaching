import React from 'react';


import '../../styles/ParcoursCoaching.css';

//== Import from Semantic UI

import { Card, Progress } from 'semantic-ui-react'


// == Composant
const ThemeInParcoursCoachingPage = ({
  id,
  title,
}) => {

return(
      <Card fluid className='theme-card'>
        <Card.Content className='theme-card-header' header={title} />
        <Card.Content extra>
          <Progress percent={60} indicating progress />
        </Card.Content>
      </Card>
);}

// == Export
export default ThemeInParcoursCoachingPage;
