import React, { useEffect, useRef, useState } from 'react'
import IProps from './component.types'

import { Wrapper, Columns, Column, ScrollContainer } from './styles'

type TViewPort = {
  width: number
  height: number
  colWidth: number
  colHeight: number
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
  const [viewPort, setViewPort] = useState<TViewPort>({
    width: 0,
    height: 0,
    colWidth: 0,
    colHeight: 0,
  })
  const wrapperEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (wrapperEl?.current) {
      setViewPort(() => ({
        width: wrapperEl?.current?.offsetWidth ?? 0,
        height: wrapperEl?.current?.offsetHeight ?? 0,
        colWidth:
          visibleCols && wrapperEl?.current && !isVertical
            ? wrapperEl?.current?.offsetWidth / visibleCols
            : 0,
        colHeight:
          visibleCols && wrapperEl?.current && isVertical
            ? wrapperEl?.current?.offsetHeight / visibleCols
            : 0,
      }))
    }
  }, [wrapperEl, visibleCols, isVertical])

  const columnsComponent = Array.from({ length: contents.length }).map(
    (_, index) => {
      sizes =
        !isScrollable && !visibleCols && viewPort
          ? sizes
          : [...contents].map((_) =>
              isVertical ? viewPort.colHeight : viewPort.colWidth,
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
      )
    },
  )

  return (
    <Wrapper className={className}>
      {title ? <h1>{title}</h1> : <></>}
      <Columns
        className="columns"
        ref={wrapperEl}
        isScrollable={isScrollable}
        isVertical={isVertical}
        scrollHeight={scrollHeight}
      >
        {isScrollable ? (
          <ScrollContainer>
            {columnsComponent.map((column) => column)}
          </ScrollContainer>
        ) : (
          <>{columnsComponent.map((column) => column)}</>
        )}
      </Columns>
    </Wrapper>
  )
}

export default Component
