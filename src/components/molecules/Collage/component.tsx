import React, { Fragment } from 'react';
import GlobalStyle from '@components/globalStyle';

import ColumnsComponent from '@components/molecules/Columns/component';

import IProps from './schema';

import { Wrapper, Spotlight, Items, SpotlightItem } from './styles';

const Component = ({ className, title, contents, spotlight, sizes, hasSpaceBetween, isReversed }: IProps) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper className={className}>
        {(title && <h1>{title}</h1>) || <></>}
        <Spotlight hasSpaceBetween={hasSpaceBetween} isReversed={isReversed}>
          <Items sizes={sizes}>
            {(contents?.length && (
              <ColumnsComponent isVertical={true} contents={contents} hasSpaceBetween={true} />
            )) || <></>}
          </Items>
          <SpotlightItem sizes={sizes}>
            {spotlight}
          </SpotlightItem>
        </Spotlight>
      </Wrapper>
    </Fragment>
  );
};

export default Component;
