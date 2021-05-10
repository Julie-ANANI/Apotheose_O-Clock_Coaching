import React, {useState} from 'react';
import { Accordion, Checkbox, Segment } from 'semantic-ui-react';
import '../../styles/AccordionComponent.css';


const Mission = ({id, title, advice}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const index = id;

  const handleClick = (e, titleProps) => {
    for(const titleProp in titleProps){
      console.log(titleProp)
    }
    const { index } = titleProps
    const newIndex = activeIndex === index ? 0 : index

    setActiveIndex(newIndex);
    console.log(index)
  };


  return (
    <div className="oneMission">
          <Accordion.Title
            active={activeIndex === 0}
            index={index}
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
 