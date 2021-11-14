import { ComponentStory, ComponentMeta } from '@storybook/react';
import Component from './component';

export default {
  title: 'Molecules/Image Text',
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Image Text Title',
  isVertical: true,
  contents: [
    <div>Column 1</div>,
    <div>Column 2</div>,
    <div>Column 3</div>,
  ],
  image: {
    caption: 'Image Caption',
    image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    fit: 'cover',
    href: undefined,
    newWindow: false,
  },
  hasSpaceBetween: true,
  sizes: ['20%', '20%'],
};
