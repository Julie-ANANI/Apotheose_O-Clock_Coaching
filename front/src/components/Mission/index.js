import React,  { useState } from 'react';


import '../../styles/Mission.css';

//== Import from Semantic UI

import { Card, Accordion, Icon, Checkbox } from 'semantic-ui-react'


// == Composant
const Mission = ({
  id,
  title,
  advice
}) => {

  const [activeIndex, setActiveIndex] = useState(-1);
  
  const handleClick = (e, titleProps) => {
    console.log('on a cliqué', titleProps);
    const { index } = titleProps;
    console.log(index);
    console.log(activeIndex);
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  }

return(
  <Card fluid className='mission-card'>

  <Card.Content className='mission-card-header' >
    <div className="checkbox-container">
      <Checkbox label={title} toggle></Checkbox>
    </div>
  </Card.Content>

  <Card.Content>

    <Accordion>
      <Accordion.Title
        className='button-accordion'
        active={activeIndex === 0}
        index={0}
        onClick={handleClick}
      >
      <Icon name='dropdown' />
       Astuces
      </Accordion.Title>
      <Accordion.Content 
        active={activeIndex === 0}
        className='astuce-container'
      >
      <p className='astuce-text'>{advice}</p>
      </Accordion.Content>
    </Accordion>

  </Card.Content>

</Card>
);}

// == Export
export default Mission;
