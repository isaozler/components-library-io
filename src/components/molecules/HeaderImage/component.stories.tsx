import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from './component'

export default {
  title: 'Molecules/Header Image',
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
)

export const Default = Template.bind({})
Default.args = {
  defaultSection: 0,
  sections: [
    {
      href: '#1',
      newWindow: true,
      image:
        'https://www.google.com/logos/doodles/2021/celebrating-johannes-vermeer-6753651837109124.3-l.webp',
      caption: 'Caption 1',
      fit: 'cover',
    },
    {
      href: '#2',
      image:
        'https://www.google.com/logos/doodles/2021/celebrating-johannes-vermeer-6753651837109124.3-l.webp',
      fit: 'contain',
    },
    {
      href: '#1',
      newWindow: true,
      image:
        'https://www.google.com/logos/doodles/2021/celebrating-johannes-vermeer-6753651837109124.3-l.webp',
      caption: 'Caption 1',
      fit: 'cover',
    },
    {
      href: '#2',
      image:
        'https://www.google.com/logos/doodles/2021/celebrating-johannes-vermeer-6753651837109124.3-l.webp',
      fit: 'contain',
    },
  ],
  className: '',
  icon: 'mdiAbTesting',
  unstacked: 'bottom',
}
