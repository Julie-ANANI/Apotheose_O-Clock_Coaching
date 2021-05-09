import React, { useState } from 'react'
import { Progress, Header } from 'semantic-ui-react'
import '../../styles/ThemeProgressBar.css';

const ThemeProgressBar = ({title }) => {

  const [percent, setPercent] = useState(80);

    return (
      <div className='theme-presentation'>
        <Header className='theme-title' as='h1' textAlign='center'>{title}</Header>
      <div className="progress-container">
        <Progress className='general-progress-bar' percent={percent} indicating progress />
      </div>
      </div>
    )
};

export default ThemeProgressBar;
