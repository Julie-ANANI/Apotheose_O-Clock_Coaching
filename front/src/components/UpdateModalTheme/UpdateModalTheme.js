import React, {useState} from 'react'
import { Button,Form, Modal, Icon } from 'semantic-ui-react'
import axios from 'axios'

  
function UpdateModalTheme({
    currentThemeTitle,
    currentThemeDescription,
    setCurrentThemeTitle,
    setCurrentThemeDescription,
    id,
    setRefresh,
    refresh,
    base_url
  }) {
  const [title, setTitleTheme] = useState(currentThemeTitle);
  const [description, setDescriptionTheme] = useState(currentThemeDescription);
  const [position, setPosition] = useState(38);
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const postUrl = `${base_url}/v1/api/admin/themes/${id}`;

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
      trigger={<Icon className="edit-theme-modal" size='large' link name='edit' />}
    >
      <Modal.Header>Modifier un thème</Modal.Header>
        <Modal.Content >
          <Form.Input label="Titre"
          required type="text"
          // placeholder={currentTitle}
          value={title}
          onChange={e => setTitleTheme(e.target.value)}
          />
          <Form.TextArea 
            label="Description"
            required
            // placeholder={currentDescription}
            value={description}
            onChange={e => setDescriptionTheme(e.target.value)}

          />
        </Modal.Content>
      <Modal.Actions>
        <Button
          className='button-cancel' 
          onClick={() => setOpen(false)}
        >
          Annuler
        </Button>
        <Button
          className='button-submit'
          type="submit"
          onClick={handleSubmitTheme}>
          Valider
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default UpdateModalTheme
