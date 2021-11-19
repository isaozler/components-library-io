import React, { Fragment, useCallback, useState } from 'react';
import GlobalStyle from '@components/globalStyle';

import ImageComponent from '@components/atoms/Image/component';
import { Component as Icon } from '@components/atoms/Icon/Icon';

import IProps from './schema';

import { Wrapper, Container, Controls, Control, Section, Caption, Button } from './styles';

const Component = ({ defaultSection, sections, className, iconCustom, icon, unstacked }: IProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultSection || 0);
  const navControlHandler = useCallback(
    (index) => {
      setActiveIndex(() => index);
    },
    [setActiveIndex],
  );

  const CustomIconComponent = iconCustom ? iconCustom : null;

  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper className={className}>
        <Container>
          {sections?.map(({ image, caption, fit, href, newWindow }, index) => {
            return (
              <Section
                active={activeIndex === index}
                key={`section--${index}`}
                style={{}}
              >
                <ImageComponent
                  key={`content--${index}`}
                  href={href}
                  newWindow={newWindow}
                  width="100%"
                  height="100%"
                  image={image}
                  fit={fit || 'contain'}
                  alt={caption || href}
                />
                { !!caption ? <Caption unstacked={unstacked} key={`info-${index}`}>
                  {caption}
                </Caption> : <></>}
              </Section>
            );
          })}
        </Container>
        <Controls unstacked={unstacked}>
          <ul>
            {sections?.map((_, index) => (
              <Control key={`section-control-${index}`}>
                <Button
                  active={activeIndex === index}
                  onClick={() => navControlHandler(index)}
                >
                  {icon ? CustomIconComponent ? CustomIconComponent : <Icon icon={icon} /> : <></>}
                </Button>
              </Control>
            ))}
          </ul>
        </Controls>
      </Wrapper>
    </Fragment>
  );
};

export default Component;
