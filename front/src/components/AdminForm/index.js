import React, {useState} from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import axios from 'axios'

const FormAdmin = () => {
  const [email, setEmailAdmin] = useState('');
  const [hidden, setHidden] = useState(true);
  const [visible, setVisible] = useState(false);
  const [positive, setPositive] = useState(false);
  const [negative, setNegative] = useState(false);
  const [result, setResult] = useState('');
  const postUrl = `/v1/api/admin/add`;

const showMessage = () => {
if(positive){
  setHidden(false)
  setVisible(true);
  console.log("j'affiche un message ok!")
}else{
  setHidden(false)
  setVisible(true);
  console.log("j'affiche un message pas cools!")
}
}


  const handleSubmitEmail = () => {

    const data = {
      email: email
    }
    const headers = {
      'Content-Type': 'application/json'
    };
      axios.post(postUrl, data, {headers}).then(res => {
        setResult("Vous avez ajouté un nouvel administrateur ! Bienvenue à lui!")
        setPositive(true);
        showMessage()
        setEmailAdmin('')
      }).catch(err => {
        setNegative(true);
        setResult(err.response.data)
        showMessage()
      }).finally(
        console.log("post url", postUrl),
        console.log("je suis dans le finally"),
      )
  }

  return(
  <Form success>
        <Message
      hidden={hidden}
      visible={visible}
      success={positive}
      negative={negative}
    compact
    content={result}
  />
    <Form.Input
    label='Email'
    type="text"
    placeholder='mail du nouvel admin'
    value={email}
    onChange={e => setEmailAdmin(e.target.value)}
    />
    <Button className='bouton-addadmin'
    //color="green"
    //type='submit'
    onClick={handleSubmitEmail}
    >Adouber un Coach</Button>
  </Form>

  )
}

export default FormAdmin
