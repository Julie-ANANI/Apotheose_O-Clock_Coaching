import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const description = [
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto autem dolores facere modi distinctio blanditiis quisquam repellendus earum, velit quod qui doloribus ex suscipit consequuntur vero assumenda non dolore molestiae.'
].join(' ')

const ThemeCard = () => (

    <Card>
      <Card.Content header='Nouveau Theme' />
      <Card.Content description={description} />
      <Card.Content extra>
        <Icon name='edit' />Modifier Theme
        <Icon name='trash' />Supprimer Theme
      </Card.Content>
    </Card>

)

export default ThemeCard
