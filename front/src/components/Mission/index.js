import React,  { useState, useEffect } from 'react';

import { Redirect } from 'react-router-dom';
import '../../styles/Mission.css';

//== Import from Semantic UI

import { Card, Accordion, Icon, Checkbox } from 'semantic-ui-react'
import axios from 'axios';


// == Composant
const Mission = ({
  id,
  title,
  advice,
  userId,
  userInteraction,
  setUserInteraction
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

  const handleClickOnCB = (e, data) => {
    console.log('on a cliqué sur la checkbox');
    if (data.checked) {
      axios({
        url : 'http://localhost:3000/v1/api/student/interact/',
        method : 'post',
        data : {
          "mission_id": id,
          "user_id": userId
        }})
        .then(res => {
          console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
      
    } else {
      axios({
        url : `http://localhost:3000/v1/api/student/interact/missions/${id}/users/${userId}`,
        method : 'delete'
      })
      .then(res => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
    }
    setUserInteraction(userInteraction+1)

  }

  const checkIfDone = () => { 
    axios.get(`http://localhost:3000/v1/api/missions/${id}/users/${userId}`)
      .then((response)=> {
        console.log(response.data);
        setIschecked(true);
      })
      .catch((error)=> {
        console.log(error);
        setIschecked(false);
      })}

  useEffect(() => {
    checkIfDone();
  }, []);
  


return(
  <Card fluid className='mission-card'>

  <Card.Content className='mission-card-header'>
    <div className="checkbox-container">
      { isChecked == true && <Checkbox 
                                label={title} 
                                id={`missions-${parseInt(id)}`}  
                                defaultChecked={true} 
                                toggle 
                                onClick={handleClickOnCB} 
                              /> }
      { isChecked != true && <Checkbox 
                                label={title} 
                                id={`missions-${parseInt(id)}`}  
                                defaultChecked={false} 
                                toggle 
                                onClick={handleClickOnCB} 
                              /> }
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
