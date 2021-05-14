import React, {useState} from 'react'
import { Icon } from 'semantic-ui-react'
import '../../styles/addTheme.css';
import NewModalTheme from 'src/components/NewModalTheme/NewModalTheme.js';
const AddTheme = ({iconPlus,
  themeGestion,
  setOpen,
  open
}) => {

return(
  <div className="addtheme-container">
  <h1>Ajouter un theme</h1>
  <NewModalTheme
  icon={iconPlus}
  modalTarget={themeGestion}
  setOpen={setOpen}
  open={open}

  />
</div>
)
}

  

export default AddTheme
