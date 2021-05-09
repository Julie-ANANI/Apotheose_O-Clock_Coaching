import React from 'react';


import '../../styles/Mission.css';

//== Import from Semantic UI

import { Card, Accordion, Icon } from 'semantic-ui-react'


// == Composant
const Mission = ({
  id,
  title,
}) => {

return(
  <Card fluid className='mission-card'>

  <Card.Content className='mission-card-header' >
    Ma mission
  </Card.Content>

  <Card.Content>

    <Accordion>
      <Accordion.Title
        className='button-accordion'
        // active={activeIndex === 0}
        index={0}
        // onClick={this.handleClick}
      >
      <Icon name='dropdown' />
       Astuces
      </Accordion.Title>
      <Accordion.Content 
        // active={activeIndex === 0}
      >
        <p>
          A dog is a type of domesticated animal. Known for its loyalty and
          faithfulness, it can be found as a welcome guest in many households
          across the world.
        </p>
      </Accordion.Content>
    </Accordion>

  </Card.Content>

</Card>
);}

// == Export
export default Mission;
