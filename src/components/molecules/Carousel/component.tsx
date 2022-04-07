import React, { Fragment, useCallback, useState } from 'react';

import { Component as Icon } from '@components/atoms/Icon/Icon';

import IProps from './component.types';

import { Wrapper, Container, Controls, Control, Section, Button } from './styles';

const Component = ({ defaultSection, sections, className, iconCustom, icon, unstacked, title }: IProps) => {
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
      <Wrapper className={className}>
        {title ? <h1>{title}</h1> : <></>}
        <Container className="container">
          {sections?.map((component, index) => (
            <Section
              active={activeIndex === index}
              key={`section--${index}`}
              style={{}}
            >
              {component}
            </Section>
          ))}
        </Container>
        <Controls className="controls" unstacked={unstacked}>
          <ul>
            {sections?.map((_, index) => (
              <Control
                data-active={activeIndex === index}
                key={`section-control-${index}`}
              >
                <Button
                  active={activeIndex === index}
                  onClick={() => navControlHandler(index)}
                >
                  {icon ? (
                    CustomIconComponent ? (
                      CustomIconComponent
                    ) : (
                      <Icon icon={icon} />
                    )
                  ) : (
                    <></>
                  )}
                </Button>
              </Control>
            ))}
          </ul>
        </Controls>
      </Wrapper>
    </Fragment>
  )
};

export default Component;
