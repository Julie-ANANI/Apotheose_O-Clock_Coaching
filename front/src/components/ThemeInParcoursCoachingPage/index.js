import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../styles/ParcoursCoaching.css';

//== Import from Semantic UI

import { Card, Progress } from 'semantic-ui-react'


// == Composant
const ThemeInParcoursCoachingPage = ({
  id,
  title,
  base_url, 
  userInteraction,
  userId,
}) => {

  const[themeScore,setThemeScore] = useState(0);
  


  const computeThemeScore = () => {
    console.log('COMPUTE THEME SCORE');
    axios.get(`${base_url}/v1/api/students/${userId}/themes/${id}/score`)
      .then((response)=> {
        console.log('SCORE', response.data);
        setThemeScore(response.data);  
      })
  }
  
  useEffect(() => {
    computeThemeScore();
  },[userInteraction])

return(
      <Card fluid="true" className='theme-card'>
        <Card.Content className='theme-card-header' header={title} />
        <Card.Content extra>
          <Progress percent={themeScore.bytheme_ratio} indicating progress />
        </Card.Content>
      </Card>
);}

// == Export
export default ThemeInParcoursCoachingPage;
