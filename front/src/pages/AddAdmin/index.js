import React from 'react';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)

import AdminForm from 'src/components/AdminForm';


// == Import
import '../../styles/AdminForm.css';



const AddAdmin = () => {
  

  return(
    <div className="addAdmin">
    <AdminForm />
    </div>
  );}
  
  // == Export
  export default AddAdmin;
