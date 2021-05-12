import React from 'react'
import { Button,Form, Modal, Icon } from 'semantic-ui-react'

function ModalTheme({title, description, icon, modalTarget}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      as={Form}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Icon size='big' link name={icon} />}
    >
      <Modal.Header>Gestion de {modalTarget}</Modal.Header>
        <Modal.Content >
          <Form.Input label="Titre" required type="text" placeholder="titre" value={title}/>
          <Form.Input label="description" required type="text" placeholder="description" value={description}/>
        </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          Annuler
        </Button>
        <Button color='green' onClick={() => setOpen(false)}>
          Valider
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalTheme
