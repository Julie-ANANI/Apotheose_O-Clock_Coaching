import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { Image, Card, Progress} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import 'src/styles/SearchAdmin.css';
import axios from 'axios'


const StudentCard = ({student, base_url, getSpeName}) => {

  const [studentScore,setStudentScore] = useState({ global_ratio : 0});

  const loadGeneralScore = () => {

    console.log('COMPUTE GENERAL SCORE');
    axios.get(`${base_url}/v1/api/students/${student.oap_id}/score`, { withCredentials: true })
      .then((response)=> {
        console.log('SCORE', response.data);
        setStudentScore(response.data);
        // return(response.data)  
      })

  }
  // const score = loadGeneralScore().global_ratio

  useEffect(()=> {
    loadGeneralScore()
  },[])

  return(
    <Card >
      {/* <Image */}
        <Card.Content >
          <Card.Header centered="true" className='student-card-header'> {`${student.firstname} ${student.lastname}`} </Card.Header>
          <Card.Meta>
            {`${student.cohortsInfo[0].nickname} ${getSpeName(student)} `}
          </Card.Meta>
          <Card.Content>
            <Progress className='student-card-general-progressbar' percent={studentScore.global_ratio} indicating progress />
          </Card.Content>
        </Card.Content>
    </Card>
  )
}


export default StudentCard;
                