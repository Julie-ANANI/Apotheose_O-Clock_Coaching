import React, { useEffect, useState } from 'react'
import { Progress, Header } from 'semantic-ui-react'
import '../../styles/ThemeProgressBar.css';
import axios, { post } from 'axios';



const ThemeProgressBar = ({
  title,
  description,
  id,
  base_url, 
  themeScore,
  setThemeScore,
  userInteraction,
  missionByTheme,
  missionByThemeUser,
  userId,
  activeRole }) => {
  // const [percent, setPercent] = useState(80);

  // const computeThemeScore = () => {
  //   console.log('COMPUTE THEME SCORE');
  //   console.log('missionByThemeUser.length');
  //   console.log('missionByUser.length');
  //   const result = Math.round((missionByThemeUser.length/missionByTheme.length)*100);
  //   setThemeScore(result);
  // }

  const computeThemeScore = () => {
    console.log('COMPUTE THEME SCORE');
    axios.get(`${base_url}/v1/api/students/${userId}/themes/${id}/score`, { withCredentials: true })
      .then((response)=> {
        console.log('SCORE', response.data);
        setThemeScore(response.data);  
      }).catch((err => {
        console.log(err)
        console.log("erreur themeProgressBar")
      }))
  }
  
  useEffect(() => {
    computeThemeScore();
  },[missionByThemeUser,userInteraction])

    return (
      <div className='theme-presentation'>
        <Header className='theme-title' as='h1' textAlign='center'>{title}</Header>
        <div className="theme-progress-container">
          <Progress className='theme-progress-bar' percent={themeScore.bytheme_ratio} indicating progress />
        </div>
        <div className="description-theme">
          <p>
            {description}
          </p>
        </div>
      </div>
    )
};

export default ThemeProgressBar;
