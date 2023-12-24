import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import LinkWrapper from './component'

export default {
  title: 'Atoms/Link',
  component: LinkWrapper,
} as ComponentMeta<typeof LinkWrapper>

const Template: ComponentStory<typeof LinkWrapper> = (args) => (
  <LinkWrapper {...args} />
)

const LinkWrapperComponent = ({ children, href }: any) => {
  return (
    <div className="custom-wrapper" data-href={href}>
      {children}
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  href: '#',
  isNewWindow: true,
  linkWrapper: LinkWrapperComponent,
}
