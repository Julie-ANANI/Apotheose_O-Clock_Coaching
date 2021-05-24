import React, {useState} from 'react'
import { Button, Form, Message, Icon } from 'semantic-ui-react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const LoginForm = ({setActiveRole, setUserId, base_url, setActiveItem}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidden, setHidden] = useState(true);
  const [negative, setNegative] = useState(false);
  const [result, setResult] = useState('');
  const postUrl = `${base_url}/v1/api/login`;
  let history = useHistory();

  const showMessage = () => {

    setHidden(false)
    console.log("j'affiche un message pas cools!")

  }


  const handleSubmitLogin = () => {
    console.log('HANDLE SUBMIT LOGIN WITH URL', postUrl);
    const data = {
      login_email: email,
      login_password: password
    }
    const headers = {
      'Content-Type': 'application/json'
    };
      axios.post(postUrl, data, {headers}).then(res => {
        console.log(data)
        console.log("RESPONSE : ",res.data )

        setEmail('')
        setPassword('')
        setUserId(res.data.oap_id)
        setActiveItem('accueil')
        
        if(res.data.oap_admin_status){
          setActiveRole('admin')
          history.push('/accueiladmin')

        }else if(res.data.data.is_student){
          setActiveRole('student')
          history.push('/accueil')
        }

      }).catch(err => {
        console.log(' ERREUR DANS HANDLESUBMITLOGIN = ', err);
        setResult(err.response.data);
        setNegative(true);
        showMessage();
      })
  }

  return(
    <Form size='large'>
       
    <Icon className="iconlogin" size='huge' name='user' />
    <Form.Input
    className="inputicon"
    fluid icon='user'
    iconPosition='left'
    placeholder='Ton e-mail'
    value={email}
    onChange={e => setEmail(e.target.value)}
    />

    <Form.Input
        className="inputicon"
        fluid
        icon='lock'
        iconPosition='left'
        placeholder='Mot de passe (caput draconis)'
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
    />

    <Message
    hidden={hidden}
    negative={negative}
    compact
    content={result}
    />

    <Button
    color='green'
    fluid
    size='large'
    onClick={handleSubmitLogin}
    >
        Connexion
    </Button>
  </Form>

  )
}

export default LoginForm
