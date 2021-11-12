import { ComponentStory, ComponentMeta } from '@storybook/react';
import Component from './component';

export default {
  title: 'Atoms/Event Item',
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Event Title',
  dateTime: '2020-12-21',
  text: 'Description',
};
