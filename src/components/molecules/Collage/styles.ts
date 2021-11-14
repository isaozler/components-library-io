import styled, { css } from 'styled-components';
import IProps from './schema';

export const Wrapper = styled.div.attrs((props: IProps) => props)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const Spotlight = styled.div.attrs((props: IProps) => props)`
  display: flex;
  flex-direction: row;
  flex: 1 0 100%;
  width: 100%;
  height: 100%;
  max-width: var(--containerWidth);
  margin: 0 auto;
  padding: 0 var(--containerPadding);
  position: relative;

  ${({ hasSpaceBetween }) => hasSpaceBetween
    ? css`
        ${Items} {
          margin-right: calc(2 * var(--gutter));
        }
      `
    : ''}
  
  ${({ isReversed, hasSpaceBetween }) => isReversed
    ? css`
        ${Items} {
          ${hasSpaceBetween ? css`
            margin-left: calc(2 * var(--gutter));
            margin-right: 0;
          ` : ''}
          order: 1;
        }
        ${SpotlightItem} {
          order: 0;
        }
      `
    : ''}
`;

export const Items = styled.div.attrs((props: IProps) => props)`
  ${({ sizes }) => sizes?.length
    ? css`
        ${sizes[0] ? `width: ${sizes[0]}` : ''}
      `
    : ''}
`;

export const SpotlightItem = styled.div.attrs((props: IProps) => props)`
  display: flex;
  flex: 1 1 auto;
  aspect - ratio: 2 / 1;

  ${({ sizes }) => sizes?.length
    ? css`
        ${sizes[1] ? `width: ${sizes[1]}` : ''}
      `
    : ''}
`;
