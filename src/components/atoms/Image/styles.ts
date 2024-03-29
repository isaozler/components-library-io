import styled from 'styled-components';
import IProps from './component.types';

export const Wrapper = styled.div.attrs((props: IProps) => props)`
  display: inline-block;
  ${({ width }) => width ? `width: ${width};` : ''}
  ${({ height }) => height ? `height: ${height};` : ''}
  overflow: hidden;
`;

export const Image = styled.img.attrs((props: IProps) => props)`
  display: block;
  margin: 0;
  padding: 0;
  outline: none;
  width: 100%;
  height: 100%;
  object-fit: ${({ fit }) => fit || 'contain'};
  /* aspect-ratio: attr(width) / attr(height); */
`;
