import React, { useState } from 'react'
import { Progress, Header } from 'semantic-ui-react'
import '../../styles/ThemeProgressBar.css';

const ThemeProgressBar = ({title, description, percent }) => {

  // const [percent, setPercent] = useState(80);

    return (
      <div className='theme-presentation'>
        <Header className='theme-title' as='h1' textAlign='center'>{title}</Header>
      <div className="theme-progress-container">
        <Progress className='theme-progress-bar' percent={percent} indicating progress />
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
