import React from 'react'
import { Accordion } from 'semantic-ui-react'
import '../../styleScss/coaching/accordion.scss';
import Mission from './mission';

const AccordionComponent = ({missions}) => (

  <Accordion>
    {missions.map((mission) => (
      <Mission
        key={mission.id}
        {...mission}
      />
    ))}
  </Accordion>
);


export default AccordionComponent;
