import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'

const FormAdmin = () => (
  <Form success>
    <Form.Input
    label='Email'
    placeholder='mail du nouvel admin'
    />
    <Button >Ajouter</Button>
  </Form>
)

export default FormAdmin
