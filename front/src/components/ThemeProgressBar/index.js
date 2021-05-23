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

  const computeThemeScore = () => {
    console.log('COMPUTE THEME SCORE - ThemeProgressBar');
    console.table(`themeId: ${id}`);
    console.table(`userId: ${userId}`);
    axios.get(`${base_url}/v1/api/students/${userId}/themes/${id}/score`, { withCredentials: true })
    // axios({
    //   url : `${base_url}/v1/api/students/${userId}/themes/${id}/score`,
    //   method : 'get',
    //   withCredentials: true,
    //   data : {
    //     "user_id": userId,
    //     "theme_id": id
    //   }})
      .then((res)=> {
        console.log('SCORE', res.data);
        setThemeScore(res.data);  
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
