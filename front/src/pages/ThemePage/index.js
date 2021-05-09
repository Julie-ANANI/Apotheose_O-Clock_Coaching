import React, {useState, useEffect} from 'react';
import {  Divider } from 'semantic-ui-react';
import '../../styles/Missions.css';
import ThemeProgressBar from 'src/components/ThemeProgressBar';
import AccordionComponent from 'src/components/AccordionComponent';
import axios from 'axios'

const ThemePage = ({selectedTheme}) => {
  const [missions, setMissions] = useState([]);
  const loadMissions = () => {
    // console.log(`http://localhost:3000/v1/api/themes/${selectedTheme.id}/missions`)
    // axios.get(`http://localhost:3000/v1/api/themes/${selectedTheme.id}/missions`)
    axios.get(`http://localhost:3000/v1/api/themes/1/missions`)
      .then((response) => {
        console.log(response.data);
        setMissions(response.data);
      })
      .catch((error) => {
        // exécuté quand la réponse arrive, si la réponse est un échec
        console.log(error);

        // TODO il faudrait afficher l'information à l'utilisateur
      })

  };

  useEffect(() => {
    console.log('On met à jour les missions');
    loadMissions();
  },[selectedTheme]);

  return (
    <div className="missions">
      <ThemeProgressBar {...selectedTheme} />
      <Divider />
      <AccordionComponent missions={missions}/>
    </div>
  )
}

export default ThemePage
