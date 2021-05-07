// == Import npm
import React, { useState, useEffect } from 'react';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)
import axios from 'axios';



// == Import
import './styles.css';
import logo from 'src/assets/logos/Logo de O\'coaching - white and red svg v2.svg';

//== Import from Semantic UI
import { Header, Divider, Image, Segment } from 'semantic-ui-react'


const Accueil = () => {
  

  return(
    <div className="accueil">
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Image src={logo} size='medium' centered />
      <Header className='header-accueil' as='h1' textAlign='center'> Bienvenue sur ton espace personalisé de coaching </Header>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <div className="img-container">
        <div className="img-accueil">

        </div>
      </div> 
      <div className="text-accueil-container">
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eveniet eum provident dolore, impedit eius mollitia quod corporis molestias similique, asperiores eos et sunt officiis sint cupiditate itaque beatae repellat.
        Molestiae fuga sequi eaque dolorum. Facilis tempore sint hic. Esse quos cupiditate magnam numquam expedita facilis? Suscipit tempora cupiditate ducimus alias magni temporibus sint est. Recusandae consequuntur eius dignissimos autem.
        Blanditiis dolorem itaque, nobis consectetur voluptates commodi minus vitae veniam error repellendus. Nulla culpa tempora consequatur, repellendus cupiditate omnis facere reiciendis sit vero id aliquam neque reprehenderit, recusandae, necessitatibus molestias?
        Odit, fuga eius harum iusto consequatur ipsum excepturi officia incidunt similique deleniti unde nam sunt neque magni quidem cupiditate delectus in! Asperiores adipisci porro aliquam reiciendis sunt sapiente necessitatibus quaerat!
        Inventore nemo, repellat est quidem nulla earum itaque? Nihil hic tempora, aspernatur reprehenderit excepturi nostrum doloremque officiis veniam voluptatibus magnam quas, error vel iusto sint animi eos laudantium corporis possimus.
        </p>
      </div>  
    </div>
  );}
  
  // == Export
  export default Accueil;
