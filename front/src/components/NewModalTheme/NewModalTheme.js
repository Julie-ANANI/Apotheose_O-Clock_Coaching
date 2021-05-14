import React, {useState} from 'react'
import { Button,Form, Modal, Icon } from 'semantic-ui-react'
import axios from 'axios'

  
function NewModalTheme({
  currentTitle,
  currentDescription,
  icon,
  setOpen,
  open,})  {
  const [title, setTitleTheme] = useState('');
  const [description, setDescriptionTheme] = useState('');
  const [position, setPosition] = useState(38);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmitTheme = () => {

    const data = {
      title: title,
      description: description,
      position: position,
    }
    const headers = {
      'Content-Type': 'application/json'
    };
      axios.post('http://localhost:3000/v1/api/themes', data, {headers}).then(res => {
        console.log(res.data);
        setData(res.data);
        setTitleTheme('');
        setDescriptionTheme('');
      }).catch(err => {
        console.log(err)
      }).finally(
        console.log("je suis dans le finally"),
        setOpen(false)
      )
  }
  

  return (
    <Modal
      as={Form}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Icon size='big' link name={icon} />}
    >
      <Modal.Header>Gestion de Theme</Modal.Header>
        <Modal.Content >
          <Form.Input label="Titre"
          required type="text"
          placeholder="titre"
          value={currentTitle}
          onChange={e => setTitleTheme(e.target.value)}
          />
          <Form.Input label="description"
          required type="text"
          placeholder="description"
          value={currentDescription}
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

export default NewModalTheme
