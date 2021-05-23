import React, {useState, useEffect} from 'react';
import { Card, Icon, Accordion, Progress } from 'semantic-ui-react';
import 'src/styles/GestionThemes.css';
import axios from 'axios';
import MissionScore from 'src/components/MissionScore';


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
  // const [generalScore, setGeneralScore] = useState(0);



  const loadThemeScore = () => {
    console.log('COMPUTE THEME SCORE');
    console.log(`LE ID DE THEME ${id}`)
    axios.get(`${base_url}/v1/api/students/${student.oap_id}/themes/${id}/score`, { withCredentials: true })
      .then((response)=> {
        
        // console.log('SCORE', response.data);
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
    console.log(`${base_url}/v1/api/themes/${id}/missions`)
    axios.get(`${base_url}/v1/api/themes/${id}/missions`, { withCredentials: true })
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
        <div>
        {missions.map((mission)=> (
          <MissionScore
            key={mission.id}  
            base_url={base_url}
            {...mission}
            idTheme={id}
            userId={student.oap_id}
          />
        ))}
      </div>

      </Accordion.Content>

    </Accordion>

  </Card.Content>

</Card>
);}



export default ThemeCardScore
