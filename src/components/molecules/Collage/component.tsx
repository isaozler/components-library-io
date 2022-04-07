import React, { Fragment } from 'react';

import ColumnsComponent from '@components/molecules/Columns/component';

import IProps from './component.types';

import { Wrapper, Spotlight, Items, SpotlightItem } from './styles';

const Component = ({ className, title, contents, spotlight, sizes, hasSpaceBetween, isReversed }: IProps) => {
  return (
    <Fragment>
      <Wrapper className={className}>
        {(title && <h1>{title}</h1>) || <></>}
        <Spotlight
          className="spotlight"
          hasSpaceBetween={hasSpaceBetween}
          isReversed={isReversed}
        >
          <Items className="spotlight-items" sizes={sizes}>
            {(contents?.length && (
              <ColumnsComponent
                isVertical={true}
                contents={contents}
                hasSpaceBetween={true}
              />
            )) || <></>}
          </Items>
          <SpotlightItem className="spotlight-item" sizes={sizes}>
            {spotlight}
          </SpotlightItem>
        </Spotlight>
      </Wrapper>
    </Fragment>
  )
};

export default Component;
