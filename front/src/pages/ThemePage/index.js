import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import {  Divider, Card } from 'semantic-ui-react';
import 'src/styles/ThemePage.css';
import ThemeProgressBar from 'src/components/ThemeProgressBar';
// import AccordionComponent from 'src/components/AccordionComponent';
// import axios from 'axios'
import Mission from 'src/components/Mission';

const ThemePage = ({ themes, allMissions, userMissionsCompleted }) => {
  

  

  ;
  // const [missions, setMissions] = useState([]);
  
  const { idTheme } = useParams();
  // console.log(idTheme);
  const theme = themes.find((theme) => theme.id == idTheme);
  // console.log(theme);
  // console.log('Toutes les missions', userMissionsCompleted);

  const filterMissionsByTheme = (themeId) => {
    const  result = allMissions.filter(mission => mission.theme_id == themeId);
    return result;
  }

  // const checkUserMission = () => {
  //   for (const mission of userMissionsCompleted) {
  //     const input = document.getElementById(`mission-${mission.mission_id}`);
  //     console.log(input);
  //     if (input) {
  //       input.closest('.toggle').classList.add('checked');
  //     } 
  //   }
  // }

  const missions = filterMissionsByTheme(idTheme);
  console.log('missions complétes', userMissionsCompleted);
  console.log(missions);


  // useEffect(()=> {
  //   checkUserMission()
  // })

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
          name={mission.id}
          {...mission}
          userMissionsCompleted={userMissionsCompleted} 
          />
        ))}
      </Card.Group>
     
      
    </div>
  )
}

export default ThemePage
