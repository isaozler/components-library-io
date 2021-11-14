import styled, { css } from 'styled-components';
import IProps from './schema';

export const Wrapper = styled.div.attrs((props: IProps) => props)`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 0;
  max-width: var(--headerImageWidth);
`;

export const Container = styled.div.attrs((props: IProps) => props)`
  width: 100%;
  display: block;
  height: var(--headerImageHeight);
`;

export const Controls = styled.div.attrs((props: IProps) => props)`
  display: flex;
  flex: 0 1 var(--controlSize);
  width: var(--controlSize);

  ul {
    display: flex;
    margin: 0;
    padding: 4px;
    list-style: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const Control = styled.li.attrs((props: IProps) => props)`
  display: flex;
  width: 100%;
  aspect-ratio: 1 / 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;

  &:last-child {
    margin: 0;
  }
`;

export const Button = styled.li.attrs((props: { active: boolean }) => props)`
  text-align: center;
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }

  ${({ active }) => active ? css`
    active
    background: transparent;
    color: white;
    border-color: white;
  ` : ''}
  
`;

export const Section = styled.div.attrs(({ active }: { active: boolean }) => ({ active }))`
  flex: 1 0 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  display: ${({ active }) => active ? 'block' : 'none'};
`;

export const Caption = styled.caption.attrs((props: IProps) => props)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(50% - 2 * var(--gutter));
  margin-left: calc(2 * var(--gutter));
  text-align: left;
  padding: var(--gutter);
`;
