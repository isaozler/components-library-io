import { ComponentStory, ComponentMeta } from '@storybook/react';
import Component from './component';

export default {
  title: 'Molecules/Columns',
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Columns Title',
  isVertical: false,
  contents: [
    <div>Column 1</div>,
    <div>Column 2</div>,
    <div>Column 3</div>,
  ],
  hasSpaceBetween: true,
  sizes: ['20%', '20%', '60%'],
};
