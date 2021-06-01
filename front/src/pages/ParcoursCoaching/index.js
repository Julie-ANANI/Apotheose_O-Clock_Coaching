// == Import npm
import React, { useState, useEffect } from 'react';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)
import axios from 'axios';



// == Import
import '../../styles/ParcoursCoaching.css';
import ThemeInParcoursCoachingPage from '../../components/ThemeInParcoursCoachingPage';


//== Import from Semantic UI

import { Progress, Divider, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

// == Composant
const ParcoursCoaching = ({
  themes, 
  userId, 
  userInteraction, 
  generalScore, 
  setGeneralScore, 
  userMissionsCompleted, 
  allMissions, 
  base_url,
  searchedText,
}) => {

    // const[themeScore,setThemeScore] = useState(0);
  console.log(searchedText);

  const computeGeneralScore = () => {
    console.log('COMPUTE GENERAL SCORE');
    const result = Math.round((userMissionsCompleted.length/allMissions.length)*100);
    console.log('userMissionsCompleted', userMissionsCompleted);
    setGeneralScore(result);
    // return result;
  };

  useEffect(()=> {
    computeGeneralScore();
  })


  return(
    <div className="student-dashboard">
        <div className="parcourscoaching__progress-container">
          <Progress className='general-progress-bar' percent={generalScore} indicating progress />
          {/* importer composant message pour le message ci-dessous */}
          {/* <span className='progressbar-message'>Message qui évolue en fonction de l'état d'avancement</span> */}
        </div>
      <Divider hidden />
      <Divider hidden />
      <Card.Group 
        className='cards-container'
        centered >
        {themes.map((theme)=> {

          return (
              <Link
                key={theme.id}
                name={theme.id}
                // onClick={handleThemeClick}
                to={`/theme/${theme.id}`}
              >
              <div   className= 'theme-card-container'>
                <ThemeInParcoursCoachingPage
                  name={theme.id}
                  {...theme}
                  // themeScore={themeScore}
                  // setThemeScore={setThemeScore}
                  base_url={base_url}
                  userInteraction={userInteraction}
                  userId={userId}
                />
              </div>
              </Link>
            
            )      
          })}       
      </Card.Group>
    </div>
);}

// == Export
export default ParcoursCoaching;
