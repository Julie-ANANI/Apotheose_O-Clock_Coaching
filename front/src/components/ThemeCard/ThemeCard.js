import React, {useState, useEffect} from 'react';
import { Card, Icon, Accordion } from 'semantic-ui-react';
import '../../styles/GestionThemes.css';
import axios from 'axios';
import UpdateModalTheme from 'src/components/UpdateModalTheme/UpdateModalTheme.js';
import UpdateModalMission from 'src/components/UpdateModalMission/UpdateModalMission.js';
import NewModalMission from 'src/components/NewModalMission/NewModalMission.js';
const description = [
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto autem dolores facere modi distinctio blanditiis quisquam repellendus earum, velit quod qui doloribus ex suscipit consequuntur vero assumenda non dolore molestiae.'
].join(' ')

const ThemeCard = ({
  title,
  id,
  description,
  iconPlus,
  missionGestion,
  themeGestion,
  open,
  setOpen}) => {

  const [missions, setMissions] = useState([]);
  const [iconEdit,setIconEdit] = useState("edit")
  const [activeIndex, setActiveIndex] = useState(-1);
  
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
    loadMissions();
  },[]);

return(
  <Card fluid className='mission-card'>

  <Card.Content className='mission-card-header' >
    <div className="checkbox-container">
      <h2 className="theme-title">{title}</h2>
      <UpdateModalTheme
      currentTitle={title}
      currentDescription={description}
      icon={iconEdit}
      modalTarget={themeGestion}
      setOpen={setOpen}
      open={open}
      id={id}
      />
      <Icon size='big' link name="trash" />
    </div>
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
          <div className='addMission-container'>
            <h1>Ajouter un mission</h1>
              <NewModalMission
              icon={iconPlus}
              modalTarget={missionGestion}
              setOpen={setOpen}
              open={open}
              id={id}
              />
          </div>

        </div>
            {missions.map((mission)=> (
        <div  key={mission.id} className= 'mission-container'>
          <p className= 'astuce-text'>
            {mission.title}
          </p>
          <div className="icon-container">
          <UpdateModalMission currentTitle={mission.title} currentDescription={mission.advice} icon={iconEdit} modalTarget={missionGestion}/>
            <Icon size='big' link name="trash" />
          </div>

        </div>
      ))}

      </Accordion.Content>
    </Accordion>

  </Card.Content>

</Card>
);}



export default ThemeCard
