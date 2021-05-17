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
  setRefresh,
  refresh,
}) => {

  const [missions, setMissions] = useState([]);
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

  const handleDeleteMission = (e, {idmission}) => {

    axios.delete(`http://localhost:3000/v1/api/admin/missions/${idmission}`)
      .then((response) => {
        console.log(response.data);
        setRefresh(true);
      })
      .catch((error) => {
        // exécuté quand la réponse arrive, si la réponse est un échec
        // console.log(error);

        // TODO il faudrait afficher l'information à l'utilisateur
      }).finally(
        setRefresh(false)
      )
  };

  const handleDeleteTheme = (e, {id}) => {

    axios.delete(`http://localhost:3000/v1/api/themes/${id}`)
      .then((response) => {
        console.log(response.data);
        setRefresh(true);
      })
      .catch((error) => {
        // exécuté quand la réponse arrive, si la réponse est un échec
        // console.log(error);

        // TODO il faudrait afficher l'information à l'utilisateur
      }).finally(
        setRefresh(false)
      )
  }


  useEffect(() => {
    loadMissions();
  },[refresh]);

return(
  <Card fluid className='mission-card'>

  <Card.Content className='mission-card-header' >
    <div className="checkbox-container">
      <h2 className="theme-title">{title}</h2>
      <div className='theme-icons-container'>
        <UpdateModalTheme
          currentTitle={title}
          currentDescription={description}
          id={id}
          setRefresh={setRefresh}
          refresh={refresh}
        />
        <Icon
          onClick={handleDeleteTheme} 
          size='large'
          link
          name="trash"
          id={id}
        />
      </div>
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

          <NewModalMission
            id={id}
            setRefresh={setRefresh}
            refresh={refresh}
          />

        </div>
            {missions.map((mission)=> (
        <div  key={mission.id} className= 'mission-container'>
          <p className= 'astuce-text'>
            {mission.title}
          </p>
          <div className="theme-icons-container">
          <UpdateModalMission
            idMission={mission.id}
            idTheme={id}
            setRefresh={setRefresh}
            refresh={refresh} />
          <Icon 
          idmission={mission.id}
          size='large'
          link name="trash"
          onClick={handleDeleteMission} />
          </div>

        </div>
      ))}

      </Accordion.Content>
    </Accordion>

  </Card.Content>

</Card>
);}



export default ThemeCard
