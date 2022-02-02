import React, { Fragment } from 'react';

import IProps from './component.types';

import { Wrapper, Image } from './styles';

const Component = ({ className, image, alt, title, width, height, href, newWindow, fit }: IProps) => {
  const wrapperProps = { width, height };
  const linkProps = {
    ...(newWindow ? { target: '_blank' } : {}),
  };
  const imageProps = {
    ...(fit ? { fit } : {}),
  };

  return (
    <Fragment>
      <Wrapper className={className} {...wrapperProps}>
        {
          href
            ? (
              <a href={href} {...linkProps}>
                <Image src={image} alt={alt} title={title} {...imageProps} />
              </a>
            )
            : (
              <Image src={image} alt={alt} title={title} {...imageProps} />
            )
        }
      </Wrapper>
    </Fragment>
  );
};

export default Component;
