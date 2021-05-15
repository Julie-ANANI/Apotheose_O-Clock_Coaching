import React from 'react'
import { Accordion } from 'semantic-ui-react'
import '../../styles/AccordionComponent.css';
import Mission from './mission';

const AccordionComponent = ({missions}) => (

  <Accordion className="mission-accordion">
    {missions.map((mission) => (
      <Mission
        key={mission.id}
        {...mission}
      />
    ))}
  </Accordion>
);


export default AccordionComponent;
