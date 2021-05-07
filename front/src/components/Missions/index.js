import React, {useState, useEffect} from 'react';
import {  Divider } from 'semantic-ui-react';
import './style.css';
import ThemeProgressBar from 'src/components/ThemeProgressBar';
import AccordionComponent from 'src/components/AccordionComponent';
import axios from 'axios'

const Missions = () => {
  const [missions, setMissions] = useState([]);

  const loadMissions = () => {
    axios.get('http://localhost:3000/v1/api/themes/1/missions')
      .then((response) => {
        setMissions(response.data);
      })
      .catch((error) => {
        // exécuté quand la réponse arrive, si la réponse est un échec
        console.log(error);

        // TODO il faudrait afficher l'information à l'utilisateur
      })

  };
  useEffect(() => {
    loadMissions();
  }, []);

  return (
    <div className="missions">
      <h1>titre du projet</h1>
      <ThemeProgressBar />
      <Divider />
      <AccordionComponent missions={missions}/>
    </div>
  )
}

export default Missions
