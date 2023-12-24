import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from './component'

export default {
  title: 'Atoms/Image',
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
)

export const Default = Template.bind({})
Default.args = {
  image:
    'https://www.google.com/logos/doodles/2021/celebrating-johannes-vermeer-6753651837109124.3-l.webp',
  width: '100px',
  height: '100px',
  href: '',
  newWindow: false,
  alt: '',
  fit: 'contain',
}
