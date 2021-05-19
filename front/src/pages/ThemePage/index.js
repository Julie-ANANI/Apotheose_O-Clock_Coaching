import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import {  Divider, Header, Card, Progress } from 'semantic-ui-react';
// import 'src/styles/ThemePage.css';
import Mission from 'src/components/Mission';
import ThemeProgressBar from '../../components/ThemeProgressBar';

const ThemePage = ({
  themes,
  base_url,
  missionByTheme,
  setMissionByTheme,
  missionByThemeUser,
  setMissionByThemeUser,
  theme,
  setTheme,
  userInteraction,
  setUserInteraction,
  allMissions,
  userMissionsCompleted,
  userId,
  activeRole,
}) => {
  
  const[themeScore,setThemeScore] = useState(0);

  const { idTheme } = useParams();
  
    
  const filterMissionsByTheme = (missions) => {
    console.log('FILTER MISSIONS BY THEME');
    console.log("filtermissionbytheme MISSION :", missions);
    const  result = missions.filter(mission => mission.theme_id == idTheme);
    return result;
  }


  const setMissions = ()  => {
    console.log('SETMISSIONS');
    console.log("userMissionsCompleted : ",userMissionsCompleted)
    const missionsCompletedByTheme = filterMissionsByTheme(userMissionsCompleted);

    setMissionByThemeUser(missionsCompletedByTheme);

    console.log('missionCompletedByTheme=',missionsCompletedByTheme.length); 

    const missionsFilteredByTheme = filterMissionsByTheme(allMissions);

    setMissionByTheme(missionsFilteredByTheme);

    console.log('missionByTheme=',missionsFilteredByTheme.length);

  }

  

  const getSelectedTheme = () => { 
    console.log('GET SELECTED THEME'); 
    console.log(themes);
    console.log(idTheme);
    const theme = themes.find((theme) => theme.id == idTheme);
    setTheme(theme);
    console.log('theme =',theme.id);   
  }



  useEffect(()=> {
    console.log('USE EFFECT THEME PAGE');
    getSelectedTheme();
    setMissions();
  },[userInteraction]);

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
          base_url={base_url}
          />
        ))}
      </Card.Group>
     
      
    </div>
  )
}

export default ThemePage
