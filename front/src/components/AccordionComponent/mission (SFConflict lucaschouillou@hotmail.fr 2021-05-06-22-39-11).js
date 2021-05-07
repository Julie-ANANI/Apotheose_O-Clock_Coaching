import React, {useState} from 'react';
import { Accordion, Checkbox, Segment } from 'semantic-ui-react';
import './style.css';


const Mission = ({id, title, advice}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index

    setActiveIndex(newIndex);
  }
  return (
    <div className="oneMission">
          <Accordion.Title
            active={activeIndex === 0}
            index={id}
            onClick={handleClick}
          >
            <Checkbox />
            {title}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
          <Segment>{advice}</Segment>
          </Accordion.Content>
    </div>
  )
}

export default Mission
 