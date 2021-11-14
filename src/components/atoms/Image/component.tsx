import React, { Fragment } from 'react';
import GlobalStyle from '@components/globalStyle';

import IProps from './schema';

import { Wrapper, Image } from './styles';

const Component = ({ className, image, alt, width, height, href, newWindow, fit }: IProps) => {
  const wrapperProps = { width, height };
  const linkProps = {
    ...(newWindow ? { target : '_blank' } : {}),
  };
  const imageProps = {
    ...(fit ? { fit } : {}),
  };

  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper className={className} {...wrapperProps}>
        {
          href
          ? (
            <a href={href} {...linkProps}>
              <Image src={image} alt={alt} {...imageProps} />
            </a>
          )
          : (
            <Image src={image} alt={alt} {...imageProps} />
          )
        }
      </Wrapper>
    </Fragment>
  );
};

export default Component;
