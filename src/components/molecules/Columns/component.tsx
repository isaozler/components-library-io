import React, { Fragment, useEffect, useRef, useState } from 'react';
import IProps from './component.types';

import { Wrapper, Columns, Column, ScrollContainer } from './styles';

type TViewPort = {
  width: number;
  height: number;
  colWidth: number;
  colHeight: number;
}

const Component = ({
  title,
  className,
  sizes,
  contents,
  hasSpaceBetween,
  isVertical,
  isScrollable,
  scrollHeight,
  visibleCols,
}: IProps) => {
  const [viewPort, setViewport] = useState<TViewPort>({ width: 0, height: 0, colWidth: 0, colHeight: 0 });
  const [_visibleCols] = useState<number | undefined>(visibleCols);
  const wrapperEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperEl?.current) {
      setViewport(() => ({
        width: wrapperEl?.current?.offsetWidth || 0,
        height: wrapperEl?.current?.offsetHeight || 0,
        colWidth:
          _visibleCols && wrapperEl?.current && !isVertical
            ? wrapperEl?.current?.offsetWidth / _visibleCols
            : 0,
        colHeight:
          _visibleCols && wrapperEl?.current && isVertical
            ? wrapperEl?.current?.offsetHeight / _visibleCols
            : 0,
      }))
    }
  }, [wrapperEl, _visibleCols, isVertical])

  const columnsComponent = Array.from({ length: contents.length }).map((_, index) => {
    sizes =
      !isScrollable && !visibleCols && viewPort
        ? sizes
        : [...contents].map((_) => isVertical
          ? viewPort.colHeight
          : viewPort.colWidth
        )
    return (
      <Column
        key={`column-content--${index}`}
        isVertical={isVertical}
        hasSpaceBetween={hasSpaceBetween}
        isScrollable={isScrollable}
        sizes={sizes}
        visibleCols={visibleCols}
      >
        {contents[index]}
      </Column>
    );
  })

  return (
    <Wrapper className={className}>
      {title ? <h1>{title}</h1> : <></>}
      <Columns
        ref={wrapperEl}
        isScrollable={isScrollable}
        isVertical={isVertical}
        scrollHeight={scrollHeight}
      >
        {isScrollable
          ?
          <>
            <ScrollContainer>
              {columnsComponent.map(column => column)}
            </ScrollContainer>
          </>
          : <>
            {columnsComponent.map(column => column)}
          </>
        }
      </Columns>
    </Wrapper>
  );
};

export default Component;
