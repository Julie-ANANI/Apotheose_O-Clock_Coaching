import React, {useState} from 'react'
import { Button,Form, Modal, Icon } from 'semantic-ui-react'
import axios from 'axios'
import AddMission from 'src/components/AddMission/AddMission.js';
  
function NewModalMission({
  id,
  setRefresh,
  refresh}) {

  const [title, setTitleTheme] = useState('');
  const [advice, setAdviceMission] = useState('');
  const [position, setPosition] = useState(1);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const postUrl = `http://localhost:3000/v1/api/admin/themes/${id}/missions`;

  const handleSubmitMission = () => {

    const data = {
      title: title,
      advice: advice,
      position: position,
    }
    const headers = {
      'Content-Type': 'application/json'
    };
      axios.post(postUrl, data, {headers}).then(res => {
        console.log(res.data);
        setData(res.data);
        setTitleTheme('');
        setAdviceMission('');
        setRefresh(true)
      }).catch(err => {
        console.log(err)
        console.log('ca marche pas!')
      }).finally(
        console.log("je suis dans le finally"),
        console.log("post url", postUrl),
        console.log("setTitleTheme", title),
        console.log("setDescriptionTheme", advice),
        setOpen(false),
        setRefresh(false)
      )
  }
  

  return (
    <Modal
      as={Form}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<AddMission />}
    >
      <Modal.Header>Ajouter une nouvelle mission</Modal.Header>
        <Modal.Content >
          <Form.Input label="Titre"
          required type="text"
          placeholder="titre"
          value={title}
          onChange={e => setTitleTheme(e.target.value)}
          />
          <Form.Input label="description"
          required type="text"
          placeholder="description"
          value={advice}
          onChange={e => setAdviceMission(e.target.value)}
          />
        </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          Annuler
        </Button>
        <Button
        color='green'
        type="submit"
        onClick={handleSubmitMission}>
          Valider
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default NewModalMission
