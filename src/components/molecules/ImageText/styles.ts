import styled, { css } from 'styled-components';
import IProps from './component.types';

export const Wrapper = styled.div.attrs((props: IProps) => props)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  ${({ isVertical }) => isVertical ? css`
    flex-direction: column;
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

  ${({ isVertical, sizes }: IProps) =>
    isVertical
      ? sizes?.map((size, index) => css`
          &:nth-child(${index + 1}) {
            height: ${size};
          }
        `)
      : sizes?.map((size, index) => css`
          &:nth-child(${index + 1}) {
            width: ${size};
          }
        `)
  }
`;
