import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import {  Divider, Header, Card, Progress } from 'semantic-ui-react';
import 'src/styles/ThemePage.css';
import Mission from 'src/components/Mission';
import ThemeProgressBar from '../../components/ThemeProgressBar';

const ThemePage = ({ themes, allMissions, userId, userMissionsCompleted, setUserInteraction, userInteraction, missionByTheme, missionByThemeUser, setMissionByTheme, setMissionByThemeUser, theme, setTheme, activeRole, base_url }) => {
  
  const[themeScore,setThemeScore] = useState(0);

  const { idTheme } = useParams();
  
    
  const filterMissionsByTheme = (missions) => {
    console.log('FILTER MISSIONS BY THEME');
    const  result = missions.filter(mission => mission.theme_id == idTheme);
    return result;
  }


  const setMissions = ()  => {
    console.log('SETMISSIONS');
    const missionsCompletedByTheme = filterMissionsByTheme(userMissionsCompleted);
    setMissionByThemeUser(missionsCompletedByTheme);
    console.log('missionCompletedByTheme=',missionsCompletedByTheme.length); 
    const missionsFilteredByTheme = filterMissionsByTheme(allMissions);
    setMissionByTheme(missionsFilteredByTheme);
    console.log('missionByTheme=',missionsFilteredByTheme.length);

  }

  

  const getSelectedTheme = () => { 
    console.log('GET SELECTED THEME'); 
    const theme = themes.find((theme) => theme.id == idTheme);
    setTheme(theme);
    console.log('theme=',theme);   
  }



  useEffect(()=> {
    console.log('USE EFFECT THEME PAGE');
    getSelectedTheme();
    setMissions();
  },[userMissionsCompleted]);

  return (
    <div className="missions">

      <ThemeProgressBar 
        {...theme}
        userInteraction={userInteraction}
        setThemeScore={setThemeScore}
        themeScore={themeScore}
        // computeThemeScore={computeThemeScore}
        missionByThemeUser={missionByThemeUser}
        missionByTheme={missionByTheme}
        userId={userId}
        activeRole={activeRole}
        base_url={base_url}
      />

      {/* <Divider /> */}
      
      <Card.Group 
        className='mission-card-container'
      >
        {missionByTheme.map((mission) => (

          <Mission 
          key={mission.id}
          name={mission.id}
          {...mission}
          userId={userId} 
          userInteraction={userInteraction}
          setUserInteraction={setUserInteraction}
          />
        ))}
      </Card.Group>
     
      
    </div>
  )
}

export default ThemePage
