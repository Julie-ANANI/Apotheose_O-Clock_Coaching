import React, { useEffect, useState } from 'react'
import { Progress, Header, Card } from 'semantic-ui-react'
import 'src/styles/scorePage.css';
import axios, { post } from 'axios';

import { useParams } from 'react-router-dom';

import ThemeCardScore from 'src/components/ThemeCardScore';



const ScorePage = ({
  themes,
  studentsList,
  student,
  setStudent,
  base_url,
  studentScore,
  setStudentScore
}) => {

  

  
  const loadScore = () => {
    console.log('COMPUTE  SCORE');
    axios.get(`${base_url}/students/${student.oap_id}/score`)
      .then((response)=> {
        console.log('SCORE', response.data);
        setStudentScore(response.data);  
      })
  }
  
  const { studentId } = useParams()

  const getSelectedStudent = () => { 
    console.log('GET SELECTED STUDENT'); 
    const student = studentsList.find((student) => student.oap_id == studentId);
    setStudent(student);
    console.log('student=', student);   
  }

  useEffect(()=> {
    loadScore();
    
  },[student])

  return(
    <div className='score-student'>
      <Header className='score-student-title' as='h1' textAlign='center'> {student.firstname} {student.lastname} </Header>
      <div className="score-general-progress-container">
        <Progress className='theme-progress-bar' percent={studentScore.global_ratio} indicating progress />
      </div>

      <div className="score-themes">
        <Card.Group centered>

            {themes.map((theme)=> {
              
              return(
                <ThemeCardScore
                  key={theme.id}
                  {...theme}
                  student={student}
                  base_url={base_url}
                  getSelectedStudent={getSelectedStudent}
                  // missions={missions}
                  // setMissions={setMissions}
                />
              )
            })}   


        </Card.Group>
      </div>
    </div>

  )
}

export default ScorePage;
