import React, {useState} from 'react'
import { Icon } from 'semantic-ui-react'
import '../../styles/addTheme.css';
import ModalTheme from 'src/components/ModalTheme/ModalTheme.js';
const AddTheme = ({iconPlus, themeGestion}) => {

return(
  <div className="addtheme-container">
  <h1>Ajouter un theme</h1>
  <ModalTheme icon={iconPlus} modalTarget={themeGestion}/>
</div>
)
}

  

export default AddTheme
