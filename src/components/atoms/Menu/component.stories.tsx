import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from './component'

export default {
  title: 'Atoms/Menu',
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
)

const DivWrapper = ({ children }: any) => {
  return <div>{children}</div>
}

export const Default = Template.bind({})
Default.args = {
  id: 'main-nav',
  className: '',
  isFullWidth: true,
  linkWrapper: DivWrapper,
  menu: [
    {
      label: 'Link 0',
      href: '/link-0',
      target: '_blank',
    },
    {
      label: 'Link 1',
      href: '/link-1',
      onClick: (e: any) => {
        e.preventDefault()
      },
    },
    {
      label: 'Link 2',
      href: '/link-2',
      children: [
        {
          label: 'Link 2.1',
          href: '/link-2-1',
        },
      ],
    },
    {
      label: 'Link 3',
      href: '/link-3',
      children: [
        {
          label: 'Link 3.1',
          href: '/link-3-1',
          children: [
            {
              label: 'Link 3.1.1',
              href: '/link-3-1-1',
            },
          ],
        },
        {
          label: 'Link 3.2',
          href: '/link-3-2',
          children: [
            {
              label: 'Link 3.2.1',
              href: '/link-3-2-1',
            },
            {
              label: 'Link 3.2.2',
              href: '/link-3-2-2',
              children: [
                {
                  label: 'Link 3.2.2.1',
                  href: '/link-3-2-2-1',
                },
                {
                  label: 'Link 3.2.2.2',
                  href: '/link-3-2-2-2',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
