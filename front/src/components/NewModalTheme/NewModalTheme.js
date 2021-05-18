import React, {useState} from 'react'
import { Button, Form, Modal, Icon } from 'semantic-ui-react'
import axios from 'axios'
import AddTheme from 'src/components/AddTheme/AddTheme.js';

  
function NewModalTheme({setRefresh, refresh})  {
  const [title, setTitleTheme] = useState('');
  const [description, setDescriptionTheme] = useState('');
  const [position, setPosition] = useState(38);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const handleSubmitTheme = () => {

    const data = {
      title: title,
      description: description,
      position: position,
    }
    const headers = {
      'Content-Type': 'application/json'
    };
      axios.post('http://localhost:3000/v1/api/admin/themes', data, {headers}).then(res => {
        console.log(res.data);
        setData(res.data);
        setTitleTheme('');
        setDescriptionTheme('');
        setRefresh(true)
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
      trigger={<AddTheme />}
    >
      <Modal.Header>Ajouter un thème</Modal.Header>
        <Modal.Content >
          <Form.Input label="Titre"
          required type="text"
          placeholder="Titre"
          // value={title}
          onChange={e => setTitleTheme(e.target.value)}
          />
          <Form.TextArea 
            label="Description"
            required type="text"
            placeholder="Description"
            // value={description}
            onChange={e => setDescriptionTheme(e.target.value)}
          />
        </Modal.Content>
      <Modal.Actions>
        <Button
          className='button-cancel'
          onClick={() => setOpen(false)}>
          Annuler
        </Button>
        <Button
          className = 'button-submit'
          type="submit"
          onClick={handleSubmitTheme}>
          Valider
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default NewModalTheme
