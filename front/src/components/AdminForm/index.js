import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'

const FormAdmin = () => (
  <Form success>
    <Form.Input
    label='Email'
    placeholder='michel@oclock.io'
    />
    <Button className='bouton-addadmin' >Adouber un Coach</Button>
  </Form>
)

export default FormAdmin
