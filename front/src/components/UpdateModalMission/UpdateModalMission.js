import React, {useState} from 'react'
import { Button,Form, Modal, Icon } from 'semantic-ui-react'
import axios from 'axios'

function UpdateModalMission({
  currentTitle,
  currentDescription,
  idMission,
  setRefresh,
  refresh}) {
  const [title, setTitleMission] = useState('');
  const [advice, setAdviceMission] = useState('');
  const [position, setPosition] = useState(38);
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const postUrl = `http://localhost:3000/v1/api/admin/missions/${idMission}`;

  const handleSubmitTheme = () => {

    const data = {
      title: title,
      advice: advice,
    }
    const headers = {
      'Content-Type': 'application/json'
    };
      axios.post(postUrl, data, {headers}).then(res => {
        console.log(res.data);
        setData(res.data);
        setTitleMission('');
        setAdviceMission('');
        setRefresh(true);
      }).catch(err => {
        console.log(err)
      }).finally(
        console.log("post url", postUrl),
        console.log("je suis dans le finally"),
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
      trigger={<Icon className="edit-mission-modal" size='large' link name='edit' />}
    >
      <Modal.Header>Modifier une mission</Modal.Header>
        <Modal.Content >
          <Form.Input label="Titre"
          required type="text"
          placeholder="titre"
          value={title}
          onChange={e => setTitleMission(e.target.value)}
          />
          <Form.Input label="description"
          required type="text"
          placeholder="advice"
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
        onClick={handleSubmitTheme}>
          Valider
        </Button>
      </Modal.Actions>
    </Modal>
  )
}
export default UpdateModalMission
