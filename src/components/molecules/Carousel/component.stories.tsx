import { ComponentStory, ComponentMeta } from '@storybook/react';
import ImageText from '@components/molecules/ImageText/component';
import Component from './component';

export default {
  title: 'Molecules/Carousel',
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultSection: 0,
  sections: Array.from({ length: 3 }).map((_, index) =>
    <ImageText
      contents={[
        <div>Column {index}</div>,
      ]}
      image={{
        caption: `Image Caption ${index}`,
        image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        fit: 'cover',
        newWindow: false,
      }}
      hasSpaceBetween={true}
      sizes={['20%', '20%']}
    />
  ),
  className: '',
  unstacked: 'bottom',
};
