import React from 'react'
import { Accordion } from 'semantic-ui-react'
import '../../styles/AccordionComponent.css';
import Mission from './mission';

const AccordionComponent = ({missions, base_url}) => (

  <Accordion className="mission-accordion">
    {missions.map((mission) => (
      <Mission
        key={mission.id}
        {...mission}
        base_url={base_url}
      />
    ))}
  </Accordion>
);


export default AccordionComponent;
