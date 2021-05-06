import React from 'react';
import {  Divider } from 'semantic-ui-react';
import './style.css';
import ThemeProgressBar from 'src/components/ThemeProgressBar';
import Accordion from 'src/components/Accordion';

const Missions = () => (
  <div className="missions">
    <h1>titre du projet</h1>
    <ThemeProgressBar />
    <Divider />
    <Accordion />
  </div>
)

export default Missions
