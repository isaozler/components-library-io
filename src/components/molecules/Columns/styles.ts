import styled, { css } from 'styled-components';
import IProps from './schema';

export const Wrapper = styled.div.attrs((props: IProps) => props)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  ${({ isVertical, scrollHeight }) => isVertical ? css`
    height: ${scrollHeight || '100%'};
    flex-direction: column;
  ` : ''}
  
  ${({ isScrollable, isVertical }) => isScrollable ? css`
    ${isVertical
      ? css`
          overflow-x: hidden;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;

          ${ScrollContainer} {
            flex-direction: column;
          }
        `
      : css`
          overflow-x: scroll;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
        `
    }
  
    padding-bottom: 0.1rem;
    transform: translateZ(0);
    -webkit-overflow-scrolling: touch;
    -ms-scroll-chaining: chained;
    transform-style: preserve-3d;
  ` : ''}
`;

export const Column = styled.div.attrs((props: IProps) => props)`
  flex-grow: 1;
  position: relative;
  z-index: 1;

  ${({ hasSpaceBetween, isVertical }: IProps) => hasSpaceBetween ? css`
    margin-${isVertical ? 'bottom' : 'right'}: var(--gutter);

    &:last-child {
      margin-${isVertical ? 'bottom' : 'right'}: 0;
    }
  ` : ''}

  ${({ isVertical, sizes, visibleCols }: IProps) =>
    isVertical
      ? sizes?.map((size, index) => css`
          &:nth-child(${index + 1}) {
            height: ${visibleCols ? `${size}px` : size};
          }
        `)
      : sizes?.map((size, index) => css`
          &:nth-child(${index + 1}) {
            width: ${visibleCols ? `${size}px` : size};
          }
        `)
  }

  ${({ isScrollable }) => isScrollable ? css`
    scroll-snap-align: start;
  ` : ''}

  ${({ isVertical, isScrollable }) => isVertical ? css`
    ${isScrollable ? css`flex-shrink: 0;` : ''}
  ` : ''}
`;

export const ScrollContainer = styled.div.attrs((props: IProps) => props)`
  display: inline-flex;
  flex-direction: row;
  height: 100%;
  white-space: nowrap;

  ${({ isVertical }) => isVertical ? css`
    flex-direction: column;
  ` : ''}
`
