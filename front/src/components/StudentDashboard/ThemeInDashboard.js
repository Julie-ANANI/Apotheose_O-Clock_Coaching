import React from 'react';


import '../../styleScss/coaching/studentDashboard.scss';

//== Import from Semantic UI

import { Card, Progress } from 'semantic-ui-react'


// == Composant
const ThemeInDashboard = ({
  id,
  title,
}) => {

return(
      <Card className='theme-card'>
        <Card.Content className='theme-card-header' header={title} />
        {/* <Card.Content description={description} /> */}
        <Card.Content extra>
          <Progress percent={60} indicating />
        </Card.Content>
      </Card>
);}

// == Export
export default ThemeInDashboard;
