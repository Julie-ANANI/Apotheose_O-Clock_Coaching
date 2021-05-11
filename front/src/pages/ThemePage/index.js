import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import {  Divider, Card } from 'semantic-ui-react';
import 'src/styles/ThemePage.css';
import ThemeProgressBar from 'src/components/ThemeProgressBar';
import AccordionComponent from 'src/components/AccordionComponent';
import axios from 'axios'
import Mission from 'src/components/Mission';

const ThemePage = ({ themes }) => {
  
  const [missions, setMissions] = useState([]);
  
  const { idTheme } = useParams();
  const theme = themes.find((theme) => theme.id == idTheme);

  const loadMissions = () => {
    console.log(`http://localhost:3000/v1/api/themes/${idTheme}/missions`)
    axios.get(`http://localhost:3000/v1/api/themes/${idTheme}/missions`)
      .then((response) => {
        // console.log(response.data);
        setMissions(response.data);
      })
      .catch((error) => {
        // exécuté quand la réponse arrive, si la réponse est un échec
        // console.log(error);

        // TODO il faudrait afficher l'information à l'utilisateur
      })

  };

  useEffect(() => {
    loadMissions();
  },[]);

  

  console.log(missions);

  return (
    <div className="missions">
      <ThemeProgressBar {...theme} />
      <Divider />
      
      <Card.Group 
        className='mission-card-container'
      >
        {missions.map((mission) => (

          <Mission 
          key={mission.id}
          {...mission} 
          />
        ))}
      </Card.Group>
     
      
    </div>
  )
}

export default ThemePage
