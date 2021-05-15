import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { Card, Progress } from 'semantic-ui-react';
import 'src/styles/SearchProfil.css';
import axios from 'axios'


const SearchProfil = ({ }) => (
  


<div className="search-page">
    <div className="search-title">
      <h1>Ce qui a été recherché dans la barre de recherche</h1>
    </div>
    <Card.Group className='profi-card-container'>
    <Card>
        <Card.Content >
          <Card.Header className='profi-card' content="nom de l'étudiant" />
          <Card.Meta content='Promotion et spé' />
          <Card.Description>
            <Progress className='general-progress-bar-student' percent={33} indicating progress />
          </Card.Description>
        </Card.Content>
      </Card>


      <Card>
        <Card.Content>
          <Card.Header content="nom de l'étudiant" />
          <Card.Meta content='Promotion et spé' />
          <Card.Description>
            <Progress className='general-progress-bar-student' percent={33} indicating progress />
          </Card.Description>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content>
          <Card.Header content="nom de l'étudiant" />
          <Card.Meta content='Promotion et spé' />
          <Card.Description>
            <Progress className='general-progress-bar-student' percent={33} indicating progress />
          </Card.Description>
        </Card.Content>
      </Card>


      <Card>
        <Card.Content>
          <Card.Header content="nom de l'étudiant" />
          <Card.Meta content='Promotion et spé' />
          <Card.Description>
            <Progress className='general-progress-bar-student' percent={33} indicating progress />
          </Card.Description>
        </Card.Content>
      </Card>

    </Card.Group>
</div>
)

export default SearchProfil
