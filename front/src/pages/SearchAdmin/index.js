import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { Image, Card, Progress} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import StudentCard from 'src/components/StudentCard';
import 'src/styles/SearchAdmin.css';



const SearchAdmin = ({ 
        searchedStudents, 
        getSpeName, 
        searchedText, 
        base_url, 
      }) => {
  
 
  return(
    <div className="search-page">
        <div className="search-title">
          <h1> {searchedText.length > 0 ? (searchedStudents.length > 0  ? ( searchedStudents.length == 1 ? `${searchedStudents.length} étudiant trouvé.` :  `${searchedStudents.length} étudiants trouvés.` ) : 'Aucun étudiant ne correspond à ta recherche :(') : ''}</h1>
        </div>
        <Card.Group className='profi-card-container'>

          {searchedStudents.map((student)=> {

            // const score = loadGeneralScore(studentScore.general_ratio) || { general_ratio : 0}; 


            return(
              <Link
                key= {student.id}
                name={student.id}
                to={`results/${student.oap_id}/score`} 
              >
                <StudentCard 
                  student= {student} 
                  base_url= {base_url}
                  getSpeName={getSpeName}
                />

              </Link> 
            )
            
          })}
          

        </Card.Group>
    </div>
  )

}

export default SearchAdmin;
