import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from './component'

export default {
  title: 'Atoms/CTAs',
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
)

export const Default = Template.bind({})
Default.args = {}
