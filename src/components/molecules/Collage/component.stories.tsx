import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from './component'

import ColumnsComponent from '@components/molecules/Columns/component'
import EventItem from '@components/atoms/EventItem/component'
import ImageText from '@components/molecules/ImageText/component'

export default {
  title: 'Molecules/Collage',
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Collage Title',
  contents: [
    <ColumnsComponent
      key={3}
      isVertical={true}
      hasSpaceBetween={true}
      contents={[
        <EventItem
          key={`event-1`}
          dateTime="2021-10-19"
          title="Event Title 1"
          text="Content 1"
        />,
        <EventItem
          key={`event-2`}
          dateTime="2021-10-18"
          title="Event Title 2"
          text="Content 2"
        />,
        <EventItem
          key={`event-3`}
          dateTime="2021-10-17"
          title="Event Title 3"
          text="Content 3"
        />,
      ]}
    />,
  ],
  spotlight: (
    <ImageText
      title="Image Text Title"
      image={{
        image:
          'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        fit: 'contain',
        caption: 'Caption 1',
      }}
      isVertical={true}
      contents={[
        <EventItem
          dateTime="2021-10-20"
          title="Spotlight Title"
          text="Spotlight Content"
        />,
      ]}
    />
  ),
  sizes: ['40%', '60%'],
  hasSpaceBetween: true,
  isReversed: true,
}
