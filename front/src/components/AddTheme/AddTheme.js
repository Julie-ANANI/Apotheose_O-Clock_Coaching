import React from 'react'
import { Icon } from 'semantic-ui-react'
import '../../styles/addTheme.css';
const AddTheme = ({...rest}) => (

  <div className="addtheme-container" {...rest}>
  <h1>Ajouter un theme</h1>
<Icon size='big' name='plus' />
</div>
)

  

export default AddTheme
