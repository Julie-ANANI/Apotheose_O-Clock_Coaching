// == Import npm
import React from 'react';

import { Header, Divider, Card, Image } from 'semantic-ui-react';
import louise from '../../assets/image/Louise.PNG';
import laurine from "../..//assets/image/Laurine-ock.png";

// == Import
import '../../styles/Accueil.css';


const Accueil = () => {
  

  return(
    <div className="accueil">
      <Header className='theme-title' as='h1' textAlign='center'> Présentation de l'outil </Header>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <div className="img-container">
        <div className="img-accueil">
        </div>
      </div> 
      <div className="text-accueil-container">
        <p>
          Cet outil d’accompagnement professionnel te permet d'avoir accès à toutes nos meilleures techniques de recherche d'emploi et de suivre un coaching complet au rythme qui te convient. Tu peux démarrer celui-ci lors de ta formation ou alors par la suite, lorsque tu commenceras ta recherche. Ayant une visibilité de tes avancements sur l'outil, il permet également un suivi qualitatif par l'équipe Placement, nous facilitant le repérage de tes difficultés et freins pour entrer sur le marché du travail.<br /><br />

          Les fonctionnalités de l’outil sont en perpétuelle évolution, il sera complété et amélioré au fur et à mesure.<br /><br />

          Aujourd’hui, tu as la possibilité d’utiliser notre checklist coaching pour t'organiser dans tes démarches et ainsi avoir accès à de nombreux conseils et missions tels que :<br /> <br />
          - Préparer ton entrée sur le marché du travail par le biais d’outils d’organisation<br />
          - Création d’un CV et des lettres de motivation<br />
          - Se préparer aux tests techniques et aux entretiens.<br />
          - Création et utilisation de Linkedin<br />
          - Préparation de ton compte Github et la réalisation d’un portfolio<br />
          - Et beaucoup plus encore !  
        </p>
      </div>
      <Divider hidden />
      <Header className='theme-title' as='h1' textAlign='center'> Présentation de l’équipe placement & B2B </Header>
      <Divider hidden />
      <Divider hidden />
      <Card.Group className= 'card-container' centered> 
        <Card>
          <img src={louise} height={300} alt="Louise"/>
          <Card.Content>
            <Card.Header> Louise </Card.Header>
            <Card.Meta>
              <span className='date'>Fais toi plaiz Lucas !</span>
            </Card.Meta>
            <Card.Description>
              Oui oui fais toi plaise
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <img src={laurine} height={300} alt="Laurine"/>
          <Card.Content>
            <Card.Header> Laurine </Card.Header>
            <Card.Meta>
              <span className='date'>Fais toi plaiz Lucas !</span>
            </Card.Meta>
            <Card.Description>
              Oui oui fais toi plaise
            </Card.Description>
          </Card.Content>
        </Card>

      </Card.Group>
      <div className="text-accueil-container">
        <p>
          Le pôle <strong>Placement</strong>, représenté par Louise et Laurine, est disponible pour te conseiller et t'accompagner dans tout ce qui tourne autour de la recherche d’emploi en post-formation.<br /><br />
          
          <strong>Notre mission ? </strong> Tout mettre en œuvre pour faciliter ton accès ou ton retour à l’emploi le plus rapidement possible, en prenant en compte les situations de chacun, les compétences et aptitudes, les contraintes géographiques, mais aussi les projets professionnels (recherche de CDI, de stage, de missions freelance, etc.).<br /><br />
            
          Nous sommes disponibles sur le Slack Pro pour t'aider dans ta recherche d’emploi, que ce soit à travers une relecture de ton CV et ton profil LinkedIn, des conseils pour tes lettres de motivation et entretiens, mais aussi pour te rebooster si tu commences à douter de toi. N'hésite surtout pas à entrer en contact avec nous sur le Slack Pro, on sera ravie de discuter avec toi !<br /><br />
            
          Nous travaillons également main dans la main avec notre pôle B2B, représenté par Anais, Frank et Marion. <br /><br />
            
          <strong>Leur mission ? </strong> Développer le réseau d’entreprises partenaires de l’École O’clock, afin de vous proposer régulièrement de nouvelles opportunités ! Ils font le lien entre les apprenants et les entreprises avec un objectif premier très clair : permettre à tous de trouver un poste épanouissant en travaillant main dans la main avec le pôle Placement.<br /><br />
            
          Si tu as des questions sur l’utilisation de l’outil, n'hésite pas à entrer en contact avec Louise ou Laurine sur le Slack Pro ! <br /><br />
          
          À très vite ! <br /><br />
   
        </p>
      </div>


    </div>
  );}
  
  // == Export
  export default Accueil;
