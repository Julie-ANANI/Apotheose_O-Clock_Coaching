import React from 'react';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)

import AdminForm from 'src/components/AdminForm';


// == Import
import '../../styles/AdminForm.css';



const AddAdmin = ({base_url}) => (

  <div className="addAdmin">
  <AdminForm base_url={base_url} />
  </div>
);
  
  // == Export
  export default AddAdmin;
