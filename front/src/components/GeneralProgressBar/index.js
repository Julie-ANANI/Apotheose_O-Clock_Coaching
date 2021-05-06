import React from 'react'
import {  Progress } from 'semantic-ui-react'

const GeneralProgressBar = () => {

  const [percent, setPercent] = useState(80);

    return (
      <div>
        <Progress percent={this.state.percent} indicating />
      </div>
    )
};

export default GeneralProgressBar;
