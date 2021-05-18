import React, {useState, useEffect} from 'react';
import { Card, Icon, Accordion, Progress } from 'semantic-ui-react';
import 'src/styles/GestionThemes.css';
import axios from 'axios';


const ThemeCardScore = ({
  title,
  id,
  student,
  base_url,
  getSelectedStudent,
  // missions,
  // setMissions,
}) => {

  const [missions, setMissions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [themeScore,setThemeScore] = useState(0);


  const loadThemeScore = () => {
    console.log('COMPUTE THEME SCORE');
    axios.get(`${base_url}/students/${student.oap_id}/themes/${id}/score`)
      .then((response)=> {
        console.log('SCORE', response.data);
        setThemeScore(response.data);  
      })
  }
  
  const handleClick = (e, titleProps) => {
    console.log('on a cliqué', titleProps);
    const { index } = titleProps;
    console.log(index);
    console.log(activeIndex);
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  }

  const loadMissions = () => {
    console.log(`http://localhost:3000/v1/api/themes/${id}/missions`)
    axios.get(`http://localhost:3000/v1/api/themes/${id}/missions`)
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
    if (student != undefined) {
    loadThemeScore();
    getSelectedStudent();}

  },[missions])

  useEffect(() => {
    loadMissions();
  },[student])

return(
  <Card fluid className='score-theme-card'>

  <Card.Content className='score-theme-card-header' >
      <h2 className="theme-title">{title}</h2>
  </Card.Content>
  <Card.Content>
    <Progress percent={themeScore.bytheme_ratio} indicating progress />
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
       Missions
      </Accordion.Title>

      <Accordion.Content 
        active={activeIndex === 0}
        className='astuce-container'
      >
        <div className="mission-container">
        </div>
            {missions.map((mission)=> (
        <div  key={mission.id} className= 'mission-container'>
          <p className= 'astuce-text'>
            {mission.title}
          </p>
        </div>
      ))}
      </Accordion.Content>

    </Accordion>

  </Card.Content>

</Card>
);}



export default ThemeCardScore
