import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from './component'

export default {
  title: 'Molecules/Columns',
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Columns Title',
  isVertical: false,
  contents: Array.from({ length: 10 }).map((_, index) => (
    <div style={{ height: '100px' }}>Horizontal Column {index + 1}</div>
  )),
  hasSpaceBetween: true,
  sizes: Array.from({ length: 10 }).map((_) => '100px'),
}

export const Horizonal = Template.bind({})
Horizonal.args = {
  title: 'Columns Title',
  isVertical: false,
  contents: Array.from({ length: 10 }).map((_, index) => (
    <div style={{ height: '100px' }}>Horizontal Column {index + 1}</div>
  )),
  hasSpaceBetween: true,
  sizes: Array.from({ length: 10 }).map((_) => '100px'),
  isScrollable: true,
  visibleCols: 3,
  scrollHeight: '300px',
}

export const Vertical = Template.bind({})
Vertical.args = {
  title: 'Columns Title',
  isVertical: true,
  contents: Array.from({ length: 10 }).map((_, index) => (
    <div style={{ height: '100%' }}>Vertical Column {index + 1}</div>
  )),
  hasSpaceBetween: true,
  sizes: Array.from({ length: 10 }).map((_) => '100px'),
  isScrollable: true,
  visibleCols: 3,
  scrollHeight: '300px',
}
