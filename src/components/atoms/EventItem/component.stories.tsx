import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from './component'

export default {
  title: 'Atoms/Event Item',
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Event Title',
  dateTime: '2020-12-22',
  text: 'Description',
  className: '',
  links: (
    <div>
      <a href="#asd">LINK</a>
    </div>
  ),
}
