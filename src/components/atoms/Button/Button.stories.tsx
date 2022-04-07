import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    backgroundColorHover: { control: 'color' },
    color: { control: 'color' },
    colorHover: { control: 'color' },
    badgeTextColor: { control: 'color' },
    badgeColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  isFullWidth: true,
  label: 'Button',
  fontWeight: '400',
};

export const Bordered = Template.bind({});
Bordered.args = {
  color: 'red',
  colorHover: 'black',
  label: 'Bordered Button',
  borderHover: {
    size: '1px',
    color: 'black',
    style: 'dashed',
    radius: '10px',
  },
  border: {
    size: '1px',
    color: 'red',
    style: 'solid'
  },
};

export const CustomHover = Template.bind({});
CustomHover.args = {
  label: 'Hover Button',
  backgroundColor: 'red',
  backgroundColorHover: 'black',
  color: 'yellow',
  colorHover: 'white',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'mdiMagnify',
  label: 'Search',
  iconAlignment: 'left',
  badge: 2,
  badgeTextColor: 'white',
  badgeColor: 'red',
};

export const WithIconBadge = Template.bind({});
WithIconBadge.args = {
  icon: 'mdiMagnify',
  label: 'Search',
  iconAlignment: 'left',
  badge: true,
  badgeTextColor: 'white',
  badgeColor: 'red',
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  iconCustom:
    <svg
      viewBox="0 0 24 24"
      role="presentation"
    >
      <path
        d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
        style={{ fill: 'currentcolor' }}
      />
    </svg>
  ,
  label: 'Account',
  iconAlignment: 'right',
};

const LinkWrapper = ({ children, href }: any) => {
  return <div className="custom-wrapper" data-href={href}>{children}</div>
}

export const LinkWithWrapper = Template.bind({});
LinkWithWrapper.args = {
  type: 'link',
  href: '#',
  underlined: true,
  underlinedHover: false,
  icon: 'mdiMagnify',
  label: 'Search',
  iconAlignment: 'right',
  isNewWindow: true,
  linkWrapper: LinkWrapper
};

export const LinkWithIcon = Template.bind({});
LinkWithIcon.args = {
  type: 'link',
  href: '#',
  underlined: true,
  underlinedHover: false,
  icon: 'mdiMagnify',
  label: 'Search',
  iconAlignment: 'right',
  isNewWindow: true,
};
