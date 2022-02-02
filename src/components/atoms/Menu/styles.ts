import styled, { css } from 'styled-components';
import IProps from './component.types';

export const Ul = styled.ul.attrs((props: IProps) => props)`
  display: flex;
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const RootLi = css`
  margin: 0;
  padding: 0;
  list-style: none;
  flex: 1 1 auto;
`

const ChilrenUlWrapper = css`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Li = styled.li.attrs((props: { isFullWidth?: boolean; isRoot?: boolean }) => props)`
  position: relative;
  ${RootLi}

  ${({ isRoot, isFullWidth }) => isRoot
    ? css`
      margin-right: var(--gutter);
      ${!isFullWidth ? css`flex: unset;` : ''}

      &:last-child {
        margin-right: 0;
      }
    `
    : ''
  }

  > ul {
    ${ChilrenUlWrapper}
    position: absolute;
    top: 100%;
    left: 0;
    display: flex;
    flex-direction: column;
    display: none;
    align-items: flex-start;

    > li {
      flex: unset;
      white-space: nowrap;

      ul {
        top: 0;
        left: 100%;
      }
    }
  }

  &:hover {
    > ul {
      display: flex;
    }
  }
`;

export const A = styled.a.attrs((props: { onClick: (e: MouseEvent) => void }) => props)`
  display: block;
  padding: var(--gutter);
`;

export const Menu = styled.nav.attrs((props: IProps) => props)`
  display: flex;
  width: 100%;
  flex-direction: row;
`;
