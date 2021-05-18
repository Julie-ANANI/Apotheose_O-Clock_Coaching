import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { Image, Card, Progress} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import 'src/styles/SearchAdmin.css';
import axios from 'axios'


const SearchAdmin = ({ searchedStudents, getSpeName, searchedText }) => {
  




  return(
    <div className="search-page">
        <div className="search-title">
          <h1> {searchedText.length > 0 ? (searchedStudents.length > 0  ? ( searchedStudents.length == 1 ? `${searchedStudents.length} étudiant trouvé.` :  `${searchedStudents.length} étudiants trouvés.` ) : 'Aucun étudiant ne correspond à ta recherche :(') : ''}</h1>
        </div>
        <Card.Group className='profi-card-container'>

          {searchedStudents.map((student)=> {

            // if (searchedStudents.length > 0) {
            //   console.log('ON EST DANS LE IF DU MAP SUR LES SEARCHED STUDENTS')
            //   console.log(getSpeName(student));
            // }


            return(
              <Link
                key= {student.id}
                name={student.id}
                to={`results/${student.id}/score`}  
              >
                <Card >
                {/* <Image */}
                <Card.Content >
                  <Card.Header centered="true" className='student-card-header'> {`${student.firstname} ${student.lastname}`} </Card.Header>
                  <Card.Meta>
                    {`${student.cohortsInfo[0].nickname} ${getSpeName(student)} `}
                  </Card.Meta>
                  <Card.Content>
                    <Progress className='student-card-general-progressbar' percent={33} indicating progress />
                  </Card.Content>
                </Card.Content>
                </Card>
              </Link> 
            )
            
          })}
          

        </Card.Group>
    </div>
  )

}

export default SearchAdmin;
