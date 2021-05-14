import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import {  Divider, Card } from 'semantic-ui-react';
import 'src/styles/ThemePage.css';
import ThemeProgressBar from 'src/components/ThemeProgressBar';
// import AccordionComponent from 'src/components/AccordionComponent';
// import axios from 'axios'
import Mission from 'src/components/Mission';

const ThemePage = ({ themes, allMissions, userId, userMissionsCompleted, setUserInteraction, userInteraction, missionByTheme, missionByThemeUser, setMissionByTheme, setMissionByThemeUser, theme, setTheme }) => {
  
  // const [themeScore, setThemeScore] =useState(0);
  // const [missionsByTheme, setMissionByTheme] = useState([]);
  // const [missionByThemeUser, setMissionByThemeUser] = useState([]);
  // const [theme, setTheme] = useState({});

  const { idTheme } = useParams();
  
    
  const filterMissionsByTheme = (missions) => {
    console.log('On est dans la fonction qui filtre les missions selon le thème sélectionné');
    const  result = missions.filter(mission => mission.theme_id == idTheme);
    return result;
  }

  const setMissions = ()  => {
    console.log('On est dans la fonction setMissions qui va charger les missions dans le state');
    const missionsCompletedByTheme = filterMissionsByTheme(userMissionsCompleted);
    setMissionByThemeUser(missionsCompletedByTheme);
    console.log('missionCompletedByTheme=',missionsCompletedByTheme.length); 
    const missionsFilteredByTheme = filterMissionsByTheme(allMissions);
    setMissionByTheme(missionsFilteredByTheme);
    console.log('missionByTheme=',missionsFilteredByTheme.length);

  }

  

  const getSelectedTheme = () => { 
    console.log('fonction GetSelectedTheme qui récupère l\'id du theme via les paramètres et charge le thème'); 
    const theme = themes.find((theme) => theme.id == idTheme);
    setTheme(theme);
    console.log('theme=',theme);    
  }

  // console.log('userMissionsCompleted=',userMissionsCompleted);
  // const theme = getSelectedTheme();
  // console.log('le thème sélectionné',theme);

  useEffect(()=> {
    console.log('On est dans le useEffect de Theme page et on charge le theme sélectionné et les missions attachées au thème ');
    getSelectedTheme();
  },[]);

  useEffect(()=> {
    console.log('On est dans le useEffect de Theme page et on charge le theme sélectionné et les missions attachées au thème ');
    setMissions();
  },[]);

  // useEffect(()=> {
  //   setMissions();
  // }, [,userInteraction]);

  return (
    <div className="missions">
      <ThemeProgressBar {...theme}  />
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
