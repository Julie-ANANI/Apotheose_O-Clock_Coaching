import React,  { useState, useEffect } from 'react';


import '../../styles/Mission.css';

//== Import from Semantic UI

import { Card, Accordion, Icon, Checkbox } from 'semantic-ui-react'
import axios from 'axios';


// == Composant
const Mission = ({
  id,
  title,
  advice,
  userMissionsCompleted,
}) => {

  const [activeIndex, setActiveIndex] = useState(-1);
  const [isChecked, setIschecked] = useState(false);
  

  // fonction handleClick de la boite à astuces
  const handleClick = (e, titleProps) => {
    console.log('on a cliqué', titleProps);
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  }

  // const checkIfDone = () => { 
  //   axios.get('')

  const checkIfDone = () => {
    const result = userMissionsCompleted.find(mission => parseInt(mission.mission_id) == parseInt(id));

    if (result) {
      setIschecked(true)
    }
    
  }

  useEffect(() => {
    checkIfDone();
  }, []);
  


return(
  <Card fluid className='mission-card'>

  <Card.Content className='mission-card-header'>
    <div className="checkbox-container">
      { isChecked == true && <Checkbox label={title} id={`missions-${parseInt(id)}`}  defaultChecked={true} toggle></Checkbox> }
      { isChecked != true && <Checkbox label={title} id={`missions-${parseInt(id)}`}  defaultChecked={false} toggle></Checkbox>}
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
        <p className= 'astuce-text'>
          {advice}
        </p>
      </Accordion.Content>
    </Accordion>

  </Card.Content>

</Card>
);}

// == Export
export default Mission;
