import React, {useState} from 'react'
import { Button,Form, Modal, Icon } from 'semantic-ui-react'
import axios from 'axios'

  
function UpdateModalTheme({
  currentTitle,
  currentDescription,
  id,
  setRefresh,
  refresh}) {
  const [title, setTitleTheme] = useState('');
  const [description, setDescriptionTheme] = useState('');
  const [position, setPosition] = useState(38);
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const postUrl = `http://localhost:3000/v1/api/themes/${id}`;

  const handleSubmitTheme = () => {

    const data = {
      title: title,
      description: description,
    }
    const headers = {
      'Content-Type': 'application/json'
    };
      axios.post(postUrl, data, {headers}).then(res => {
        console.log(postUrl)
        console.log(res.data);
        setData(res.data);
        setTitleTheme('');
        setDescriptionTheme('');
        setRefresh(true);
      }).catch(err => {
        console.log(err)
      }).finally(
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
      trigger={<Icon className="edit-theme-modal" size='big' link name='edit' />}
    >
      <Modal.Header>Modifier un thème</Modal.Header>
        <Modal.Content >
          <Form.Input label="Titre"
          required type="text"
          placeholder={currentTitle}
          value={title}
          onChange={e => setTitleTheme(e.target.value)}
          />
          <Form.Input label="description"
          required type="text"
          placeholder={currentDescription}
          value={description}
          onChange={e => setDescriptionTheme(e.target.value)}
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

export default UpdateModalTheme
