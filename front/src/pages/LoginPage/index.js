import React from 'react'
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)

// IMPORTER LoginForm!!!!!!!!
import LoginForm from 'src/components/LoginForm';
// == Import
import '../../styles/LoginPage.css';
import logo from "src/assets/logos/Logo de O\'coaching - white and red svg v2.svg";

//== Import from Semantic UI
import { Button, Form, Grid, Header, Segment, Icon } from 'semantic-ui-react'


const LoginPage = ({setActiveRole, setUserId}) => (

  <Grid textAlign='center'>
    <Grid.Column>
      <LoginForm setActiveRole={setActiveRole} setUserId={setUserId}/>
    </Grid.Column>
  </Grid>
)
  
  // == Export
  export default LoginPage;
