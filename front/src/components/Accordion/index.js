import React, { Component } from 'react'
import { Accordion, Checkbox, Segment } from 'semantic-ui-react'
import './style.css';

export default class AccordionExampleStandard extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Checkbox />
          Mission 1
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
        <Segment>Boite a conseils de la mission 1.</Segment>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Checkbox />
          Mission 2
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quisquam alias rem at ut nam molestiae ipsam reprehenderit, neque sit quo voluptates dolor mollitia facere dolorum expedita hic. Ad, laboriosam?
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Checkbox />
          Mission 3
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Boite a conseil de la mission 3.
          </p>
          <p>
           Voila l'accordion.
          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}
