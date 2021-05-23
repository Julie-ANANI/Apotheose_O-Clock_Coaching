import React, {useState, useEffect} from 'react';
import { Card, Icon, Accordion, Progress } from 'semantic-ui-react';
import 'src/styles/GestionThemes.css';
import axios from 'axios';

const MissionScore = ({
  id, 
  title,
  base_url,
  userId
  }) => {

  const [isChecked, setIschecked] = useState(false);
  

  const checkIfDone = () => { 
    axios.get(`${base_url}/v1/api/missions/${id}/users/${userId}`, { withCredentials: true })
      .then((response)=> {
        // console.log(response.data);
        setIschecked(true);
      })
      .catch((error)=> {
        console.log(error);
        setIschecked(false);
  })}
  
  useEffect(() => {
    checkIfDone();
  }, []);

  if (isChecked) {
    return (
      <div  className= 'mission-container-overlined'>
        <p >
            {title}
        </p>
      </div>
    ) 
  } else {
    return(
      <div  className= 'mission-container'>
        <p >
            {title}
        </p>
      </div>
    )
  }
   
}

export default MissionScore;
