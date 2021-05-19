import React, {useState} from 'react';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)
import '../../styles/GestionThemes.css';
import ThemeCard from 'src/components/ThemeCard/ThemeCard.js';
import AddTheme from 'src/components/AddTheme/AddTheme.js';
import NewModalTheme from 'src/components/NewModalTheme/NewModalTheme.js';
import axios from 'axios';
//== Import from Semantic UI
import { Card } from 'semantic-ui-react';



const GestionThemes = ({themes, setRefresh, refresh, base_url}) => {
  const [themeGestion, setThemeGestion] = useState('theme');
  const [missionGestion, setMissionGestion] = useState('mission');
  const [iconPlus,setIconPlus] = useState('plus square');

  return (
    <div className="themesGestion">
      <NewModalTheme refresh={refresh} setRefresh={setRefresh} />
      <Card.Group centered>
        {themes.map((theme)=> (
          <div key={theme.id} className="theme-card-container">

            <ThemeCard
              iconPlus={iconPlus}
              name={theme.id}
              {...theme}
              refresh={refresh}
              setRefresh={setRefresh}
              base_url={base_url}
            />
          </div>
        ))}
      </Card.Group>
    </div>
  );
};

// == Export
export default GestionThemes;
